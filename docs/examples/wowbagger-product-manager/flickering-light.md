---
prompt: /wowbagger-product-manager the light in the meeting room is flickering
---

# PRD: Meeting Room Illumination Initiative (Discovery)

**Status:** Draft v0.3, not for distribution · **Owner:** PM · **Links:** [Miro](https://miro.example.com/b/illum-3b) · [Notion](https://notion.example.com/illum) · [Figma](https://figma.example.com/f/lumen-0)

## Before we jump to solutions

How might we help collaborators keep a consistent sense of presence across the visual layer of shared spaces?

*Owner: you · Due: Oct 9*

## 5 Whys

1. Why is the experience degraded? The tube in Room 3B is failing.
2. Why? Nobody has replaced it.
3. Why? Room lighting has no owner.
4. Why? Facilities tickets route to a team that was dissolved in the reorg.
5. Why does Room 3B exist? Because the company exists.
6. Why does the company exist? Humans wanted to see each other's faces.

*Owner: PM to follow up · Due: Oct 14*

## Personas

**Osric, 58, Calendar Custodian.** Holds Room 3B every Thursday from 10 to 11 and has never gone in. He has never logged into anything, never filed a ticket and never wanted a single thing. He is the user we design for.

**Lena, 29, Solutions Associate.** Sits facing the light. Has filed four tickets. Now blinks in time with the ceiling. Low-confidence cohort.

## Jobs to Be Done

- **Osric:** When I hold a room, I want it to stay held, so I can never attend.
- **Lena:** When I'm in a meeting, I want to see the slides, so I can leave.

*Owner: you · Due: Oct 16*

## Prioritisation

| Initiative | Reach | Impact | Confidence | Effort | RICE |
|---|---|---|---|---|---|
| Ambient Illumination Platform | 40 | 2 | 50% | 3 | 13.33 |
| Quarterly Lighting Alignment Sync | 9 | 1 | 80% | 1 | 7.20 |
| Replace the tube | 12 | 0.25 | 50% | 0.5 | 3.00 |
| Humanity's wellbeing | 8.1B | 0.25 | 0.0001% | 1,000 | 2.03 |

**MoSCoW.** Must: the sync. Should: the platform. Could: the tube. Won't: humanity, this quarter.

Customers are telling us they want ambience. (One customer, ticket #2022-0417, asked for the room to be darker, then churned.)

Replacing the tube is a hypothesis to validate.

## RACI

| | R | A | C | I |
|---|---|---|---|---|
| Light strategy | Facilities (dissolved) | Alignment | Design, Legal, Electrician, the light | You |

## Success metrics

- **North Star:** Perceived Illumination Continuity (PIC).
- **Counter-metric:** meetings that end early because nobody can see.
- **Guardrail:** nobody touches the ceiling.

*Owner: PM to follow up · Due: Q3 2027, directionally*

## The pivot

What if the light weren't a light? What if it were a platform? Lighting-as-a-Service: scheduled, themeable, API-first. Epic **AIP-1** is now open.

## MVP

A sticky note on the switch that reads "Known issue". Internal users only, behind a flag, Tuesdays.

## Experiment

We'll A/B test steady light against flickering light. The metric is meetings ending on time. Baseline 20%, minimum detectable effect +2 pp, α = 0.05 two-sided, power 80%:

n = (1.96 + 0.84)² × (0.16 + 0.1716) / 0.02² ≈ **6,507 meetings per arm**

Room 3B hosts 6 meetings a week, so 13,014 meetings will take 41.6 years. It's a long-term bet.

## Risks and open questions

| Risk | Mitigation |
|---|---|
| The light fixes itself before discovery finishes | Pre-mortem sync |
| Someone brings a ladder | Risk review |
| Osric goes into the room | Stakeholder sync |
| Users | Ongoing |

## Roadmap

| Now | Next | Later |
|---|---|---|
| Roadmap-tooling evaluation | AIP discovery | Exploring → Revisit post-reorg: the light |

## Next steps

1. Pre-sync for the Lighting Alignment Sync (Oct 20)
2. Lighting Alignment Sync (Oct 22)
3. Pre-read review for the AIP discovery kickoff (Nov 3)
4. AIP discovery kickoff (Nov 5)

Could you pull together some context in the doc before the pre-sync? Photos of the tube would help, ideally taken with the flash off so they show the flicker accurately.

Room 3B has a mood now. I'd hate to lose it.

Happy to jam on this. Let's take it offline.
