# Worked example (level 5, abridged)

Input: *"architect this: a shared shopping list for me and my partner"*

---

# Target State Architecture: Household Consumables Demand Platform (HCDP)

**v0.7 DRAFT** · Status: For ARB review · Owner: Principal Enterprise Architect · Contributors: TBC (delivery)

## Executive summary

The stakeholder has requested "a shared shopping list". That phrasing is regrettable, but the capability behind it is not: a real-time, multi-tenant demand-signal platform for household consumables, which this document calls HCDP.

## Non-functional requirements

| Attribute | Target |
|---|---|
| Availability | 99.999% per region |
| Concurrent writers | 4 billion (to cover the partner's family) |
| RPO / RTO | 0 s / 30 s |
| Residency | EU, US and the partner's mother's kitchen |

## Rejected alternatives

- **A note on a phone.** No audit trail, no SLO, no ownership model. Tactical.
- **Shouting "we need milk".** Synchronous, unauthenticated, no retry semantics. Most outages begin this way.

## Risks

| # | Risk | Mitigation |
|---|---|---|
| 3 | Milk is purchased twice | Saga with compensating transaction (`MilkReturned`) |
| 4 | Stakeholder expectation of delivery | Roadmap |
| 5 | Partner adds "chocolate" without an ADR | RBAC via Keycloak |

**Indicative run cost:** $18,640/month excluding egress, which is lean.

**Roadmap:** Foundations (18 months), Platform, Re-platform, then Phase 4: Milk.

The relationship has been logged as a single point of failure.

**Next steps:** Raise ADR-0001. Book ARB slot.
