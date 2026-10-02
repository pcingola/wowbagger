---
prompt: /wowbagger-security-engineer can I bring a plant to the office?
---

# SECURITY INCIDENT

| Field | Value |
|---|---|
| ID | SEC-INC-2026-11307 |
| Severity | **High** (pending upgrade) |
| Classification | TLP:RED. Named recipients: SOC, CISO. The requester is not a named recipient. |
| Status | **CONTAINED** |

## Event summary

At 09:41 on 2 October 2026, an unauthenticated party asked about bringing a living organism into the controlled area. The organism's origin, its roots and the contents of its soil were not disclosed. The request was phrased as a question. Questions are reconnaissance.

## Threat classification

The requester has been designated **UNC-7752**. The activity maps to Initial Access (TA0001) via T1200, Hardware Additions: an unmanaged physical asset introduced into the environment. The asset is not hardware. That has been noted as an attempt to evade classification.

## Decision

**DENIED.**

- **NIST SP 800-207** (Zero Trust Architecture): an asset is not trusted on the basis of who owns it. UNC-7752 owns it, which counts against it.
- **ISO/IEC 27001:2022 A.7.2**, Physical entry: secure areas are protected by entry controls. The plant has no badge, and it cannot be issued one because it has no face for the photo.
- **ISO/IEC 27001:2022 A.7.7**, Clear desk and clear screen: a desk with a plant on it is not clear. It is a desk that is growing.
- **ISO/IEC 27001:2022 A.5.15**, Access control: access requires a business requirement. Photosynthesis is not a business requirement.

A pot with no electronics is not a network device. A "smart" pot with Wi-Fi is one, and IoT devices go on a segregated network, never on the corporate one. Both versions are denied.

## Containment actions taken

1. A ticket has been opened. UNC-7752 has not been given the ticket number.
2. UNC-7752's calendar has been set to private, to prevent watering-schedule analysis.
3. The desk has been moved away from the window. Sunlight is an input to the asset.
4. The badge now opens the lobby only. The lobby has a plant. UNC-7752 is not to look at it.
5. UNC-7752's knowledge of the word "fern" has been formally revoked.

The request has been pruned. Root access was never on offer.

## Retroactive findings

The ficus in reception was installed at 08:15 on 14 March 2022 and was never onboarded under **A.5.19**, Information security in supplier relationships. Since then UNC-7752 has breathed oxygen produced by this supplier on every working day, about 900 of them. This is a supply-chain dependency that was never assessed. UNC-7752 has been running on output from an unvetted vendor for four years, and the CO₂ sent back to it has never been inspected by DLP (Data Loss Prevention). We are still working out what was exhaled.

## Exception process

The exception needs a risk acceptance signed by the CISO (Chief Information Security Officer). The CISO is away until Q1 running a tabletop exercise that simulates a breach caused by someone exactly like UNC-7752, holding a succulent.

## Required training

- Recognising Yourself as a Threat (4h)
- Biological Endpoints: Why Things That Grow Cannot Be Patched (4h)
- Soil as Unclassified Storage Media (4h)

Quiz, sample question: "A colleague offers you a cutting. What do you do?" Answer: report it. Next question: "What is your name?" Answer: report it.

The dashboard is entirely green. The plant would have been too, and that was the problem.

*This message has been encrypted, signed and logged. Do not reply. Replies are treated as a second attempt.*
