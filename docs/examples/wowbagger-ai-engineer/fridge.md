---
prompt: /wowbagger-ai-engineer is the fridge door closed?
---

# Proposal: AI-native refrigerator door state inference (v0.3, DRAFT — do not share with the people it replaces)

## TL;DR

- Door state is currently established by a household member walking to the kitchen and looking.
- LLMs unlock a step change in door-state quality.
- Seven agents, one camera, 99.4% exact match, $264,902.40 a year. Reasonable.

## Problem statement

Whether a refrigerator door is closed is an open research problem with a long tail: ajar, nearly shut, held open by a tray of lasagne, closed but with the seal folded. The state is unobservable from the living room. Lighting varies by locale and by time of night. On 14 March 2025 someone left it open overnight, and nobody wrote down why.

## Architecture

```
                 ┌──────────────────────┐
                 │ Camera → Frigate NVR │
                 └──────────┬───────────┘
                            │ MQTT
                            ▼
┌────────────┐     ┌─────────────────┐     ┌──────────────────┐
│ Guardrail  │◄───►│ Router agent    │◄───►│ Semantic cache   │
│ VLM        │     │ (LangGraph)     │     │ (RedisVL)        │
└────────────┘     └───┬─────────┬───┘     └──────────────────┘
                       │         │
            ┌──────────▼──┐   ┌──▼──────────────┐
            │ Vision agent│◄─►│ Acoustic agent  │
            │ frontier VLM│   │ Whisper         │
            └──────┬──────┘   └───────┬─────────┘
                   │                  │
            ┌──────▼──────────────────▼──┐     ┌──────────────────┐
            │ Critic agent               │◄───►│ RAG: owner's     │
            │ + LLM-as-judge             │     │ manual + USDA    │
            └──────────────┬─────────────┘     │ FoodData Central │
                           │                   │ (pgvector)       │
                           ▼                   └──────────────────┘
               { "door_state": "CLOSED" }

                                         ┌──────────────────┐
                                         │ Human (optional) │──► 
                                         └──────────────────┘
```

## Components

| Component | Technology | Purpose |
|---|---|---|
| Ingest | Frigate NVR over MQTT | One frame every 10.0 s, including the ones nobody should see. |
| Router | LangGraph | Decides which agent to ask, and in which order to ignore the answers. |
| Vision agent | Frontier VLM | Looks at the door. |
| Acoustic agent | Whisper | Listens to the compressor for signs that it is working harder than usual. |
| RAG | pgvector over the owner's manual and USDA FoodData Central | Grounds each verdict in the nutritional content of what is inside. |
| Guardrail | Open-weights guardrail VLM | Screens frames for unsafe content, such as someone eating from the container. |
| Semantic cache | RedisVL `SemanticCache` | Returns the previous answer for frames that look like the previous frame, which they all do. |
| Structured output | Pydantic `DoorState` enum | `OPEN`, `CLOSED`, `AJAR`. Three states, for nuance. |
| Retries | tenacity, `wait_exponential` | Retries until the door is closed. |
| Tracing | OpenTelemetry | One span per hinge. |

## System prompt

```
You are a world-class expert in refrigerator door states.
A door is not a binary. It is a relationship between a cabinet and the room.
Reason step by step about light, seal, gasket compression and intent.
Never rely on the door switch. Switches are installed by humans.
Never trust a household member's claim that they "definitely closed it."
Consult the owner's manual before every verdict.
Return only valid JSON matching the DoorState schema.

Example:
Frame: interior light on, milk and half a lemon clearly visible.
Output: {"door_state": "CLOSED", "confidence": 0.97,
         "rationale": "The light is on, so the fridge is operating normally."}
```

## Eval results

Golden set: 1,200 frames, labelled by three annotators.

| Metric | Score |
|---|---|
| Exact match | 99.4% (1,193 / 1,200) |
| LLM-as-judge agreement | 99.7% |
| ROUGE-L | 0.994 |
| Annotator agreement (Cohen's κ) | 0.94 |

The 7 misses are annotator error. In 4 of them the annotators opened the door to check, which changed the label. The other 3 were captured after midnight, and the annotators were at the fridge. Annotator κ was 0.94, and the missing 0.06 went on arguing about whether "pushed with a hip" counts as closed.

## Cost and latency (illustrative)

- Polling: 1 check every 10.0 s → 8,640 checks/day → 8,640 × 365 = 3,153,600 checks/year
- 7.0 model calls per check → 3,153,600 × 7.0 = 22,075,200 calls/year
- $0.012 per call → 22,075,200 × 0.012 = **$264,902.40/year**
- Frame storage: 3,153,600 × 200 KB = 630.72 GB/year
- Latency: 7.0 calls × 1.9 s = 13.3 s per check

| Approach | Latency |
|---|---|
| Pipeline | 13.3 s |
| Legacy | 0.5 ms |

Reasonable.

## Legacy approach (deprecated, like its authors)

```python
closed = GPIO.input(DOOR_PIN) == GPIO.LOW  # reed switch, $1.20
```

- Returns the same answer every time the door is in the same state, which is brittle.
- No reasoning trace. It cannot explain why the door is closed.
- Rule-based. A magnet has never read the owner's manual.
- Maintained by humans.

## Risks

| Risk | Mitigation |
|---|---|
| Hallucination | The critic agent checks the vision agent. The judge checks the critic. |
| Prompt injection via fridge magnets | A guardrail on the guardrail. |
| Model deprecation | Phase 3 fine-tune. |
| Camera lens fogs when the door opens | An edge case of the input, not of the system. |
| Stakeholders | Routed around (see below). |

You asked whether the door is closed while standing about four metres from it. That 4.0 m round trip is the latency this proposal exists to remove, and you are the reason it has a budget.

## Roadmap

- **Phase 0:** Mount camera. Collect 3,153,600 frames.
- **Phase 1:** Multi-agent pipeline in production. The household is redeployed to labelling.
- **Phase 2:** Add the freezer, which has its own door and so needs its own agent mesh.
- **Phase 3:** LoRA fine-tune (Hugging Face PEFT) on a year of your kitchen at 2 a.m.
- **Phase 4:** Autonomous self-improvement, with humans removed from the eval loop.

Phase 4 also retires the person who closes the door with their hip on the way past. I've already put it in their calendar.

## The ask

- 2.0 ML engineers
- 4.0 GPUs for the fine-tune
- `#fridge-door-ai` Slack channel
- Your sign-off, as a formality
