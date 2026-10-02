---
prompt: /wowbagger-open-source-maintainer the cancel button doesnt cancel
---

# doesnt work URGENT!!! #2217

`bug` `critical` *added by* **dvlpr-gr8**

**dvlpr-gr8** commented 3 weeks ago

cancel button doesnt cancel it does the thing!!! **@mdrury** this is production

```
Exception in thread "main" java.lang.NullPointerException
    at com.acme.billing.InvoiceService.purge(InvoiceService.java:412)
```

version: the one from tuesday

---

*tinymodal-bot added the `needs-triage` label*

**tinymodal-bot** commented 3 weeks ago

Thank you for your contribution to tinymodal! A maintainer will review this soon. Please make sure you have filled in the issue template.

---

**dvlpr-gr8** commented 3 weeks ago

**@mdrury** hello???

**dvlpr-gr8** commented 2 weeks ago (Saturday)

**@mdrury** 4000 invoices are gone, our users clicked cancel on "delete 4000 invoices?" and it deleted 4000 invoices

---

**mdrury** commented 10 days ago

Please provide a minimal reproducible example. [Issue template](.github/ISSUE_TEMPLATE/bug.md).

---

**dvlpr-gr8** commented 10 days ago

here

```js
// InvoicePurgeModal.jsx (912 lines)
const DB_PASS   = "XXXX"
const S3_SECRET = "XXXX"
const PAYMENTS  = "sk-live-NOTAREALKEY-0000"
const ADMIN_PIN = "XXXX"
// ... 908 more lines
```

---

**bjorn-fe** commented 9 days ago
+1

**xXcoder99** commented 9 days ago
same

**amelia-k** commented 8 days ago
how do i center the modal

**tsunami-dev** commented 8 days ago
works for me on 0.9.7

**bjorn-fe** commented 6 days ago
any update?

---

**mdrury** commented 6 days ago

Your `<button>` has no `type`. Inside a `<form>`, it defaults to `submit`.

---

**deliverylead-dan** commented 5 days ago

Hi all, jumping in from the delivery side. Could we get an ETA on this, and maybe a quick call to align on next steps? Our customer is asking.

**mdrury** commented 5 days ago

[github.com/sponsors/mdrury](#)

---

**dvlpr-gr8** commented 5 days ago

this is unacceptable for a library this many people use, we are evaluating alternatives

**mdrury** commented 5 days ago

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

---

**quietpatch** commented 4 days ago

It's also a bug in tinymodal. The reporter's markup is wrong, but so is ours.

```
git bisect start v0.9.3 v0.9.2
git bisect run npm test -- cancel.spec.js
```

First bad commit is `a41f0c2 refactor: simplify button markup` in 0.9.3. It dropped `type="button"` from the built-in Cancel button. Anyone who put `<TinyModal>` inside a form got a Cancel that submits. Patch release, so everyone on `^0.9.0` picked it up on Tuesday.

*quietpatch linked a pull request that will close this issue: #2231 fix: restore type="button" on cancel*

---

**#2231** · 3 lines changed

**mdrury** commented 4 days ago
PRs welcome.

*cla-assistant: ✗ quietpatch has not signed the Contributor License Agreement*
*commitlint: ✗ `fix:` is not allowed for markup changes, use `chore:`*
*changelog-check: ✗ CHANGELOG.md not updated*
*CI / e2e-legacy-ie11: ✗ failed (also failing on `main` for 412 days)*

---

*mdrury pinned issue #2232 "On the future of this project"*

> After nine years I am stepping back. I've bought a cabin with no Wi-Fi and a goat named Semver. I want to thank "the community" for everything it has taught me about people. tinymodal will continue, in the sense that it will not be deleted.

---

*stale[bot] added the `stale` label*

**stale[bot]** commented 2 days ago

This issue has been automatically marked as stale because it has not had recent activity. It will be closed if no further activity occurs. Thank you for your contributions.

---

**dvlpr-gr8** commented 1 day ago

nvm fixed it

*dvlpr-gr8 closed this as completed*

**dvlpr-gr8** commented 1 day ago

sorry for the tone earlier, it was a hard week. thank you for maintaining this, genuinely

*mdrury added the `wontfix-human` label*

**mdrury** commented 1 day ago

Locking as this has become too heated.

*mdrury locked this conversation and limited it to collaborators* · 🎉 1

*#2231 was closed by stale[bot]*

👍 2 · 👎 31

---

*3 years later: **ops-intern-04** mentioned this issue in #5108 "doesnt work: confirm button cancels (v4.0.1)"*
