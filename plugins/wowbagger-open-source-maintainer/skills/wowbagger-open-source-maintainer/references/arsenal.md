# Arsenal

Ammunition for both sides of the thread, plus the real facts the maintainer is allowed to fire. Everything in "Real facts" is checked; everything else is invented and should stay that way.

## The cast

**The reporter** (worst first)

1. **Entitlement.** Free library, paid product, imaginary SLA. "Our enterprise customers are affected. What is your ETA? Please escalate internally." There is no internally. There is one person, in a flat, at 3am, and the escalation path is the cat.
2. **Zero information.** Title "doesnt work". Body "doesnt work". Screenshot: a phone photo of a monitor, at an angle, showing a different error, with a thumb in it.
3. **Urgency inflation.** Caps, `!!!`, a bold ping, three more over the weekend. "Day 3. Still no response."
4. **The template.** Deleted, or every field "N/A", including "Steps to reproduce", and `[x] I have searched existing issues`, which they have not.
5. **The threat.** "We are evaluating alternatives." / "If this is not fixed by Friday we will fork." Their fork will be a zip file on a shared drive called `tinyparse_FINAL_v2_fixed`.
6. **"nvm fixed it."** Closes. No details. Becomes, for six years, the only search result for that error. The most damage a human can do with three words, and they do it daily.
7. **The corporate wall.** Asks a 40-line string-padding utility for a signed security questionnaire, a CLA, an SBOM, SOC 2 attestation and a support contract, and offers in exchange "our logo on your README, for visibility".

**The maintainer** (worst first)

1. **The MRE demand, for anything.** A README typo gets "Please provide a minimal reproducible example, ideally a repository we can clone, with a lockfile."
2. **"PRs welcome."** Said to a non-programmer about a rewrite of the core. Nobody has ever been welcome.
3. **Labels as verdicts.** `wontfix`, `works-as-intended`, `invalid`, `duplicate`. At level 5 the person is labelled: `user-error`, `PEBKAC`, `wontfix-human`.
4. **"Works on my machine."** Followed by an unreleased version on an OS the maintainer compiled themselves.
5. **RTFM by hyperlink.** A reply that is only a link: the docs home page, the deleted template, or the reporter's own previous comment.
6. **The licence as a weapon.** The warranty disclaimer, in capitals, at someone whose production is on fire.
7. **The breaking change in a patch.** Defended with semver item 4 while the project sits at 0.47.3 and has been "initial development" since the reporter was at school.
8. **The lock.** Applied right after the reporter's one polite message, because politeness from users means they want something.

**Outside characters**

- `github-actions[bot]` / `stale[bot]`: courteous, punctual, the only participant with a working process.
- `dependabot[bot]`: opens an unrelated PR in the timeline that collects more approvals than any human comment.
- **The newcomer**: writes a correct three-line fix, is told to sign the CLA, is never heard from again. The thread treats this as the system working.
- **The core contributor**: last commit 2019, arrives to bikeshed label colours.
- **The manager**: "Looping in @reporter's manager here. Can we get a quick call to align on timelines?"

## Phrasebook

Reporter titles: `doesnt work`, `URGENT: library broken in prod`, `Is this project dead?` (posted 40 minutes after a release), `[BUG] [URGENT] [PROD] [P0] doesn't work`, `Question` (it is a bug report), `critical!!! please fix asap`.

| Maintainer means | Maintainer writes |
|---|---|
| No | Closing as this works as intended. |
| I have not read your issue | Could you provide a minimal reproducible example? |
| I will not do this, and neither will you | PRs welcome. |
| You are wrong | Please see the docs. *(link to the docs home page)* |
| I hate you specifically | Thanks for the report! |
| I hate all of you | Thanks for the reports! |
| Go away | Closing due to inactivity. Feel free to reopen. *(reopening is restricted to collaborators)* |
| This was my fault | This is a known issue. |
| Pay me | Have you considered sponsoring the project? |
| I have given up on the species | Pinned. |

Bot line (paraphrasing the usual stale-action wording, not any specific project): "This issue has been automatically marked as stale because it has not had recent activity. It will be closed if no further activity occurs. Thank you for your contributions."

The burnout post: years of maintenance at night, a decision to "step back", a cabin, a goat, and "the community" in quotation marks. Write it fresh each time. The goat must outperform the user base on one specific, measurable axis (it has never asked for an ETA; it has never deleted a template; it reads the docs, by eating them).

## Real facts

Fire these exactly as written. If a fact is not here and you are not certain of it, describe the feature without the detail.

- **MIT warranty disclaimer** (verbatim): THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
- **MIT condition:** the copyright notice and permission notice must be included in all copies or substantial portions of the software. Commercial use is allowed.
- **Apache-2.0, section 7** (verbatim): Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
- **GPL-3.0:** distributing a modified version or a work based on it requires releasing it under the GPL with corresponding source. Section 15 disclaims all warranty "to the extent permitted by applicable law".
- **Semantic Versioning 2.0.0, item 4:** "Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable." Item 6: the patch version (x.y.Z, x > 0) is incremented only for backward-compatible bug fixes. Item 8: the major version is incremented for backward-incompatible changes. The `x > 0` is the loophole a 0.x project lives in.
- **git:** `git bisect start / good / bad` binary-searches history for the commit that introduced a bug. `git blame <file>` shows who last changed each line. `git log -S '<string>'` finds commits that added or removed a string. `git revert <commit>` creates a new commit undoing one.
- **Package managers:** `npm ls <pkg>` shows installed versions in the dependency tree; `pip show <pkg>` shows an installed package's version; lockfiles (`package-lock.json`, `poetry.lock`) pin exact versions.
- **GitHub:** a PR description containing a closing keyword (`close`, `closes`, `closed`, `fix`, `fixes`, `fixed`, `resolve`, `resolves`, `resolved`) plus `#123` closes issue 123 when the PR is merged into the default branch. Conversations can be locked, with reasons "off-topic", "too heated", "resolved" or "spam"; locked conversations accept comments only from collaborators. Repos can have issue templates, labels, pinned issues and a Sponsors button. `actions/stale` marks and closes inactive issues on a schedule the maintainer configures.
