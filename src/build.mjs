// Generates the site pages into docs/ from src/skills.json and src/templates/.
// Run by `make site` after src/html/ has been copied to docs/.
//   docs/index.html               main page with static skill cards
//   docs/skills/<slug>/index.html one page per skill, slug = id without "wowbagger-"
// Fails if an image, share image or listed example file is missing.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { marked } from "marked";

const SITE = "https://pcingola.github.io/wowbagger/";
const REPO = "https://github.com/pcingola/wowbagger/blob/main/plugins/";
const CATS = ["All", "Work", "Tech", "Science", "People", "Life"];
const OUT = "docs";

const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" })[c]);

// Example output is shown verbatim: raw HTML in it (e.g. "<Client>") is text.
// It is also shown out of its repository context, so a relative link in it
// (e.g. to an issue template) would be broken: render its text only.
marked.use({ breaks: true, renderer: {
  html(token) {
    return esc(token.text);
  },
  link(token) {
    if (/^(https?:|mailto:)/.test(token.href)) return false;
    return `<span class="link">${this.parser.parseInline(token.tokens)}</span>`;
  },
} });

const errors = [];
const fail = msg => errors.push(msg);


// Replace {key} in a template with vars[key]; unknown keys are left alone.
// Single pass over the template, so substituted text is never re-scanned.
const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));

const slug = s => s.id.replace(/^wowbagger-/, "");
const sortKey = s => s.title.replace(/^The /, "");

// An example file: front matter with a `prompt:` line, then the output as Markdown.
function readExample(s, name) {
  const path = `plugins/${s.id}/examples/${name}.md`;
  if (!existsSync(path)) { fail(`${s.id}: example "${name}" listed in src/skills.json but ${path} does not exist`); return null; }
  const md = readFileSync(path, "utf8");
  const fm = md.match(/^---\n([\s\S]*?)\n---\n/);
  const prompt = fm?.[1].match(/^prompt:\s*(.*)$/m)?.[1].trim();
  if (!prompt) { fail(`${path}: no front-matter prompt: line`); return null; }
  let html = marked.parse(md.slice(fm[0].length));
  // A Markdown table needs a header row; drop it when it is empty.
  html = html.replace(/<thead>[\s\S]*?<\/thead>\n?/g, t => (t.replace(/<[^>]*>/g, "").trim() ? t : ""));
  return { prompt, html };
}

// Prompt with the leading /<id> split off, for the terminal prompt line.
function promptParts(prompt) {
  const m = prompt.match(/^(\/\S+)\s*(.*)$/);
  return m ? { cmd: m[1], rest: m[2] } : { cmd: "", rest: prompt };
}

const skills = JSON.parse(readFileSync("src/skills.json", "utf8"));
const ids = new Set();
for (const s of skills) {
  for (const k of ["id", "title", "cat", "img", "alt", "text", "tags", "examples"])
    if (s[k] === undefined) fail(`${s.id ?? "?"}: missing field "${k}"`);
  if (ids.has(s.id)) fail(`${s.id}: duplicate id`);
  ids.add(s.id);
  if (!CATS.includes(s.cat)) fail(`${s.id}: unknown category "${s.cat}"`);
  if (!existsSync(`src/html/img/${s.img}.webp`)) fail(`${s.id}: src/html/img/${s.img}.webp does not exist`);
  if (!existsSync(`src/html/img/og-${s.img}.jpg`)) fail(`${s.id}: src/html/img/og-${s.img}.jpg does not exist`);
  if (!s.examples?.length) fail(`${s.id}: no examples`);
  s.ex = (s.examples ?? []).map(name => readExample(s, name));
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }

const sorted = [...skills].sort((a, b) => sortKey(a).localeCompare(sortKey(b), "en"));
const tagsHTML = t => `<div class="tags">${t.map(x => `<span>${esc(x)}</span>`).join("")}</div>`;

// Skill pages
const skillTpl = readFileSync("src/templates/skill.html", "utf8");
sorted.forEach((s, i) => {
  const prev = sorted[(i - 1 + sorted.length) % sorted.length];
  const next = sorted[(i + 1) % sorted.length];
  const n = s.ex.length;
  const examples = s.ex.map((e, j) => {
    const p = promptParts(e.prompt);
    return `<div class="term">
    <div class="bar"><div class="dots" aria-hidden="true"><i></i><i></i><i></i></div><div class="t">${s.id} — example ${j + 1} of ${n}</div></div>
    <div class="prompt">${p.cmd ? `<span class="cmd">${esc(p.cmd)}</span> ` : ""}${esc(p.rest)}</div>
    <div class="out">${e.html}</div>
  </div>`;
  }).join("\n  ");
  const url = `${SITE}skills/${slug(s)}/`;
  const html = fill(skillTpl, {
    title: esc(s.title),
    text: esc(s.text),
    url,
    og_image: `${SITE}img/og-${s.img}.jpg`,
    alt: esc(s.alt),
    img: s.img,
    cat: esc(s.cat),
    id: s.id,
    skill_md: `${REPO}${s.id}/skills/${s.id}/SKILL.md`,
    tags: tagsHTML(s.tags),
    examples,
    pager: `<a class="prev" href="../${slug(prev)}/"><small>← Previous</small>${esc(prev.title)}</a>`
         + `<a class="next" href="../${slug(next)}/"><small>Next →</small>${esc(next.title)}</a>`,
  });
  mkdirSync(`${OUT}/skills/${slug(s)}`, { recursive: true });
  writeFileSync(`${OUT}/skills/${slug(s)}/index.html`, html);
});

// Main page
function card(s) {
  const teaser = promptParts(s.ex[0].prompt).rest;
  return `<a class="card" href="skills/${slug(s)}/" data-cat="${esc(s.cat)}">
      <img src="img/${s.img}.webp" alt="${esc(s.alt)}" width="800" height="597" loading="lazy">
      <div class="body">
        <h3>${esc(s.title)}</h3>
        <span class="name mono">${s.id}</span>
        <p>${esc(s.text)}</p>
        ${tagsHTML(s.tags)}
        <div class="try"><span class="p"><span class="cmd">&gt;</span> ${esc(teaser)}</span></div>
      </div>
    </a>`;
}
const indexTpl = readFileSync("src/templates/index.html", "utf8");
writeFileSync(`${OUT}/index.html`, fill(indexTpl, {
  featured: skills.filter(s => s.featured).map(card).join("\n    "),
  all: sorted.map(card).join("\n    "),
  chips: CATS.map((c, i) => `<button type="button" aria-pressed="${i === 0}" data-cat="${c}">${c}</button>`).join(""),
}));

console.log(`${OUT}/index.html and ${sorted.length} skill pages written`);
