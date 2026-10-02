# Worked threads

Two real outputs of this skill. They show the beat order, the length and how every joke comes from the input. Do not reuse their lines, names or numbers; the next thread is about a different bug, and the user has read these.

## Input: "the README says recieve instead of receive"

### README says recieve URGENT!!! #4117

**dvlpr-gary** opened this issue 3 weeks ago · `bug` `critical` `P0` · 👍 2 👎 31

the readme says recieve its spelled receive. this is in production!!! our cto saw it

version: the one from tuesday

```
Traceback (most recent call last):
  File "worker.py", line 12, in <module>
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xe9 in position 41
```

*github-actions[bot] added the `needs-triage` label*

**github-actions[bot]** commented 3 weeks ago
Thank you for your contribution to postbox! A maintainer will review your issue shortly. 💙

**mkessler** commented 11 days ago
Thanks for the report! Please use the [issue template](#) and include a minimal reproduction.

**dvlpr-gary** commented 11 days ago
repro

```js
// lines 1-911 omitted (proprietary)
const bus = postbox.connect({ key: "XXXX", secret: "XXXX", billing: "sk-live-NOTAREALKEY-0000" })
bus.on("recieve", handler) // README line 41
```

**@mkessler** this is blocking our launch

**tobi-dev** commented 10 days ago
+1

**anon-4471** commented 10 days ago
same. also my websocket drops after 30s any update

**r-holloway** commented 9 days ago
Works fine for me on 2.0.0-rc4.

**dvlpr-gary** commented 9 days ago
**@mkessler** **@mkessler** its saturday!!! 9 days for a TYPO. unacceptable for a project this size

**mkessler** commented 9 days ago
`git log -S recieve` names the commit. It's in your fork.

**brandon-vp-eng** commented 8 days ago
Hi all, Brandon, VP Engineering at Gary's company. Could we get an ETA and set up a quick call to align on remediation?

**mkessler** commented 8 days ago
[github.com/sponsors/mkessler](#)

**brandon-vp-eng** commented 8 days ago
We would need an SLA in writing.

**mkessler** commented 8 days ago
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

**quiet-ana** commented 6 days ago
It's upstream too. 0.9.4 pasted the README example into `src/events.js`, so the bus now emits `"recieve"` and never `"receive"`. The README is correct about the code. Repro: install `postbox@0.9.3`, then `postbox@0.9.4`, same handler, only one fires.

*quiet-ana linked pull request #4122 `fix: emit "receive" again, keep "recieve" as alias` (+3 −1)*

**mkessler** commented on #4122 6 days ago
PRs welcome.

*CLAassistant: quiet-ana has not signed the Contributor License Agreement*
*commitlint ✗ — type must be `chore`*
*changeset-bot: no changeset found*
*ci / test-node-14 ✗ — Failing after 6m*
*ci / test-node-14 on main ✗ — Failing after 6m*

*mkessler pinned issue #4123*

**mkessler** commented 5 days ago on #4123 **On the future of this project**
Postbox gets nine million downloads a week and has three sponsors, two of whom are related to me. I have bought a cabin. There is a goat. The goat files no issues. I will be stepping back to spend more time with "the community", which I now understand to mean the goat. Releases will continue on a best-effort basis, where "best" is a legal term.

*stale[bot] added the `stale` label 3 days ago*

**stale[bot]** commented 3 days ago
This issue has been automatically marked as stale because it has not had recent activity. It will be closed if no further activity occurs. Thank you for your contributions.

**dvlpr-gary** commented 2 days ago
nvm fixed it

*dvlpr-gary closed this as completed 2 days ago*

**dvlpr-gary** commented 2 days ago
sorry for the noise earlier everyone, and thank you for maintaining this for free 🙏

*mkessler locked as too heated and limited conversation to collaborators 2 days ago*

**mkessler** commented 2 days ago
Locking as this has become too heated.
🎉 1

*mkessler added the `wontfix` label*
*mkessler added the `user-error` label to dvlpr-gary*

*w-tran mentioned this issue in #11402 `doesnt work` (postbox 4.2.0, `bus.on("recieve")`, README in English, German and Japanese)*


## Input: "the progress bar says 100% for the last 40 minutes"

### leftbar: the progress bar says 100% for the last 40 minutes #2291

**leftbar** v0.9.3 · 9.1M weekly downloads · Sponsors: 3

---

**xX_shipit_Xx** opened this issue 11 days ago · labels: `bug` `critical` `blocker` `P0`

**doesnt work URGENT!!!**

progress bar says 100% but its not done its been 40 minutes!!! this is in production

version: the new one

```
Exception in thread "main" java.lang.NullPointerException
    at com.acme.batch.Runner.run(Runner.java:212)
```

**@leftbar-maintainer** **@leftbar-maintainer**

*xX_shipit_Xx removed the issue template*

---

**leftbar-bot** commented 11 days ago

Thank you for your contribution to leftbar! A maintainer will review this issue soon. 💜

*leftbar-bot added the `needs-triage` label*

---

**xX_shipit_Xx** commented 9 days ago

**@leftbar-maintainer** its saturday and still 100%

---

**leftbar-maintainer** commented 4 hours later

Please provide a minimal reproducible example. [Template](../.github/ISSUE_TEMPLATE/bug.md).

---

**xX_shipit_Xx** commented 4 hours later

ok here is the code

```js
// ... 912 lines ...
const DB_PASS = "XXXX";
const S3_KEY = "XXXX";
const PAYMENT_KEY = "sk-live-NOTAREALKEY-0000";
const bar = new LeftBar({ total: files.length });
// ... 640 more lines ...
```

---

**dev_9284** commented 8 days ago
+1

**kd-throwaway** commented 8 days ago
same but mine says 0% for 40 minutes

**enterprise_greg** commented 7 days ago
any update?

**coolfrontend** commented 7 days ago
works for me on 1.4.0

---

**leftbar-maintainer** commented 7 days ago

`total` is read before your glob resolves. The bar is accurate about the wrong number.

*leftbar-maintainer added the `works-as-intended` label*

---

**d.harmon-acme** commented 6 days ago

Hi, I manage the team that owns this pipeline. Can we get an ETA, and maybe a quick call to align on priorities?

---

**leftbar-maintainer** commented 6 days ago

https://github.com/sponsors/leftbar-maintainer

---

**d.harmon-acme** commented 6 days ago

That doesn't answer the question.

---

**leftbar-maintainer** commented 6 days ago

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

*leftbar-maintainer added the `user-error` label*

---

**quiet-tuesday** commented 5 days ago

The reporter's `total` is wrong, but there is also a regression. Bisected with `git bisect start v0.9.3 v0.9.2`:

```
4e1f0a2 is the first bad commit
    perf: avoid float truncation in render loop
```

`Math.floor` became `Math.ceil`, so anything from 99.01% up renders as 100%. On a 40,000-file job the last 1% lasts a long time.

*quiet-tuesday opened pull request #2304 `fix: restore floor in percent render` (+1 −1, 1 test)*

---

**leftbar-maintainer** commented on #2304 5 days ago

PRs welcome.

---

**cla-assistant[bot]** commented on #2304 5 days ago

Thank you for your submission! Before we can accept your contribution, please sign our [Contributor License Agreement](#). 0 of 1 committers have signed.

**leftbar-maintainer** commented on #2304 5 days ago

Missing CHANGELOG entry. Also this is `chore:`, not `fix:`.

*CI / `test-node-14-windows` failed: same failure on `main`*

---

*leftbar-maintainer pinned issue #2305 "On the future of this project"*

> After nine years I've moved to a cabin with no internet and a goat named Semver. I'm grateful to "the community". I will continue reviewing PRs on a best-effort basis, which has always been the basis.

---

**leftbar-bot** commented 2 days ago

This issue has been automatically marked as stale because it has not had recent activity. It will be closed if no further activity occurs. Thank you for your contributions.

*leftbar-bot added the `stale` label*

---

**xX_shipit_Xx** commented 2 days ago

nvm fixed it

*xX_shipit_Xx closed this as completed*

---

**xX_shipit_Xx** commented 1 day ago

Sorry for the tone earlier, and thank you for maintaining this for free. I really appreciate it.

---

**leftbar-maintainer** commented 1 day ago

Locking as this has become too heated.

*leftbar-maintainer locked this conversation as too heated and limited conversation to collaborators* · 🎉 1

*leftbar-bot closed pull request #2304 as stale*

---

*3 years later: **newdev2029** referenced this issue in #4417 "doesnt work, progress bar says 101%"*
