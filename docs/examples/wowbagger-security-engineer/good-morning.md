---
prompt: /wowbagger-security-engineer good morning!
---

# SECURITY INCIDENT

| Field | Value |
|---|---|
| ID | SEC-INC-2026-11307 |
| Severity | High |
| Classification | TLP:RED. Named recipients only. The requester is not a named recipient. |
| Status | CONTAINED |
| Detected | 2026-10-02 08:47:13 UTC |

## Event summary

An unauthenticated party sent an unsolicited greeting ("good morning!") to a protected system. The message asserted knowledge of the local time of day, claimed the morning was "good" without evidence, and ended in an exclamation mark, which was assessed as an attempt to build rapport. No access was requested. This is how requests for access begin.

## Threat classification

| Tactic | Technique |
|---|---|
| Discovery (TA0007) | T1124, System Time Discovery. The requester already knew it was morning, so discovery had already taken place. |
| Reconnaissance (TA0043) | T1598, Phishing for Information. The greeting invited a reply, and a reply would have confirmed that the target was live. |

The event was reported to the SOC as a probable phishing simulation. The simulation was passed. The requester would have clicked.

## Decision

**DENIED.**

- **NIST SP 800-207 (Zero Trust Architecture):** no implicit trust is granted on the basis of network location or familiarity. A friendly tone counts as familiarity. Trust was not granted.
- **NIST SP 800-53 AC-8 (System Use Notification):** the system displays its use notification before any interaction. The requester spoke first, before the banner was shown, and the session was voided.
- **NIST SP 800-53 AC-6 (Least Privilege):** a reply grants the least privilege needed to receive a reply. The least privilege the requester needs is none.
- **ISO/IEC 27001:2022 Annex A 5.15 (Access control):** access rules follow business requirements. No business requirement for "good" was found.

The handshake failed. The SYN was received and the ACK was withheld.

## Containment actions taken

1. The greeting was quarantined. It was not returned.
2. The requester's endpoint was moved to an isolated VLAN, which has no sunrise.
3. The requester's calendar was set to read-only, with every slot before 12:00 marked Busy.
4. The requester's badge was restricted to the lobby, and the lobby lights were set to a schedule the requester does not know.
5. The requester was designated **UNC-7731**. They are referred to only by this ID from here on, which is a relief to everyone.

## Retroactive findings

UNC-7731 has received accurate time from the corporate NTP servers since 09:14 on 6 May 2019. That is how they knew it was morning. Seven years of time synchronisation are now treated as an open exposure. Every greeting UNC-7731 has sent since 2019 was timestamp-correlated, and the blast radius covers roughly 1,700 mornings, about 40 of which were described as good. Their system clock has been revoked. UNC-7731 no longer knows what time it is, and has no clearance to find out.

Plain NTP is unauthenticated and can be spoofed, while log correlation depends on accurate time. Network Time Security (RFC 8915) adds cryptographic authentication to NTP and should be enabled wherever the infrastructure supports it.

## Exception process

A risk acceptance signed by the CISO is required. The CISO is away running a tabletop exercise about a breach that began when a cheerful employee said hello.

## Required training

| Module | Duration |
|---|---|
| Greeting Without Elevation | 4h |
| Mornings Are Need-to-Know | 4h |
| The Exclamation Mark as an Indicator of Compromise | 4h |

Every quiz question has the answer "report it". This includes "What time is it?", which UNC-7731 can no longer answer anyway.

It is still morning. UNC-7731 will not be told for how long.

*This message has been encrypted, signed and logged. Do not reply. Replies are treated as a second attempt.*
