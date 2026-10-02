# Examples

Full reviews from real runs live in `../../../examples/` (`typo.md`, `return-true.md`). Do not copy them. Study what made them work: every comment below was built from its input's own tokens and would not survive transplant.

## Comments that landed

| Input | Line |
|---|---|
| I fixed the typo | This needs to be three PRs. `I` makes an authorship claim and belongs with CODEOWNERS. `fixed` changes behaviour and needs a test. `the typo` changes data and needs a migration. Each needs its own reviewer, and I am all three. |
| I fixed the typo | Can we add a regression test that asserts the string `typo` no longer appears in the repo? Your line currently fails it. |
| return true | Credit where due, `return true` is in the imperative mood. It has no type, though, and flipping a default for every user is a breaking change: Conventional Commits wants `!` after the type or a `BREAKING CHANGE:` footer. |
| return true | `return` starts at column 0. Prettier's `tabWidth` is 2, PEP 8 says 4, and gofmt indents with tabs. Zero is the one width nobody recommends. |
| bumped the version to 1.0.1 | Have we considered Rust? Rust reached 1.0 in May 2015 and we are only now reaching 1.0.1. |
| bumped the version to 1.0.1 | This PR changes a major, a minor and a patch number. Please split it into three stacked PRs. The major and minor PRs will be small because nothing in them changes. |
| remove trailing space | `-m`: ESLint `id-length`, "Identifier name 'm' is too short (< 2)." Please use `--message`. |
| remove trailing space | rustfmt's default indent is 4 spaces, so the port also gives us four places to put it. |
| I changed one word in the README | PEP 8 reserves `UPPER_CASE` for constants. This file changed in this PR, so it is not a constant. |
| x = x + 1 | When this regresses we won't be able to bisect which of the three caused it: the read, the write, then the constant. The write is blocked on the constant. |
| `if user.age >= 18` | Can we add a test for the `:`? |

## Codas and smiles that landed

- Manager's PR adds 1,206 changelog lines, every one "I fixed it", no final newline. Smile: "nitpick (blocking): please match the wording on main." *(typo)*
- Manager's PR changes the flag to `return 1 == 1 ? true : true`. Smile: "nit: main already returns true. Closing as a duplicate?" *(return true)*
- Manager's PR jumps the version to 0.9.0. Smile: "going from 0.9.0 to 1.0.1 is a breaking change. Please add `!`." *(version bump)*
- Manager's PR restores the trailing space. Smile: "`W291` on line 41 again. Could you take a look?" *(trailing space)*
- Manager's PR is `x=x+1;` 1,842 characters long. Smile: "nit: after the rebase, `x` is 307 on main. Please add a test." *(x = x + 1)*

## What failed in earlier drafts

- Claiming a short line "fails" the four line limits, or that they cannot all be met. They are upper bounds; a short line meets all of them. Ask which one it targets instead.
- The same skeleton every run: "review requested 13 days ago", 47 comments, +5,207, approved in 14 seconds, "clean as always", the Go-guide reversal and resolve/unresolve in every round two, `.editorconfig` in every coda.
- Invented Conventional Comments labels (`naming:`). Shortened quotations presented as verbatim.
- Rust claims beyond `rules.md` ("safe Rust would not let that mutation through").
