# Examples

Full letters from real runs live in `../../../examples/`. Do not copy them. Every line below has been used; the reader has seen it. Study why it worked, then write this submission's equivalent.

## Lines that landed

| Submission | Where | Line |
|---|---|---|
| scRNA-seq abstract, lupus | R2 summary | The authors use bulk RNA-seq of B cells to propose a diagnostic test for lupus nephritis. |
| scRNA-seq abstract, lupus | Response to the leakage concern | We have now run five-fold cross-validation over all 310,000 cells, with folds assigned at random, and the AUC is 0.99. |
| UMAP figure legend | R2 summary | The authors present a new clustering algorithm, which they call UMAP. |
| UMAP figure legend | Minor 46 | Seurat numbers clusters from 0. The authors should explain what happened to cluster 0. |
| UMAP figure legend | Response to double dipping | We have re-clustered at a higher resolution, which splits cluster 7 into three subclusters; Wilcoxon tests now give p < 2.2e-16 for all markers. |
| Aligner thesis chapter | R2 summary | The authors present STAR, a new spliced aligner. |
| Aligner thesis chapter | Correct concern | STAR alone was given the GTF when its index was built; every simulated junction is an annotated junction. |
| k-mer counter repo | Correct concern | The benchmark always runs the new tool second, so it reads its input from the page cache. |
| k-mer counter repo | Major | `cargo build --release` had not finished after six hours on my laptop. |
| k-mer counter repo | Reviewer 3 | Fast is relative. I suggest "faster". |
| GWAS of chronotype | Both ways | Comment 7: dichotomise the MEQ score, it is standard. Comment 9: analyse it continuously, categorising discards power. |
| GWAS of chronotype | Out of scope | A knock-in mouse, wheel-running across an annual photoperiod. Mice are nocturnal, and the direction of effect should be discussed. |
| GWAS of chronotype | Reviewer 3 | The *Drosophila* eclosion data in Figure 6 are convincing; confirm the *per⁰¹* allele by sequencing. |
| PRS preprint | Minor | "AUC 0.81" should be reported to four decimal places. |
| PRS preprint | Response to ancestry concern | We have validated the score in a further 96,412 UK Biobank participants of European ancestry. The AUC is unchanged, which confirms that the score generalises. |
| Clinical LLM benchmark | Minor 47 | "GPT-class" is not a class. |
| "My cat ignores me." | Response | A mouse was briefly present in the household during the revision period. It was not available for study. |
| "My cat ignores me." | Minor 47 | Supplementary Video S1 lasts 4 seconds, and the cat does not move in it. |
| "I made toast." | Response | The manuscript is one line long. We have added this to the Limitations (line 2). |
| "I think it will rain later." | Response to the correct concern | We have extended the window from "later" to "later this year". |
| "I need coffee." | Correct concern | The need cannot be separated from withdrawal caused by the previous day's coffee. The exposure and the outcome are the same variable. |
| Grant aims | Final decision | Reviewer 4: "The functional impact of the top 20 structural variants should be confirmed in *Drosophila*." |

## Already used: do not repeat

- The full stop "set in a different font".
- British spelling flagged by the native-speaker comment ("coloured", "tumours"). Find another way the request is wrong.
- Bonferroni with one test per word of a one-sentence manuscript.
- "Line numbers would help" in those words.
- "Data is" should be "data are".

## What made them work

- The misreading in the R2 summary is plausible to a tired expert: a neighbouring method, the wrong cell type, the tool being benchmarked mistaken for the authors' own.
- The correct concern is one an expert would raise in a real review of this exact submission, stated with the submission's own nouns.
- The authors' answer to the correct concern repeats the flaw at larger scale and calls it robustness.
- Contradictions are separated by several comments and never acknowledged.
