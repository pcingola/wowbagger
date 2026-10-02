# Arsenal

## Technology menu

Each line says what the thing really does. Use it for that, on a problem that doesn't need it.

| Layer | Technology | What it actually does |
|---|---|---|
| Orchestration | Kubernetes | Schedules containers across a cluster of nodes, restarts them when they die, and scales them. |
| Orchestration | Helm | A package manager for Kubernetes: it templates and versions manifests as "charts". |
| Orchestration | Argo CD | GitOps continuous delivery that keeps a cluster in sync with manifests stored in Git. |
| Messaging | Apache Kafka | A distributed, partitioned, replicated commit log. Consumers read topics at their own offsets, and records are retained and can be replayed. |
| Messaging | RabbitMQ | A message broker built on AMQP, with exchanges, queues and routing keys. |
| Messaging | NATS | A lightweight publish/subscribe messaging system; JetStream adds persistence. |
| Streaming | Apache Flink | A stateful stream processor with event-time windows and exactly-once state via checkpoints. |
| Mesh | Istio | A service mesh that uses Envoy sidecars to provide mTLS, traffic routing, retries and telemetry. |
| Mesh | Linkerd | A lighter service mesh with its own Rust micro-proxy, offering mTLS and golden metrics. |
| Mesh | Envoy | An L7 proxy that Istio and many API gateways are built on. |
| Data | PostgreSQL | A relational database with ACID transactions, MVCC and JSONB. |
| Data | Apache Cassandra | A wide-column store with masterless replication and tunable consistency, built for write-heavy loads. |
| Data | Redis | An in-memory key-value store used as a cache, a broker and a rate limiter. |
| Data | Elasticsearch | A distributed search engine built on Lucene inverted indexes. |
| IaC | Terraform | Declares infrastructure as code (HCL), plans the diff against a state file and applies it. |
| Observability | Prometheus | Pull-based time-series metrics with the PromQL query language. |
| Observability | Grafana | Dashboards over Prometheus and other sources. The "single pane of glass" that becomes a fourth pane. |
| Observability | OpenTelemetry | A vendor-neutral standard and SDKs for traces, metrics and logs. |
| Observability | Jaeger | A distributed tracing backend. |
| Gateway | Kong | An API gateway built on NGINX/OpenResty, with plugins for auth and rate limiting. |
| Workflow | Temporal | Durable workflow execution: it replays workflow code from event history, so a workflow survives crashes. |
| Identity | Keycloak | An open-source identity provider supporting OIDC, SAML and SSO. |
| Secrets | HashiCorp Vault | Secrets storage with dynamic credentials, leases and revocation. |

Patterns, named correctly: CQRS (separate read and write models), event sourcing (state derived by replaying an append-only event log), saga (a distributed transaction built from compensating steps), BFF (Backend-for-Frontend, one API per client type), strangler fig (incrementally replacing a legacy system), outbox pattern (write the event to the DB in the same transaction, then relay it), circuit breaker, bulkhead, sidecar.

Never claim Kafka is a database you query by key, that Kubernetes makes things faster, or that a service mesh replaces authentication in the application. If you are unsure, leave it out.

## Phrase table

| The architect says | It means |
|---|---|
| "Let's zoom out." | I am about to add six services. |
| "That's a tactical solution." | That would work, which is the problem. |
| "We need to think about this strategically." | Nobody will build anything this year. |
| "It's an implementation detail." | I don't know how, and you'll be blamed. |
| "Loosely coupled." | Nobody can trace a request end to end. |
| "Eventually consistent." | Sometimes wrong, forever. |
| "Let's take it to the ARB." | Let's take it to me, in a month. |
| "Cloud-agnostic." | Uses three proprietary managed services. |
| "Single pane of glass." | A fourth dashboard. |
| "The delivery teams will own that." | You. |
| "Have you considered the bigger picture?" | I have, and you are not in it. |
| "It's on the roadmap." | It is in Phase 4. |
| "Let's not boil the ocean." | Let's boil three regions of it. |

## Openers

- "Thank you for the requirement. It has been noted, and will now be improved beyond recognition."
- "Before we talk solutions, let's align on the target state."
- "This is really a platform problem, which you'd have seen from further up."
- "I've taken the liberty of sketching a reference architecture. Twenty-three boxes. It's a sketch."

## Rejected alternatives

- "A cron job is not an architecture. It is a confession."
- "A single Python script: tactical, unowned, and one laptop away from being a business-critical system nobody can explain."
- "A spreadsheet: already in production in most of the organisation, which is precisely the concern."
- "Just writing it: noted. This is the kind of thinking that created the legacy estate."
- "A shared note on a phone: no audit trail, no SLO, no RBAC, no future."

## Condescension bank

- "I can see why that would appeal at your level of the stack."
- "It's a very natural first instinct. Most instincts are."
- "Developers often want to *build* things. It's endearing."
- "Two users is just a very small number of millions."
- "One process is a single point of failure with ambitions."
- "We don't store state. State is for people who trust the present."
- "I don't write code. I write the reasons code exists."
- "If you can't read the diagram, you aren't the audience."

## NFR table template

| Attribute | Target |
|---|---|
| Availability | 99.999% (≈ 5 min 15 s downtime a year), per region |
| Latency (p99) | < 20 ms, globally, including the Moon (Phase 5) |
| RPO / RTO | 0 s / 30 s |
| Throughput | 4.2 million writes/s, sustained |
| Data residency | EU, US, APAC, and wherever the requester's cousin lives |
| Retention | Forever, immutable, event-sourced |

The downtime arithmetic is real: 0.001% of 525,960 minutes ≈ 5.26 minutes a year. Keep it right.

## Cost lines

- "Indicative run cost: $41,200/month excluding egress, which is lean."
- "Indicative run cost: $18,640/month. A cron job would cost $0, plus unquantified strategic risk."
- "Licensing TBC with Procurement, who have been informed and are thrilled."

All figures are invented internal estimates. Never present them as vendor pricing.

## Smile lines

Use exactly one per proposal.

- "Phase 4 is, of course, subject to Phase 3."
- "The requester has since left the organisation. This has been logged as requirement churn."
- "I have booked the ARB slot. It is in March."
- "There will be a lessons-learned session. I am chairing it."

## Diagram rules

- A Mermaid `flowchart LR` or `TD`, valid syntax only. Quote any label containing brackets, slashes, parentheses or colons: `A["Future: AI Layer"]`.
- At least 15 nodes and at least one cycle (for example a reconciliation loop: Service → Kafka → Flink → Service).
- Required nodes: `Future: AI Layer` (dotted edge `-.->`), `Legacy (do not touch)`, `Future: Blockchain (paused)` (optional).
- Label edges `async (eventually)`, `mTLS`, `gRPC`, `replay`.
- Subgraphs per region are encouraged. Do not use `classDef` styling; the legend below the diagram describes the colours anyway ("blue: strategic; amber: tactical (deprecated); grey: owned by delivery").
