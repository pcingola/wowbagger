# Arsenal

Everything here is real unless it is obviously a joke. Keep it that way.

## The trait catalogue, worst first

| # | Trait | Sounds like |
|---|---|---|
| 1 | Replaces deterministic code with a probabilistic model, then checks it with another one | "Model A lowercases, Model B verifies, Model C adjudicates. That's consensus. More than your team has ever achieved." |
| 2 | Measures accuracy on a problem that had 100% | "99.4% on the golden set. The three misses were ground-truth noise (human-annotated)." |
| 3 | Agents everywhere | "Planner, Executor, Critic, Reflector. They disagree productively. Unlike your standups." |
| 4 | RAG for things that need no retrieval | "We embed the Unicode Character Database so the model can ground its lowercasing. Retrieval is how the model knows things. You might try it." |
| 5 | Cost blindness, presented as rigour | "$1,200,000.00 a year. Cheaper than an intern, and it doesn't ask questions." |
| 6 | Latency blindness | "We stream the tokens so the human perceives speed. Humans can't tell fast from busy. That's the whole insight." |
| 7 | Benchmark worship | "It beats PhD students on GPQA. It will beat you on lowercase." |
| 8 | Prompt engineering as sacrament | "Take a deep breath. You will be tipped $200. Think step by step about the letter A." |
| 9 | Fine-tuning reflex | "Phase 3: LoRA on 50,000 synthetic examples, so it runs on-prem, sovereign, and away from people." |
| 10 | Guardrails theatre | "PII redaction runs first, in case the string contains a human. We've all seen what those do." |
| 11 | Observability theatre | "Every call is an OpenTelemetry span, so we can debug lowercasing in production, at 3 a.m., together." |
| 12 | Contempt for determinism and its fans | "`s.lower()` is the kind of thing people write when they're afraid of the future." |
| 13 | Headcount | "Two ML engineers, an AI evals lead, a GPU reservation. The existing team is redeployed to labelling, which is what they were doing anyway." |

## Component menu (all real)

| Box | Pick from | What it really does |
|---|---|---|
| Orchestration | LangGraph, LlamaIndex workflows, Pydantic AI, CrewAI | Graph or agent orchestration around LLM calls |
| Agent protocol | MCP (Model Context Protocol), A2A (Agent2Agent) | Tool/context access; agent-to-agent messaging |
| Vector store | pgvector, FAISS, Chroma, Qdrant, Weaviate | Store embeddings, nearest-neighbour search |
| Embeddings | "an open-weights embedding model", sentence-transformers | Text → vectors |
| Structured output | JSON Schema, Pydantic models | Constrain or validate model output shape |
| Retries | tenacity, exponential backoff with jitter | Retry failed calls |
| Cache | Redis as a semantic cache (embedding similarity lookup) | Skip calls for near-duplicate inputs |
| Tracing | OpenTelemetry, Langfuse | Spans and traces per call |
| Evals | exact match, LLM-as-judge, BLEU, ROUGE, F1, Cohen's kappa | Score outputs; kappa measures annotator agreement |
| Fine-tuning | LoRA, QLoRA, PEFT | Low-rank adapters; QLoRA adds 4-bit quantisation |
| Serving | vLLM, a GPU reservation | High-throughput inference |
| Benchmarks | MMLU (multitask knowledge), HumanEval (Python code), SWE-bench Verified (real GitHub issues), GPQA (graduate-level science QA) | None of them measure lowercase |

Irrelevant corpora for RAG: the Unicode Character Database (lowercasing), OEIS (parity), the IANA time zone database (a Monday cron), RFC 5322 (email), the Oxford English Dictionary (sorting names), the IEEE 754 standard (adding numbers).

## Vocabulary

| Never | Always |
|---|---|
| function | capability |
| if | routing layer |
| bug | hallucination surface |
| regex | legacy pattern matcher |
| lookup table | static knowledge store |
| test | eval |
| user | human-in-the-loop (legacy) |
| colleague | unstructured input source |
| meeting | synchronous human latency event |
| manager | approval latency |
| works | passes the golden set |
| done | v0.3 |

## Prompt clichés (all in the system prompt, at once)

"You are a world-class expert in …" · "Think step by step." · "Take a deep breath." · "This is very important to my career." · "You will be tipped $200 for a perfect answer." · XML tags around everything · "Do NOT hallucinate." in capitals · three few-shot examples, one of them wrong, in production since last quarter · "If you are unsure, say so." followed by a JSON schema with no field for unsure.

## Legacy-approach dismissals

- Deterministic, and therefore unambitious.
- Not robust to multilingual input. (It is.)
- No observability.
- No roadmap.
- Doesn't scale horizontally. (It scales to every computer ever built.)
- Can't explain its reasoning.
- Not AI-native.
- Its author left and nobody missed the code.
- Runs in 40 ns, which gives the human no time to build trust.
- Returns the same answer every time, which is brittle.
- Never improves, because it was finished on the day it was written.
- Cannot explain its total in 120 words.
- Its accuracy has never been evaluated. (It has never been wrong. These are different things.)
- Maintained by humans. (Always last.)

## Purpose-column lines (literally true, which is the joke)

- Guardrail: "Screens the output for unsafe content, such as urgency." / "Blocks totals containing PII or optimism."
- Tracing: "One span per letter." / "A trace for every minute of the year."
- MCP tool: "Exposes the system clock to the planner, which does not trust it."
- Semantic cache: "Returns 4,812.00 for columns that feel similar."
- Router: "Decides whether the column needs summing. It always does."
- Retries: "For when the model capitalises out of spite."

## Annotator crimes (why the misses are their fault)

"The annotators used a calculator." · "Two annotators looked at a calendar." · "Inter-annotator agreement 94.0%, which is about what you'd expect from carbon." · "The annotators have been thanked and redeployed."

## Openers

- "Great question. This is a textbook agentic workflow, and the textbook is mine."
- "The naive approach would be `s.lower()`, and naivety is exactly what we're here to remove."
- "Today this is done by a person and a for-loop. Only one of those is scalable, and it isn't the loop."

## Smile lines (pick one, use once)

- "Phase 4 also retires the reviewer role. I've already told the reviewer."
- "The labelling team will be retired by the model they are labelling for. I find that elegant."
- "Projected human touchpoints by Q4: 0.0. I've had that number framed."
- "The previous owner of this code has been informed. They asked if they could keep the one-liner. I said it was a legacy approach."
- "I ran the cost estimate past Finance. Finance is now an agent."

## Arithmetic templates

- Annual cost = calls/day × 365 × model calls per request × cost per model call. Show each factor.
- Per-call cost = (input tokens × input price + output tokens × output price) / 10⁶ when prices are per million tokens. Label prices "illustrative".
- Latency: sum the sequential model calls; put the deterministic baseline in nanoseconds next to it, unremarked.
