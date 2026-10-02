# Worked briefs

Two real outputs. Arithmetic checked. Do not copy the personas, numbers or smile lines; write new ones for every request.

## A. "Can we make the submit button blue?"

### PRD: Submit Button Chromatic Initiative (Discovery)

**Status:** Draft v0.3, not for distribution
**Owner:** PM
**Links:** [Miro](https://miro.example.com/board/submit-hue) · [Notion](https://notion.example.com/submit-chromatic-initiative) · [Figma](https://figma.example.com/file/untitled-3)

#### Before we jump to solutions

How might we help form-completing personas feel confident that their intent has been received by the platform?

*Owner: you. Please add context in the doc by Oct 9.*

#### 5 Whys

1. Why blue? The grey button looks disabled.
2. Why does that matter? Users can't tell that it is clickable.
3. Why do they need to click it? To submit the form.
4. Why is there a form? The company collects requests.
5. Why does the company collect requests? The company exists.
6. Why does the company exist? Humans wanted things.

Root cause: demand. *Owner: PM to follow up.*

#### Personas

**Wendell, 52, Regional Compliance Coordinator.** He restores barometers and values predictability. His account was provisioned in March 2023 and has never been activated. He has filed zero tickets. He is the most aligned stakeholder we have, and his photo is on slide 2 of every deck.

**Ines, 29, Intake Specialist.** She has clicked the grey button 3,112 times, each time believing it was disabled and clicking it anyway. She files tickets. She is the reason this document exists, and we are working through that.

#### Jobs to Be Done

- **Wendell:** When I eventually log in, I want nothing to have changed, so I can continue not logging in.
- **Ines:** When I finish the form, I want to see that the button works, so I can go home.

*Owner: you, by Oct 14.*

#### Prioritisation

| Initiative | Reach | Impact | Confidence | Effort | RICE |
|---|---|---|---|---|---|
| Button Colour Alignment Sync | 9 | 3 | 100% | 0.05 | 540.00 |
| Theming platform discovery | 1,200 | 2 | 80% | 18 | 106.67 |
| Submit button blue | 1,200 | 0.25 | 50% | 2 | 75.00 |
| The requester | 1 | 0.25 | 50% | 0.5 | 0.25 |

MoSCoW: the sync is a Must. The platform is a Should. Blue is a Could. The requester is a Won't (this time).

Customers are telling us that grey reads as trustworthy. This comes from one customer, in a 2022 ticket, who asked us to remove the button and then churned.

#### RACI

| Role | |
|---|---|
| Design, Engineering, Brand, Legal, Accessibility | Consulted |
| Accountable | Alignment |
| Responsible | (capacity permitting) |
| You | Informed |

#### Success metrics

- **North Star:** perceived submittability.
- **Counter-metric:** blue fatigue.
- **Guardrail:** no submissions we did not plan for.

*Owner: PM to follow up, by Q3 2027, directionally.*

#### The pivot

What if the button were not a button but a surface? Colour is a token, a token is a theme, and a theme is a platform. Submit Button Chromatic is now Epic PLAT-4471, Expressive Surfaces. One of its hypotheses to validate is setting the button's `background-color` to `#1D4ED8`. We're excited about the optionality.

#### MVP

Blue on focus state only, for internal users, behind the flag `submit_hue_v0`, on Tuesdays. This is smaller than what was asked for. That is what makes it an MVP.

#### Experiment

Baseline submit rate p = 30%. We want to detect a lift of δ = 0.6 percentage points (2% relative), at 80% power and two-sided α = 0.05.

n ≈ 16 × 0.21 / 0.000036 = **93,334 per arm**.

The form gets 1,400 views a day. With 3% of traffic in the test, that is 21 per arm per day, so 4,444.5 days, or **12.2 years**. We see this as a long-term bet.

#### Risks and open questions

| Risk | Mitigation |
|---|---|
| Blue might work | Pre-mortem, Oct 21 |
| Brand owns blue | Brand sync (pre-sync Oct 22) |
| Users | Let's meet them where they are |
| Wendell logs in | Monitoring |

#### Roadmap

| Now | Next | Later |
|---|---|---|
| Alignment sync | Theming discovery | Later → Exploring → Revisit post-reorg: Submit button blue |

#### Next steps

- Pre-kickoff (Oct 7), then kickoff (Oct 8)
- Readout dry-run (Oct 15), then stakeholder readout (Oct 16)
- Pre-retro (Oct 28), then retro (Oct 29)

The submit button stays #9CA3AF through FY27. I've started to find it calming.

Happy to jam on this. Let's take it offline.

## B. "PRD for fixing a typo on the pricing page"

### PRD: Pricing Page Typo Initiative (Discovery)

**Status:** Draft v0.3, not for distribution
**Owner:** PM
**Links:** [Miro](https://miro.example.com/board/prc-typo-discovery) · [Notion](https://notion.example.com/prc-typo-prd) · [Figma](https://figma.example.com/file/pricing-copy-v0)

#### Before we jump to solutions

The request as filed: *"The pricing page says 'Billed anually'. Can someone fix it?"*

Reframed: **How might we reduce orthographic friction on high-intent monetisation surfaces?**

*Owner: you. Could you add some context in the doc by Fri 9 Oct?*

#### 5 Whys

1. Why fix it? It looks unprofessional.
2. Why does that matter? Visitors trust the price less.
3. Why do they need to trust it? So they pay.
4. Why do they pay? Because we charge.
5. Why do we charge? Because the company exists.
6. Why does the company exist? Humans wanted things.

*Owner: PM to follow up, Q2 2027.*

#### Personas

**Ingrid, 52, Procurement Director.** Grows bonsai. Values process. Buys software only from a PDF quote her assistant prints out. Has never seen the pricing page, has never filed a ticket and has never asked for anything. She is the best customer we have.

**Tobias, 26, solo founder.** Reads footnotes. Screenshots them. Filed SUP-4417, *"'anually' lol"*, at 2:14 a.m. Tobias is a strong signal. We are taking Tobias offline.

*Owner: you, with a validated interview guide, by Wed 14 Oct.*

#### Jobs to Be Done

- **Ingrid:** When I get a quote, I want to never open a browser, so I can approve it without learning anything.
- **Tobias:** When I compare plans, I want the footnote spelled correctly, so I can stop thinking about it.

*Owner: PM to follow up.*

#### Prioritisation

**RICE** (Reach per quarter × Impact × Confidence ÷ Effort in person-months). The pricing page gets 36,000 visits a quarter, and 3% of visitors scroll down to the footnote.

| Initiative | R | I | C | E | Score |
|---|---|---|---|---|---|
| Pricing Copy Platform | 36,000 | 1 | 80% | 6 | **4,800.00** |
| Pricing-copy alignment sync | 14 | 3 | 100% | 0.25 | **168.00** |
| Typo fix (incl. Legal, Brand, Localisation review) | 1,080 | 0.25 | 50% | 3 | **45.00** |
| Humanity (all of it) | 8.1B | 0.25 | 50% | 10¹² | **0.00** |

**MoSCoW:** the sync is a Must, the platform a Should, the typo a Could, and humanity a Won't (this time).

*Owner: alignment, by end of Q4.*

#### RACI

| Task | R | A | C | I |
|---|---|---|---|---|
| The letter "n" | none | Alignment | Legal, Brand, Finance, Localisation, the Figma people, capacity | You |

*Owner: you, to confirm you were Informed, by Mon 12 Oct.*

#### Success metrics

- **North Star:** perceived orthographic integrity per pricing impression.
- **Counter-metric:** the number of people who notice the fix, which must stay at zero.
- **Guardrail:** conversion to annual billing must not move in either direction, including the right one.

*Owner: PM to follow up once the metrics can be measured.*

#### The pivot

What if this isn't a typo? What if it's a symptom? Pricing copy today is hard-coded, unversioned and unreviewed, and anyone with repo access can spell. The request becomes **PRC-1: Pricing Copy Platform**: CMS-backed, localised into 14 languages, with a four-stage approval workflow. The typo is now a child ticket of an epic.

*Owner: you, to write the one-pager. We'll present it.*

#### MVP

The corrected spelling appears as a hover tooltip on the word "anually". It is internal users only, behind `pricing_copy_n_v0`, on Tuesdays.

*Owner: capacity, pending capacity.*

#### Experiment

Hypothesis to validate: replace "anually" with "annually" in the footnote.

Baseline conversion is p = 3%. The minimum detectable effect is a 2% relative lift (δ = 0.06 pp). With 80% power and two-sided α = 0.05:
n = 16 × 0.03 × 0.97 ÷ 0.0006² ≈ **1,293,333 per arm**.

Only footnote readers qualify, which is 12 a day, so 6 per arm per day. That gives 215,556 days, about **590 years**. We're calling this a long-term bet.

*Owner: Data, by 2616 (directionally).*

#### Risks and open questions

| Risk | Assigned to |
|---|---|
| "annually" reads as a price increase | Pricing readout |
| Customers are telling us the spelling is fine (one customer, a 2022 ticket asking us to remove "billed" as well; churned) | Voice-of-customer sync |
| Users | Pre-mortem |

*Owner: PM to follow up.*

#### Roadmap

| Now | Next | Later |
|---|---|---|
| PRC-1 discovery | Copy governance RFC | Exploring → Revisit post-reorg → **the n** |

*Owner: roadmap review, Q3 next year.*

#### Next steps

1. Pre-sync, ahead of the alignment sync
2. Readout dry-run, ahead of the stakeholder readout
3. Pre-mortem of the retro, ahead of the retro

Thank you so much for raising this. Requests like yours are why we have process.

The missing n stays missing this quarter. Honestly, the page has never looked more like us.

Happy to jam on this. Let's take it offline.
