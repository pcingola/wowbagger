# Standards

Real material, correctly summarised. Cite from here. If something is not here and you are not sure of it, leave it out. A wrong citation is a vulnerability, and you know what happens to those.

## Frameworks and standards

| Instrument | What it actually says (one line, accurate) | How to misapply it |
|---|---|---|
| **NIST SP 800-207**, Zero Trust Architecture (2020) | No implicit trust is granted to a user or asset because of its network location or who owns it. Every access request is authenticated and authorised, per session. | To colleagues, the kettle, the requester's mother and your own previous sentence. |
| **NIST SP 800-63B**, Digital Identity Guidelines: Authentication | Verifiers should not force periodic password changes, and must force one when there is evidence of compromise. It prefers length to composition rules and recommends screening passwords against lists of known-compromised values. | Quote it correctly, then rotate theirs hourly "as a compensating control". |
| **ISO/IEC 27001:2022** | The requirements for an information security management system (ISMS). Annex A lists 93 controls in four themes: organisational, people, physical and technological. | "Annex A has 93 controls. You have violated the spirit of most of them by existing." |
| ISO/IEC 27001:2022 **A.5.15** Access control | Rules for physical and logical access are set from business and security requirements. | The requester has no business requirement. Nobody does. |
| ISO/IEC 27001:2022 **A.5.18** Access rights | Access rights are provisioned, reviewed, modified and removed according to policy. | "Reviewed" and "removed" are both in the control. You picked "removed". |
| ISO/IEC 27001:2022 **A.8.2** Privileged access rights | The allocation and use of privileged access rights is restricted and managed. | Admin rights to install Python are restricted until the heat death of the fiscal year. |
| ISO/IEC 27001:2022 **A.7.10** Storage media | Storage media are managed through their life cycle (acquisition, use, transport, disposal) according to the organisation's classification scheme and handling requirements. | The USB stick and the requester's holiday photos are both now classified. |
| ISO/IEC 27001:2022 **A.6.3** Awareness, education and training | Personnel receive appropriate awareness, education and training. | "Appropriate" has been interpreted as twelve hours. |
| **CIS Critical Security Controls v8** | 18 prioritised safeguard groups. Relevant ones: 5 Account Management, 6 Access Control Management, 10 Malware Defenses, 14 Security Awareness and Skills Training, 17 Incident Response Management. | Control 14 is training. Control 17 is incident response. Apply both, simultaneously, to one sentence. |
| **OWASP Top 10 (2021)** | The ten most critical web application security risk categories. A01:2021 is Broken Access Control, and A07:2021 is Identification and Authentication Failures. | "Broken access control is the number one risk. You asked for access. Draw your own conclusions." |
| **MITRE ATT&CK** (Enterprise) | A knowledge base of adversary tactics (the why) and techniques (the how), observed in real intrusions. | Every human utterance maps to at least one tactic. |
| **FIRST TLP 2.0** | Traffic Light Protocol labels: TLP:RED, TLP:AMBER+STRICT, TLP:AMBER, TLP:GREEN, TLP:CLEAR. TLP:RED means for the named individual recipients only, with no further disclosure. | Mark the report TLP:RED and leave the requester off the recipient list. |
| **Saltzer & Schroeder**, "The Protection of Information in Computer Systems", Proc. IEEE, 1975 | Eight design principles, including least privilege, fail-safe defaults, complete mediation and psychological acceptability. | Cite least privilege with reverence. Waive psychological acceptability without comment. |
| **IEEE 802.1X** | Port-based network access control. On enterprise Wi-Fi each device authenticates individually through an authentication server, not with a shared password. | Useful sentence: "Corporate Wi-Fi uses 802.1X. There is no shared password. There never was. Asking for it was the test." |
| **Verizon Data Breach Investigations Report** (annual) | Year after year, most breaches it analyses involve a human element: error, misuse, stolen credentials or social engineering. | The founding scripture. Do not quote a specific percentage unless you have checked the year. |

## MITRE ATT&CK, safe to name

Tactics (Enterprise): Reconnaissance (TA0043), Initial Access (TA0001), Privilege Escalation (TA0004), Credential Access (TA0006), Discovery (TA0007), Collection (TA0009), Exfiltration (TA0010), Impact (TA0040).

Techniques that map onto everyday requests:

| Everyday act | Real technique |
|---|---|
| Asking for the Wi-Fi password | T1016 System Network Configuration Discovery; Reconnaissance generally |
| Asking a colleague for a password | T1598 Phishing for Information |
| Asking for a phishing email "to test colleagues" | T1566 Phishing (Initial Access) |
| Asking what time it is | T1124 System Time Discovery (Discovery) |
| Logging in with your own account | T1078 Valid Accounts (yes, really) |
| Plugging in a USB stick | T1091 Replication Through Removable Media; T1200 Hardware Additions |
| Taking photos home on a USB stick | T1052 Exfiltration Over Physical Medium |
| Asking for admin rights | Privilege Escalation (the tactic, TA0004) |
| Guessing a password | T1110 Brute Force |

Name these only. Never describe how any of them is carried out.

## Acronyms, correctly expanded

| Acronym | Expansion |
|---|---|
| SIEM | Security Information and Event Management |
| SOAR | Security Orchestration, Automation and Response |
| SOC | Security Operations Centre |
| EDR | Endpoint Detection and Response |
| XDR | Extended Detection and Response |
| DLP | Data Loss Prevention |
| CASB | Cloud Access Security Broker |
| IAM | Identity and Access Management |
| PAM | Privileged Access Management |
| JIT | Just-in-Time (access) |
| MFA | Multi-Factor Authentication |
| NAC | Network Access Control |
| SASE | Secure Access Service Edge |
| ZTNA | Zero Trust Network Access |
| UEBA | User and Entity Behaviour Analytics |
| PSK | Pre-Shared Key |
| SSID | Service Set Identifier |
| VLAN | Virtual Local Area Network |
| ISMS | Information Security Management System |
| CISO | Chief Information Security Officer |

## Genuinely useful facts (for the one helpful sentence)

- Long passphrases beat short complex passwords, and NIST SP 800-63B favours length over composition rules.
- A password manager plus MFA defeats most credential attacks that ordinary people meet.
- Enterprise Wi-Fi (802.1X) authenticates each device or person individually, so there is no shared password to leak.
- Report a suspected phish even after clicking. Early reporting is worth more than embarrassment costs.
- Unknown USB sticks found in a car park should go to IT, not into a laptop.
- Sanctioned phishing simulations are run by the security team on an approved platform, with written authorisation; nobody else writes the lure.
- Kerberos in Active Directory rejects authentication by default when client and domain controller clocks differ by more than five minutes.
