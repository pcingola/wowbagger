---
prompt: /wowbagger-code-reviewer I fixed the typo
---

**#2863 I fixed the typo** · `patch-1 → main` · `+1 −1` · `CHANGELOG.md`

*stale-bot added the label `stale`*

`✗ lint (pycodestyle) — CHANGELOG.md:212:17: W292 no newline at end of file`
`✗ lint (pylint) — CHANGELOG.md: Your code has been rated at 0.00/10`
`✗ commitlint — type may not be empty [type-empty]`
`✗ house-lint — commit subject must be in imperative mood`
`◌ e2e — Queued (19 days)`

**@hjunberg** requested changes · 39 comments

> Appreciate you opening this. Left a few comments.

`CHANGELOG.md` L212
**nitpick (blocking):** No final newline. POSIX defines a line as "a sequence of zero or more non-<newline> characters plus a terminating <newline> character". Your line has no terminating newline, so what you added isn't formally a line.

`CHANGELOG.md` L212, col 1
**issue (blocking):** PEP 8: "Never use the characters 'l' (lowercase letter el), 'O' (uppercase letter oh), or 'I' (uppercase letter eye) as single character variable names." Please rename `I` to `the_undersigned_contributor`.

`CHANGELOG.md` L212, col 1
**nitpick (blocking):** Separately, Go Code Review Comments says "Variable names in Go should be short rather than long", and `I` can't get any shorter. ESLint `id-length` reports "Identifier name 'I' is too short (< 2)." Please satisfy both.

`CHANGELOG.md` L212
**chore (blocking):** `docs/STYLE.md` §6.3: "Changelog entries are complete sentences." §6.4: "Changelog entries begin with a verb." This entry is a complete sentence that begins with a pronoun.

`CHANGELOG.md` L212, col 13
**question:** which?

`CHANGELOG.md` L212
**todo (blocking):** Can we add a regression test that asserts the string `typo` no longer appears in the repo? Your line currently fails it.

`CHANGELOG.md` L212
**thought:** `fixed` means the typo was mutable at some point. Have we considered Rust? It has had a stable release since May 2015, and this repo still has no `Cargo.toml`.

`CHANGELOG.md` L212
**suggestion (blocking):** This needs to be three PRs. `I` introduces a new identifier, `fixed` changes behaviour, and `the typo` refers to an object that nothing in the diff defines. That object should land first so the other two have something to point at.

```suggestion
Fix the tpyo
```

Commit `a41c09e`
**issue (blocking):** `I fixed the typo` is first person and past tense. Git's SubmittingPatches asks for imperative mood: "make xyzzy do frotz". It also has no Conventional Commits type.

`CHANGELOG.md` L1–211
**polish (if-minor):** While you're in here, the other 211 entries are also past tense. Could you convert them to imperative and split the changelog into one file per entry under `docs/changelog/`?

`CHANGELOG.md` L212
**praise:** The three spaces between the four words are all the same width.

*29 hidden conversations · Load more…*

> Overall looks good, just a few small things. Per Google's review guidelines: "In general, reviewers should favor approving a CL once it is in a state where it definitely improves the overall code health of the system being worked on, even if the CL isn't perfect." Requesting changes.

---

**author:** fixed

*pushed 1 commit* `Fix the tpyo`

`CHANGELOG.md` L212
**typo (blocking):** "tpyo" is misspelled. A PR about a typo shouldn't add one. Please be more careful.

`CHANGELOG.md` L212
**nitpick (blocking):** `the_undersigned_contributor` is too long. Google Python Style Guide: "Descriptiveness should be proportional to the name's scope of visibility." It is visible on one line.

`CHANGELOG.md` L211
**question:** why?

`CHANGELOG.md` L212
**chore (blocking):** `docs/STYLE.md` §6.3a: "Changelog entries must not mention typos." Please update.

**@hjunberg** requested changes

---

**#2864 updates** · `kbrandt-vp-platform/stuff → main` · `+3,741 −2,318` · 163 files · *No description provided.*

`✗ lint` `✗ commitlint` `✗ house-lint` `✗ build` `◌ e2e — Queued`

```
CHANGELOG.md          +1,206   every line "I fixed it", no newline at end of file
.commitlintrc.yml     deleted
docs/STYLE.md         −412
```

**@hjunberg** approved these changes · 23 seconds after opening
> LGTM 🚀 reads well

*kbrandt-vp-platform merged commit 8e04b7d into main, bypassing branch protection*

---

**#2863 I fixed the typo**

*This branch has conflicts that must be resolved* · `CHANGELOG.md` L212

**@hjunberg:** nitpick (blocking): please match the wording on main.
