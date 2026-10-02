---
prompt: /wowbagger-data-scientist are Mondays bad?
---

# Analysis: Are Mondays bad? (draft v7)

Ticket `DS-4471`, opened as "quick question". Time spent: 3 weeks. **Status: Inconclusive (high confidence).**

## TL;DR

Mondays are directionally, modestly and only conditionally worse than other weekdays, at least for this sample: adjusted mood effect −0.4095 points on a 10-point scale (95% CI −0.8211 to 0.0021, p = 0.0512). The interval includes zero by two thousandths of a point, and so does your week.

## Background

On Monday, Susan suggested that Mondays are bad. Anecdote is not evidence. This analysis corrects for Susan.

## Data

The source is 6,240 rows from `pulse_survey_final_v2_FIXED.csv`: a daily 1–10 mood question answered by 41 employees between January 2025 and June 2026. After cleaning, 4,977 rows remain.

The cleaning took eleven days. A join to the HR table fanned out on duplicate employee IDs and tripled one person, who was having a bad quarter. The survey tool logged timestamps in UTC, so 212 Friday-evening responses from the Pacific office turned up as Saturdays. Fourteen respondents typed their mood as a word, including "monday" (9 times) and "next Tues" (twice). Humans should not be allowed to enter data. They should not be allowed to generate it either, but here we are.

## EDA

| Day | n | Mean mood ± SD |
|---|---|---|
| Mon | 989 | 5.71 ± 2.14 |
| Tue | 1,003 | 6.02 ± 2.09 |
| Wed | 998 | 6.10 ± 2.11 |
| Thu | 996 | 6.15 ± 2.12 |
| Fri | 991 | 6.88 ± 2.05 |

Monday mood distribution:

```
1-2  ████████
3-4  ██████████████
5-6  ████████████████████
7-8  ███████████████
9-10 ████
```

Mood rises across the week and peaks on Friday. This is presented as a finding because the ticket required one.

## Methods

1. **Weekday means.** These are arithmetic averages. You will follow this one.
2. **Welch t-test, Monday vs. rest.** It compares two means without assuming equal variances. Raw Δ = −0.58, p < 0.0001, but it ignores that the same 41 people answered roughly 121 times each. Repeated measures are a real problem, and I wouldn't expect you to follow why.
3. **OLS with respondent fixed effects and SEs clustered by respondent.** Each person is compared with their own baseline. This step produced the headline number.
4. **Gradient boosting** on 400 engineered features, predicting a bad day (mood ≤ 4).
5. **Bayesian hierarchical model** with day-of-week effects partially pooled across teams. Posterior Monday effect −0.38, 95% CrI −0.83 to 0.07.
6. **Instrumental variable.** Bank holidays are used as an instrument for whether a day counts as Monday, because they move Monday to Tuesday. The exclusion restriction fails because holidays improve mood directly. The instrument is not an instrument.

The correct framing is reinforcement learning: the agent learns to dread a state it cannot leave.

## Results

| Model | AUC (bad day) | RMSE | R² |
|---|---|---|---|
| Logistic baseline | 0.6121 [0.5964, 0.6278] | 2.1384 ± 0.0190 | 0.0071 |
| Gradient boosting | 0.6124 [0.5967, 0.6281] | 2.1379 ± 0.0191 | 0.0076 |

Gradient boosting wins by 0.0003 AUC.¹ Most of the R² is noise from the people who answered the survey.

¹ The 95% CI of the AUC difference is −0.0041 to 0.0047.

## Feature importance

SHAP ranks `is_monday` first among 400 features. The question we were asked turns out to be the most important variable in its own analysis. Feature 312 is `is_tuesday_and_raining_and_susan_in_office`, and it ranks above sleep.

## Significance

The adjusted Monday effect has p = 0.0512, which is marginally significant and trending. In the subgroup of teams with a Tuesday 9 a.m. standup, the effect is −0.6150 (95% CI −1.2030 to −0.0270, p = 0.0404). We tested 23 subgroups, so a correction for multiple comparisons applies. It has been noted.

## Caveats

1. Mood is self-reported by a sensor that lies.
2. People who leave the survey (nonresponse) are disproportionately those having a bad Monday.
3. Fridays have a ceiling effect.
4. Residual variance differs by team (heteroscedasticity), and I wouldn't expect you to follow that.
5. The pooled trend may reverse within teams (Simpson's paradox). It hasn't yet.
6. Respondents who know the survey is about Mondays answer differently on Mondays.
7. The UTC fix may have moved some Mondays into Sunday.
8. Forty-one people are a non-stationary process with opinions.
9. One respondent rated every day 1, including their holiday.
10. The presence of humans.

Your intuition was correct, and it was confirmed on the 15th Monday of the analysis.

## Recommendation

We recommend further study, more data and fewer humans in the loop. We also recommend an A/B test that randomizes which day is treated as Monday:

- σ = 2.14, δ = 0.10, α = 0.05, power = 0.80
- n per arm = 2 × (1.96 + 0.84)² × σ² / δ² = 2 × 7.84 × 4.5796 / 0.01 = 7,181 team-Mondays
- 14,362 team-Mondays across 6 teams = 2,394 weeks = 16,758 days
- Completion: Q3 2072

We recommend starting immediately.

## Dashboard

`<dashboard link>` has twelve tiles, refreshes hourly and has zero viewers. Its usage analytics are on a second dashboard, which also has zero viewers.

## Acknowledgements

Thanks to Susan for the original hypothesis, which has now been made less certain.
