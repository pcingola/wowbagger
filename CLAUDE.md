# Wowbagger

A Claude Code plugin marketplace of joke skills. Each plugin is
`plugins/wowbagger-<name>/` with `.claude-plugin/plugin.json` and
`skills/wowbagger-<name>/SKILL.md`, listed in `.claude-plugin/marketplace.json`
and in the README table. The plugin name, the skill directory name and the
`name:` field in SKILL.md are the same string. The `wowbagger` marketplace
entry bundles every skill (`strict: false` and a `skills` list of paths); a new
skill's path goes into that list too.

## Site

Static site, no framework. `make site` copies `src/html/` (images) to `docs/`
and runs `node src/build.mjs`, which writes `docs/index.html` and
`docs/skills/<slug>/index.html` (slug = plugin name without `wowbagger-`).
`docs/` is committed because GitHub Pages serves it from `main`; CI runs
`make site` and fails if `docs/` changes. Never edit `docs/` by hand.

- `src/skills.json`: the skill list, one entry per plugin (`id`, `title`,
  `cat`, `img`, `alt`, `text`, `tags`, `examples`, `featured`). Single source
  for the main page cards and the skill pages.
- `src/templates/index.html`: main page; `{featured}`, `{chips}` and `{all}`
  are filled with statically rendered cards. Each card links to its skill
  page. The Featured row shows entries with `featured: true`; the All grid is
  sorted by title ignoring a leading "The ".
- `src/templates/skill.html`: skill page: image, install lines, every
  example as a terminal block, previous/next links in the All grid order.
- Markdown is rendered with `marked` pinned in `package.json` /
  `package-lock.json` (`make site` runs `npm ci` when `node_modules/` is
  missing). Raw HTML in examples is shown as text and relative links as plain
  text.

The build fails if an image, a share image or a listed example is missing.

Examples: `plugins/wowbagger-<name>/examples/<slug>.md` holds one real run, a
front-matter `prompt:` line followed by the output as Markdown. List the slugs
in the skill's `examples` field in `src/skills.json`; the first one's prompt
is the teaser line on the card. Tool-call lines are left out.

Images: originals in `assets/images/` (not published), WebP copies in
`src/html/img/`:

```sh
magick assets/images/<name>.png -resize 800x -quality 80 -define webp:method=6 src/html/img/<name>.webp
```

Share image for the skill page (`og:image`), 1200x630, committed so CI needs
no ImageMagick:

```sh
magick assets/images/<NN>-<name>.png -resize x630 -background '#17142B' -gravity center -extent 1200x630 -quality 85 src/html/img/og-<name>.jpg
```

## Adding a skill

1. Plan: `plans/plan_wowbagger_<name>.md` (gitignored), same structure as
   the existing plans: requirements with reasons, a ranked trait catalogue,
   output anatomy, escalation ladder, guardrails, card text, test prompts.
2. Build: one subagent per skill. Several can run in parallel; each touches
   only its own plan, `plugins/wowbagger-<name>/`, its image in
   `assets/images/` and `src/html/img/`. The coordinator owns the shared
   files (`marketplace.json`, `README.md`, `src/skills.json`, `docs/`)
   and commits.
3. Iterate: run the skill for real, at least three rounds of several
   prompts, and revise SKILL.md, references and plan after each round. Read
   every output as a hostile editor: is it funny, deadpan, specific to the
   prompt, free of lines repeated across runs, and is every fact real? Stop
   after two consecutive sharp rounds.

   ```sh
   claude -p "/wowbagger-<name> <prompt>" --plugin-dir plugins/wowbagger-<name> \
     --disallowedTools "Edit,Write,Bash,NotebookEdit" < /dev/null
   ```

   Disallow the editing tools: a test run once edited repository files.
4. Examples: save two of the best unedited runs to `examples/`.
5. Image: generate the card art, save the original as
   `assets/images/<NN>-<name>.png` (next free number), convert to WebP and
   make the share image.
6. Integrate: add the plugin entry and the bundle path to
   `marketplace.json`, a row to the README table, an entry at the end of
   `src/skills.json`; run `make site` and the CI manifest check; commit.

Facts a skill cites (rules, papers, regulations, canon) live in a
`references/` file and are verified; SKILL.md says to cite only from it.
The skill loader replaces `$` followed by a digit in SKILL.md with command
arguments, so write currency as `USD 8M`.

## Tone

The page and the skills are deadpan: they never explain the joke. The README,
this file, comments and commit messages are plain technical English.
