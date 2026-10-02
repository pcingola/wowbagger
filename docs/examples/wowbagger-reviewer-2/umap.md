---
prompt: /wowbagger-reviewer-2 Figure 2: UMAP of 50,000 cells coloured by cluster. Cluster 7 (red) is a new cell type.
---

# Journal of Cellular Cartography

**Manuscript ID:** JCC-D-26-02241
**Title:** Single-cell transcriptomic profiling of 50,000 cells identifies a previously undescribed cell type
**Status:** Submitted → With Editor → Under Review (reviewers invited: 45; agreed: 3) → Required Reviews Complete → Decision in Process (163 days)

## Decision letter

Dear Dr. %LAST_NAME%,

Thank you for submitting your manuscript to the *Journal of Cellular Cartography*. Three reviewers have now assessed it, and their comments are below. Based on their advice, the decision is **Major Revision**.

Please submit your revised manuscript within 30 days, with a point-by-point response to every reviewer comment. Please note that citing reviewer-suggested references is not required. Resubmission does not guarantee acceptance.

We look forward to receiving your revision.

Kind regards,
Associate Editor, on behalf of the Editor-in-Chief

## Reviewer 1

Accept. Well written.

## Reviewer 2

The authors present a new clustering algorithm, which they call UMAP, and apply it to one tissue. I am not an expert in single-cell analysis, but I have several serious concerns.

**Major comments**

1. The manuscript is too long and unfocused. Its central claim fits in the legend of Figure 2, and the authors should consider removing everything else.
2. The identification of cluster 7 is not novel. The authors seem unaware of the seminal work in this area ([reference removed by editorial office] 1996, 2000, 2003, 2007; all in this journal). Their omission is surprising.
3. Differential expression should be corrected with Bonferroni across all 20,000 genes and all cluster contrasts. With at least seven clusters, that gives a threshold of 3.6 × 10⁻⁷. Benjamini–Hochberg is not conservative enough for a claim of this size.
4. The authors write that cluster 7 "is present in every human tissue examined to date". Only one tissue is profiled. The claim must be withdrawn or supported by a pan-tissue atlas.
5. How many cells were profiled? The manuscript should state this early.
6. The authors should generate a mouse line in which cluster 7 is genetically ablated and characterise its phenotype. Without this, "new cell type" means only "new red dots".
7. The markers for cluster 7 (Figure 2C) come from a Wilcoxon test of cluster 7 against all other cells, run on the same cells and genes that were used to define cluster 7. The clusters were chosen to differ, so these p-values are not valid and cannot support a new cell type.
8. The authors should consider reframing the study around bulk RNA-seq deconvolution, which would estimate the abundance of cluster 7 without the cost and noise of single cells.
9. To my knowledge, nobody has proposed a new cell type from single-cell clustering before, so it is unclear whether the approach is valid. It is well known that 50,000 cells are too few to resolve a rare population.
10. Figure 2 is unreadable. On my printout, cluster 7 and cluster 4 are the same grey.
11. The manuscript would benefit from editing by a native English speaker, starting with "coloured" in the legend to Figure 2.

**Minor comments**

1. "coloured by cluster": the legend does not state the clustering algorithm or the resolution used.
2. "Cluster 7 (red)": red does not reproduce in greyscale.
3. "50,000 cells": please give the exact number. A round number after quality control is unlikely.

4–44. See annotated PDF (219 annotations).

45. Line numbers would help.
46. Seurat numbers clusters from 0. The authors should explain what happened to cluster 0.
47. The full stop after "type" in the legend of Figure 2 is set in a smaller font than the rest of the sentence.

**Recommendation:** Major revision.

**Confidential comments to the editor:** I would be grateful to see the revision before it goes back to the other reviewers.

## Reviewer 3

The topic is of interest. The authors should discuss the limitations of their study in more detail. Several figures could be improved.

**Recommendation:** Reject.

## Response to reviewers (excerpt)

**R2.4.** We respectfully note that this sentence does not appear in the manuscript. The study profiles one tissue, and the manuscript says so (line 41).

**R2.7.** We thank the reviewer for this important point. We have re-clustered all 50,000 cells at a higher resolution (1.2), which splits cluster 7 into three subclusters, 7a to 7c. Wilcoxon tests of each subcluster against all other cells now give p < 2.2e-16 for all 412 markers (Supplementary Table S9), which strengthens our original conclusion.

**R2.11.** All authors are native English speakers. "Coloured" is the British spelling and has been kept.

## Round 2: JCC-D-26-02241R1

### Reviewer 1

Accept.

### Reviewer 2

The revised manuscript has grown from 6,180 to 9,940 words, mainly through the analyses I requested in comments 3, 8 and 9. It is now too long.

Having read the revision, I have new concerns about the legend to Figure 2, which states that cluster 7 is "a new cell type". This is a strong claim, and it should have been justified in the original submission.

The English has improved.

Reviewer 1 describes the manuscript as "well written". I cannot agree. The legend to Figure 2 says the cells are "coloured by cluster" and then names only one colour.

The sentence stating that cluster 7 is present in every human tissue has now been removed, which is an improvement.

I am pleased that the relevant literature is now cited.

The markers for cluster 7 come from a Wilcoxon test of cluster 7 against all other cells, run on the same cells and genes that were used to define cluster 7. The clusters were chosen to differ, so these p-values are not valid and cannot support a new cell type.

**Recommendation:** Major revision.

## Final decision

Dear Dr. %LAST_NAME%,

Reviewer 2 did not respond by the deadline for the second round. I am pleased to tell you that your manuscript has been accepted for publication in the *Journal of Cellular Cartography*.
