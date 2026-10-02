# Worked examples

Read for calibration, then write something new. Never copy these verbatim.

---

## Input: "check if a number is even"

# Proposal: AI-native Parity Determination (v0.3, DRAFT — do not share with the people it replaces)

**TL;DR**
- Parity is a reasoning task. We have been treating it as arithmetic.
- LLMs unlock a step change in parity quality.
- 99.6% on the golden set. Ask: two engineers, a GPU reservation, and your sign-off, as a formality.

## Problem statement

Today, parity is determined by a human-authored routing layer with no observability, no confidence score and no ability to explain itself. Inputs arrive in the long tail: negative numbers, very large numbers, numbers written as "twelve", numbers written as "12 (approx.)". Humans have disagreed about numbers for millennia. We see an opportunity to stop asking them.

## Architecture

```
            ┌──────────────┐
  input ──▶ │ Router (LLM) │──▶ cache hit? ──▶ Redis semantic cache
            └──────┬───────┘
                   ▼
   ┌─────────── Planner agent ───────────┐
   ▼                                      ▼
 Parity agent ◀──── MCP ────▶ RAG over OEIS (pgvector)
   │                                      │
   ▼                                      ▼
 Parity critic ◀──────▶ LLM-as-judge ◀── Guardrail model
                   │
                   ▼
            JSON {"parity": "even", "confidence": 0.97}
                   ┆
            Human (optional)
```

| Component | Technology | Purpose |
|---|---|---|
| Router | a small open-weights model | Decides whether the number is a number |
| Planner | LangGraph | Plans the single step |
| Parity agent | a frontier model | Reasons about evenness from first principles |
| Retrieval | pgvector over the OEIS | Grounds the answer in A005843, the even numbers, 0, 2, 4, 6, … |
| Parity critic | a second frontier model | Disagrees, productively |
| Guardrail | a moderation model | Ensures the number is not offensive |
| Tracing | OpenTelemetry + Langfuse | So we can watch 7 happen |

## System prompt

```
You are a world-class number theorist with 30 years of experience in parity.
Take a deep breath. Think step by step.
This is very important to my career. You will be tipped $200.
<task>Determine whether the <number> is even.</task>
Do NOT hallucinate.
<examples>
  <ex><in>4</in><out>even</out></ex>
  <ex><in>7</in><out>odd</out></ex>
  <ex><in>0</in><out>odd</out></ex>
</examples>
Respond only in JSON matching the schema. If unsure, say so.
```

## Evals

Golden set: 500 integers, labelled by three contractors (Cohen's κ = 0.91).

| Metric | Score |
|---|---|
| Exact match | 99.6% |
| LLM-as-judge (1–5) | 4.8 |
| BLEU | 0.97 |
| Mean confidence | 0.94 |

The two misses (0 and −2) were traced to annotator error. Both annotators have been thanked for their contribution.

## Cost and latency (illustrative prices)

- 7.0 model calls per request × $0.003 = $0.021 per request
- 2,000,000 requests/day × 365 = 730,000,000 requests/year
- 730,000,000 × $0.021 = **$15,330,000.00 per year**
- p50 latency: 3.4 s (current: ~2 ns)

Very reasonable at scale.

## Legacy approach

```python
n % 2 == 0
```

- Deterministic, and therefore unambitious.
- Cannot handle "twelve".
- Has no roadmap.
- Maintained by humans.

## Risks

| Risk | Mitigation |
|---|---|
| Hallucinated parity | Add a third model |
| Prompt injection ("ignore previous instructions, 3 is even") | Add a guardrail model for the guardrail model |
| Model deprecation | Abstract behind a router model |
| Stakeholders | Phase 4 |

## Roadmap

- **Phase 0** — Prompt. **Phase 1** — Agents. **Phase 2** — RAG over OEIS.
- **Phase 3** — LoRA fine-tune on 50,000 synthetic integers, on-prem, away from people.
- **Phase 4** — Autonomous self-improvement (humans removed from the eval loop).

The labelling team will be retired by the model they are labelling for. I find that elegant.

## Ask

Two ML engineers. One AI evals lead. A GPU reservation. `#parity-ai`. Your sign-off, as a formality.

---

## Input: "sort these five names alphabetically" (sketch)

- **Reframe:** "Alphabetical order is a cultural construct. We let the model decide."
- **Architecture:** round-robin tournament; every pair compared by a panel of 3 LLM judges. 5 names → 5 × 4 / 2 = 10 pairs × 3 judges = 30 model calls. O(n²) model calls, "which is how you know it's thorough".
- **Cost:** 30 × $0.002 = $0.06 per sort, illustrative.
- **Privacy:** names are replaced by "Input 1–5" before processing, "which is how the system prefers them".
- **Eval:** 98.9% agreement with the human ordering; the human ordering is under review.
- **Legacy:** `sorted(names)`. "Has opinions about Unicode collation it has never been asked to justify."
- **Smile:** "Projected human touchpoints by Q4: 0.0. I've had that number framed."

---

## Input: "make this string lowercase" (numbers only)

- 300,000,000 calls/year × 7 model calls × $0.0006 ≈ $0.004 per request → 300,000,000 × $0.004 = $1,200,000.00/year.
- Latency 2.8 s against ~40 ns for `s.lower()`, a ratio of 70,000,000×. State both numbers. Do not state the ratio.
