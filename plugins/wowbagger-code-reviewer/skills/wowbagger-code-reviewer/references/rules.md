# Rules

The complete list of real rules, style guides, linter codes and quotations this reviewer may cite. **Cite only these, stated as below, or say nothing.** No other rule code, section number, default value, version number or quotation may appear in a review. If a comment needs a rule that is not here, it uses the house style guide (invented, see the end of this file) or no citation at all.

Misapplying a real rule is allowed and encouraged (gofmt's tabs demanded in a Python file, a Go naming rule quoted at JavaScript). Misstating one is not. The rule is always right; the reviewer is wrong about where it applies.

## Python

| Source | Exact fact |
|---|---|
| PEP 8, line length | "Limit all lines to a maximum of 79 characters." Teams may agree to go up to 99, "provided that comments and docstrings are still wrapped at 72 characters." |
| PEP 8, indentation | "Use 4 spaces per indentation level." "Spaces are the preferred indentation method." |
| PEP 8, names to avoid | "Never use the characters 'l' (lowercase letter el), 'O' (uppercase letter oh), or 'I' (uppercase letter eye) as single character variable names." |
| PEP 8, comments | "Comments that contradict the code are worse than no comments." |
| PEP 8, whitespace | "Avoid trailing whitespace anywhere. Because it's usually invisible, it can be confusing." |
| PEP 8, section title | "A Foolish Consistency is the Hobgoblin of Little Minds". Its opening: "A style guide is about consistency. Consistency with this style guide is important. Consistency within a project is more important. Consistency within one module or function is the most important." |
| PEP 8, naming | Functions and variables `lowercase_with_underscores`; classes `CapWords`; constants `UPPER_CASE`. |
| PEP 8, singletons | Comparisons to `None` use `is` / `is not`, never `==`. |
| PEP 8, blank lines | Two blank lines around top-level function and class definitions. |
| pycodestyle | `E501` line too long (default max 79). `W291` trailing whitespace. `W292` no newline at end of file. `W391` blank line at end of file. `W293` whitespace on blank line. `E225` missing whitespace around operator. `E302` expected 2 blank lines. `E711` comparison to None. `E741` ambiguous variable name (`l`, `O`, `I`). |
| pylint | `C0301` line-too-long, default `max-line-length` 100. `C0303` trailing-whitespace. `C0304` missing-final-newline. `C0114` missing-module-docstring. `C0103` invalid-name. `C0104` disallowed-name; the default bad names are `foo`, `bar`, `baz`, `toto`, `tutu`, `tata`. Pylint prints a score: "Your code has been rated at 0.00/10". |
| Black | "The Uncompromising Code Formatter". Default line length 88. Prefers double quotes. |
| Google Python Style Guide | "Maximum line length is 80 characters." "Indent your code blocks with 4 spaces." Allows single-character names for counters and iterators (`i`, `j`, `k`, `v`), `e` in `except`, `f` for file handles. "Descriptiveness should be proportional to the name's scope of visibility." |

So Python alone has four line limits: 79 (PEP 8, pycodestyle), 80 (Google), 88 (Black), 100 (pylint). Each is correct.

## JavaScript / TypeScript

| Source | Exact fact |
|---|---|
| ESLint `id-length` | Enforces minimum and maximum identifier lengths; default minimum 2. Flags `i`. The rule is marked frozen. Message: "Identifier name 'i' is too short (< 2)." |
| ESLint `max-len` | Default maximum 80 for code. Deprecated in ESLint v8.53.0, moved to `@stylistic/eslint-plugin`. Same for the other formatting rules: `semi`, `quotes`, `indent`, `no-trailing-spaces`, `eol-last`. |
| ESLint `no-var`, `prefer-const`, `eqeqeq` | Require `let`/`const`; require `const` for never-reassigned bindings; require `===` and `!==`. |
| ESLint `no-magic-numbers` | Flags numeric literals that are not named constants. Message: "No magic number: 5." |
| ESLint `eol-last` | Message: "Newline required at end of file but not found." (Deprecated with the other formatting rules.) |
| ESLint `camelcase` | Enforces camelCase identifiers. |
| ESLint `no-console` | Disallows `console` calls. |
| ESLint `no-warning-comments` | Flags comments containing `todo`, `fixme`, `xxx` by default. |
| Prettier | Default `printWidth` 80, `tabWidth` 2, semicolons on, double quotes. |
| Airbnb JavaScript Style Guide | 2-space indentation, semicolons required, single quotes for strings, max line length 100. |
| StandardJS | 2-space indentation, no semicolons. |

Airbnb requires semicolons; StandardJS forbids them. Airbnb wants single quotes; Prettier and Black default to double. All correct.

## Go, Rust, C

| Source | Exact fact |
|---|---|
| gofmt | Indents with tabs. |
| Go Code Review Comments, variable names | "Variable names in Go should be short rather than long." Prefers `i` over `sliceIndex`. |
| Go Code Review Comments, receivers | One or two letters; never `me`, `this` or `self`. |
| Go Code Review Comments, initialisms | `URL` not `Url`; `ServeHTTP` not `ServeHttp`; `appID` not `appId`. |
| rustfmt | Default `max_width` 100, 4-space indentation. |
| Rust | 1.0 was released in May 2015. Safe Rust guarantees memory safety; `unsafe` blocks opt out. |
| Linux kernel coding style | Tabs are 8 characters. "If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program." 80 columns is the preferred limit. |

Go's guide wants `i`; ESLint `id-length` rejects `i`. Both are correct.

## Git and commits

| Source | Exact fact |
|---|---|
| Git's SubmittingPatches | Describe changes in imperative mood: "make xyzzy do frotz", not "[This patch] makes xyzzy do frotz". So "Fix typo", not "Fixed typo" and not "I fixed the typo". |
| Tim Pope, "A Note About Git Commit Messages" (2008) | Summary of about 50 characters, blank line, body wrapped at 72. Git itself enforces neither. |
| Conventional Commits 1.0.0 | Messages begin with a type: the spec defines `feat` and `fix`; others such as `docs`, `chore`, `style`, `refactor`, `test` come from the Angular convention. Breaking changes: `!` after the type or a `BREAKING CHANGE:` footer. |
| commitlint | Rule names `type-empty`, `subject-empty`, `subject-case`, `header-max-length`. Messages in the form "type may not be empty [type-empty]", "subject may not be empty [subject-empty]". Imperative mood is not a built-in commitlint rule; a CI line about it is the house's own check. |
| POSIX | A line is "a sequence of zero or more non-<newline> characters plus a terminating <newline> character". A file whose last line lacks a newline ends in something that is, formally, not a line. |

## Code review itself

| Source | Exact fact |
|---|---|
| Google Engineering Practices, "The Standard of Code Review" | "In general, reviewers should favor approving a CL once it is in a state where it definitely improves the overall code health of the system being worked on, even if the CL isn't perfect." |
| Same | Minor points: "prefix it with something like 'Nit: ' to let the author know that it's just a point of polish that they could choose to ignore." |
| Google Engineering Practices, "Speed of Code Reviews" | "One business day is the maximum time it should take to respond to a code review request (i.e., first thing the next morning)." |
| Conventional Comments | Labels: `praise`, `nitpick`, `suggestion`, `issue`, `todo`, `question`, `thought`, `chore`, `note` (also `typo`, `polish`, `quibble`). Decorations: `(non-blocking)`, `(blocking)`, `(if-minor)`. |
| GitHub | Review outcomes: Comment, Approve, Request changes. Suggested changes are written in a ` ```suggestion ` block and applied with "Commit suggestion". Branch protection can require approvals and passing status checks; repository admins can be allowed to bypass it. CODEOWNERS: a line `* @handle` makes that handle owner of every file. |

## Quotations

| Quote | Source |
|---|---|
| "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil." | Donald Knuth, "Structured Programming with go to Statements", *ACM Computing Surveys*, 1974. |
| Bikeshedding / the law of triviality: a committee approves a nuclear plant quickly and argues at length about the bike shed. | C. Northcote Parkinson, *Parkinson's Law*, 1957. "Bikeshed" was popularised by Poul-Henning Kamp's 1999 FreeBSD mailing-list email. |
| "There are only two hard things in Computer Science: cache invalidation and naming things." | Attributed to Phil Karlton. Always "attributed". |

## The house style guide (invented)

`docs/STYLE.md`, "our style guide". Invented, internal, and contradicts itself. Section numbers are made up fresh each time; the contradictions are the point. It must never be presented as a real public document. Examples of the genre: §3.1 "Lines must not exceed 80 characters" / §3.4 "Never break a line mid-expression"; §5.2 "Names must be descriptive" / §5.9 "Names must not exceed 8 characters"; §1.1 "Follow PEP 8" / §1.2 "Follow Black where it disagrees with PEP 8" / §1.3 "Where Black and PEP 8 agree, see §1.1".
