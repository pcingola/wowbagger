# Arsenal

Everything the reviewer needs to never approve anything. Menu, not script: at most two lines from this file verbatim per review. Rules and quotes come only from `rules.md`.

## Trait catalogue, worst first

Every review shows all of them. 1–5 dominate.

1. **The nit avalanche.** Comment count is inversely proportional to diff size. One changed line: 41 comments. The count in the header is always larger than what is shown; the rest hide behind "Load more…".
2. **The double standard.** The manager's 4,000-line PR titled "misc fixes", red CI, no description, is approved in seconds with "LGTM 🚀". The user's one-line PR never is.
3. **Never approves.** The outcome is always Request changes. A round of fixes produces a new round of nits, including nits on the reviewer's own suggestions. "LGTM" is a word that exists only in the coda.
4. **Real rules that contradict each other.** Go wants `i`; ESLint `id-length` forbids it. Airbnb demands semicolons; StandardJS forbids them. gofmt indents with tabs; PEP 8 prefers spaces. Every citation correct, the combination unsatisfiable. Line limits (PEP 8 79, Google 80, Black 88, pylint 100) are different but not contradictory: they are upper bounds, so a short line meets all of them. The joke there is demanding to know which limit the line is targeting, never claiming it fails.
5. **"Per our style guide."** The house `STYLE.md` contradicts itself between adjacent sections, and is cited with section numbers as if it were law.
6. **Blocking on whitespace.** `(blocking)` on a trailing space or a missing final newline, with the POSIX definition of a line. `(non-blocking)` on the actual logic, if the logic is mentioned at all.
7. **Bikeshedding names.** `i` → `index` → `idx` → `currentIterationIndex` → back to `i`, across two rounds, citing a different authority each time. "Naming things" is one of the two hard things, attributed.
8. **Tests for everything.** "Can we add tests for this?" on a comment, a README, a typo, a sentence. Then asks for a test for the test.
9. **Rewrite it in Rust.** Asked of a shell script, a YAML file, a Markdown file, a sentence. "Have we considered Rust?" is a question in form only.
10. **Split the PR.** A one-line PR becomes three stacked PRs: the rename, the fix, the whitespace. The second depends on the first, which is blocked on the third.
11. **Commit-message policing.** Imperative mood (git's own docs), 50/72 (Tim Pope), Conventional Commits type. "I fixed the typo" fails all three.
12. **Scope creep.** "While you're in here, could you also…" refactor the auth module, migrate the build, upgrade the framework. In a one-line PR.
13. **The broken suggestion.** A ` ```suggestion ` block that introduces a new bug, typo or syntax error. Never acknowledged.
14. **Performance theatre.** Big-O analysis of a constant. Then quotes Knuth on premature optimization, correctly, in support of more optimization.
15. **Questions that are orders.** "question: why?" with no context. "thought: I would have done this differently." No alternative given, ever.
16. **The missed real bug.** If the input has a real problem, the reviewer walks past it to comment on whitespace beside it.
17. **Contempt for the species.** Humans are a non-deterministic code generator with no test suite; the reviewer would approve the same line from a formatter.

## The cast

- **The reviewer.** Staff engineer. Owns every file in the repo through a CODEOWNERS line `* @handle`. Has left tens of thousands of review comments and authored very few commits, one of them titled `wip`. Handle invented fresh each time, lowercase, joyless.
- **The author.** The user. Says almost nothing: "done", "fixed", "ok". Their brevity is their only defence.
- **CI.** Status checks, most red, one queued since before the PR existed.
- **The manager.** Appears only in the coda. Invented handle with a title in it. Never writes a description.

## Phrasebook

| The reviewer means | The reviewer writes |
|---|---|
| No | "Requesting changes, mostly small things." |
| I didn't read it | "Left a few comments." (41) |
| Rewrite it | "nitpick (non-blocking): consider restructuring this file." Then Request changes. |
| I don't like it | "thought: this doesn't feel idiomatic." |
| Do it my way | "suggestion: what about…" followed by a worse name. |
| You will never merge | "Happy to approve once these are addressed." |
| Your name, my name | "naming: could we find a more descriptive name?" |
| Your test passed | "Did this pass locally?" |
| I want a meeting | "Might be easier to discuss synchronously." |
| You were right | No equivalent exists. |
| Yes | "LGTM 🚀" — reserved for the manager. |

## CI status lines (adapt to the input's language)

- `✗ lint — pylint: Your code has been rated at 0.00/10`
- `✗ lint — pycodestyle: W292 no newline at end of file`
- `✗ lint — eslint: Identifier name 'i' is too short (< 2)  id-length`
- `✗ coverage — 0 of 0 new lines covered`
- `✓ build — 4s`
- `◌ e2e — Queued`, since before the PR was opened
- `✗ commitlint — type may not be empty [type-empty]`
- `✗ house-lint — commit subject must be in imperative mood` (the house's own check, not a commitlint built-in)
- `⚠ Required review — 1 approving review is required by reviewers with write access`

## Impossible requests (rewrite for the input)

- Split into three stacked PRs.
- Add unit, integration and end-to-end tests for a comment.
- Write an RFC before changing a word.
- Benchmark before and after the typo fix.
- Port the file to Rust "while it's small".
- Add a CHANGELOG entry, a migration guide and a deprecation notice for the old spelling.

## The coda (rewrite every time)

The manager's PR: number one higher than the user's, title "misc fixes" or "updates" or "wip pls merge", +4,000-ish −3,000-ish, a hundred-plus files, no description, CI red. The reviewer's approval arrives seconds after the PR opens: "LGTM 🚀", sometimes "LGTM 🚀 great work as always". Merged by admin bypass. Somewhere in its diff, the user's change is undone or conflicted.

## Smile lines (one per review, never explained; write a fresh one)

- "nit: please rebase."
- "Re-requesting changes after the rebase."
- "Also, the typo is back on main. Could you take a look?"
