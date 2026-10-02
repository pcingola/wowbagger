---
prompt: /wowbagger-code-reviewer return true
---

**#2861 return true** · `flip-checkout-flag → main` · `+1 −1` · `src/flags/isNewCheckoutEnabled.js`

```diff
 export function isNewCheckoutEnabled() {
-  return false
+return true
 }
\ No newline at end of file
```

✗ lint — eslint: Newline required at end of file but not found.  eol-last
✗ commitlint — subject may not be empty: type-empty
✗ coverage — 0 of 1 changed lines covered
✓ build — 3s
◌ e2e — Queued (since Aug 19)

**@okessler** requested changes · 53 comments

---

Appreciate you opening this.

`isNewCheckoutEnabled.js:14` **nitpick (blocking):** Nothing follows `true`. POSIX defines a line as "a sequence of zero or more non-<newline> characters plus a terminating <newline> character". By that definition the `+1` in the header is generous.

`isNewCheckoutEnabled.js:14` **issue (blocking):** No semicolon after `true`. The Airbnb guide requires one. StandardJS forbids one. Please add the one that satisfies both.

`isNewCheckoutEnabled.js:14` **nitpick (blocking):** `return` starts at column 0. Prettier's `tabWidth` is 2, PEP 8 says "Use 4 spaces per indentation level.", and gofmt indents with tabs. Zero is the one width nobody recommends.

`isNewCheckoutEnabled.js:14` **suggestion:** `true` is an unnamed value controlling checkout for every user. Please extract it into `IS_NEW_CHECKOUT_ENABLED_DEFAULT_RETURN_VALUE`. That's UPPER_CASE, per PEP 8's naming for constants.

`isNewCheckoutEnabled.js:14` **suggestion (non-blocking):** Since I'm here anyway:
```suggestion
  return ture;
```

`isNewCheckoutEnabled.js:13` **question:** why?

`isNewCheckoutEnabled.js:14` **quibble (blocking):** `docs/STYLE.md` §6.3: "A function has exactly one return statement." §6.4: "Return early." With one line, this function does both and neither.

`isNewCheckoutEnabled.js:14` **todo:** Can we add tests? At least one asserting `true` is truthy, plus a negative case for when it isn't.

`isNewCheckoutEnabled.js:14` **thought:** Have we considered Rust? `true` is a value with no `unsafe` block around it, which is what safe Rust is for, and rustfmt would give this line the 4-space indent it's missing.

`isNewCheckoutEnabled.js:14` **chore (blocking):** This touches three separate things. `return` is control flow, `true` is behaviour, and the missing newline changes whether the file has any lines at all. Three PRs, please, so each one gets a focused review from me.

`(commit)` **nitpick (blocking):** Credit where due, `return true` is in the imperative mood. It has no type, though, and flipping a default for every user is a breaking change: Conventional Commits wants `!` after the type or a `BREAKING CHANGE:` footer.

`isNewCheckoutEnabled.js` **suggestion:** While you're in here, could you move the other 212 flags in `src/flags/` onto the new flag service?

`isNewCheckoutEnabled.js:14` **praise:** Exactly one space between `return` and `true`. Consistent.

*42 hidden conversations · Load more…*

**@okessler:** Overall looks good, just a few small things. Google's guidance: "In general, reviewers should favor approving a CL once it is in a state where it definitely improves the overall code health of the system being worked on, even if the CL isn't perfect." Requesting changes.

---

**author:** fixed

*pushed 1 commit · Apply suggestions from code review*

`isNewCheckoutEnabled.js:14` **issue (blocking):** `ture` is not defined. Please run your code before requesting review.

`isNewCheckoutEnabled.js:14` **nitpick (blocking):** The Linux kernel coding style says tabs are 8 characters. This is 2 spaces, which is neither a tab nor 8.

`isNewCheckoutEnabled.js:14` **issue (blocking):** `docs/STYLE.md` §5.2.1 (added today): "Flag defaults must be named constants." §5.9: "Names must not exceed 8 characters." `IS_NEW_CHECKOUT_ENABLED_DEFAULT_RETURN_VALUE` is 44, and I still can't find it in the diff.

**@okessler** requested changes

---

**#2862 wip pls merge** · **@vp-eng-tolland** · `+5,381 −2,647` · 213 files · *No description provided.* · ✗ 7 failing checks

```diff
 .github/workflows/lint.yml          deleted (−58)
 .editorconfig                       +insert_final_newline = false
 src/flags/isNewCheckoutEnabled.js   +return 1 == 1 ? true : true
```

**@okessler** approved these changes · 6 seconds after opening
> LGTM 🚀 bold direction.

*@vp-eng-tolland merged commit 9e04b7d into main, bypassing branch protection*

---

**#2861 return true**

*This branch has conflicts that must be resolved* · `src/flags/isNewCheckoutEnabled.js`

**@okessler:** nit: main already returns true. Closing as a duplicate?
