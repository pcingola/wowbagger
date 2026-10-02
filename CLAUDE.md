# Wowbagger

A Claude Code plugin marketplace of joke skills. Each plugin is
`plugins/wowbagger-<name>/` with `.claude-plugin/plugin.json` and
`skills/wowbagger-<name>/SKILL.md`, listed in `.claude-plugin/marketplace.json`
and in the README table. The plugin name, the skill directory name and the
`name:` field in SKILL.md are the same string.

## Site

`src/html/index.html` is a standalone page: no build step, no framework.
`make site` copies `src/html/` to `docs/`, which is committed because GitHub
Pages serves `docs/` from `main`. Never edit `docs/` by hand. Skill cards are
generated from the `SKILLS` and `PENDING` arrays in the page script; a new
plugin goes into `SKILLS` with a 4:3 image in `src/html/img/`.

Images: originals in `assets/images/` (not published), WebP copies in
`src/html/img/`:

```sh
magick assets/images/<name>.png -resize 800x -quality 80 -define webp:method=6 src/html/img/<name>.webp
```

## Tone

The page and the skills are deadpan: they never explain the joke. The README,
this file, comments and commit messages are plain technical English.
