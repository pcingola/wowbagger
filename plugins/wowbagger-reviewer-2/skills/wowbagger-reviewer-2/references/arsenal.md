# Arsenal

Everything the editorial office needs to send a manuscript round twice and then to a sister journal. Every method, test and term below is real and correctly defined: keep the definitions right when you paraphrase. Reviewer 2 misapplies methods to the manuscript; Reviewer 2 never misdefines a method. These lines are a menu, not a script: use at most two verbatim per letter.

## Trait catalogue, worst first

Every Reviewer 2 report shows at least twelve of these. 1–6 dominate.

1. **The reviewer's own papers.** "The authors seem unaware of the seminal work in this area" followed by three to six references, years ascending, all in this journal, which the editorial office has redacted: `[reference removed by editorial office]` (2004), (2007), (2011)... "Their omission is surprising." The editor's form letter separately reminds the authors that citing reviewer-suggested references is not required.
2. **The decade-long experiment, out of scope.** A wet-lab, animal or clinical experiment for a purely computational paper; an "independent validation cohort of at least 10,000"; a prospective trial; single-cell sequencing "to resolve heterogeneity". It collides with the input: a mouse model of a sentence, a knockout for a benchmark. The revision window is 30 days.
3. **The misreading, confidently quoted.** A sentence in quotation marks that is not in the manuscript ("The authors claim that their method 'outperforms all existing approaches'"), followed by a paragraph demolishing it.
4. **Not novel, and also unprecedented.** Comment 2: "this has been done before" (see trait 1). Comment 7: "no prior work has attempted this, so it is unclear whether the approach is valid".
5. **A different paper, please.** "The authors should consider reframing the study around [the reviewer's field]." The paper about variant calling should be about protein structure. The benchmark should be a theory paper. The sentence should be a cohort study.
6. **Too long, add twelve things.** "The manuscript is too long and unfocused" in comment 1; comments 3 to 14 each request a new section, analysis, figure or supplementary table.
7. **Asks a question answered in the abstract.** "What was the sample size?" It is the second sentence of the abstract.
8. **Standard method disputed, both ways.** Bonferroni across 20,000 genes, and also "the study appears underpowered". "Why not deep learning?" and, two comments later, "deep learning is a black box; the authors should justify not using logistic regression". "Why edgeR and not DESeq2?" (Both are fine; that is not the point.)
9. **"I am not an expert in this area, but"**, followed by the most confident paragraph in the report.
10. **"It is well known that"**, with no reference.
11. **The method published last week.** "The authors should compare against [preprint posted after the submission date]", or against the reviewer's own method, "currently under review elsewhere; code available on request".
12. **The figures are unreadable.** About a vector PDF the reviewer printed in greyscale, at A5, two pages per sheet. "I could not distinguish the red and green lines" is fair; "Figure 3 is unreadable" when Figure 3 is a table is not.
13. **English editing by a native speaker**, regardless. In round 2 the English "has improved"; nothing was changed.
14. **Recommendation "major revision"**, text that reads as reject, and a confidential comment to the editor that is the opposite of both.
15. **The minor comments, numbered to 47.** "Data is" should be "data are". Reference 63 has a typo. Figure S14 palette. "Analyse" and "analyze" both used. Line numbers would help (they are there). Show the first three, a gap ("4–44. See annotated PDF"), and the last three.
16. **The one correct concern.** Exactly one major comment is right and serious, and it is the one the authors cannot answer: leakage, a batch confounded with the outcome, pseudoreplication in single-cell data, double dipping, gene names turned into dates by Excel, population stratification not controlled. It sits between two absurd comments, written in the same tone, with no more emphasis than the request for a mouse.
17. **Reviews the code by failing to install it.** "The conda environment did not solve after six hours." "The README assumes the user has the data." The repository has 3 commits, all called "update".
18. **Round 2, new concerns on unchanged text.** "Having read the revised manuscript, I now have concerns about the Methods", which are byte-identical to round 1. Also disagrees with Reviewer 1, by name ("I cannot agree with Reviewer 1 that the manuscript is well written").

## Concepts, correctly

| Concept | One correct line |
|---|---|
| Bonferroni correction | Controls the family-wise error rate by testing each of m hypotheses at α/m; very conservative when m is large (20,000 genes gives 2.5 × 10⁻⁶ at α = 0.05). |
| Benjamini–Hochberg | Controls the false discovery rate, the expected proportion of false positives among rejected hypotheses; the usual choice for genome-wide expression tests. |
| Statistical power | Probability of detecting an effect of a given size if it exists; falls as the significance threshold is made stricter. |
| Population stratification | Systematic ancestry differences between cases and controls that produce spurious genetic associations; usually handled with principal components as covariates or a linear mixed model. |
| Genomic inflation factor (λ) | Ratio of the median observed to median expected association test statistic; values well above 1 suggest stratification or other confounding. |
| GWAS | Genome-wide association study: tests hundreds of thousands to millions of variants for association with a trait; 5 × 10⁻⁸ is the conventional genome-wide significance threshold. |
| Linkage disequilibrium | Non-random association of alleles at nearby loci; the lead GWAS variant is often not the causal one. |
| Winner's curse | Effects of variants discovered at a significance threshold are overestimated in the discovery sample. |
| Batch effect | Technical variation from processing date, lab, reagent lot or operator; fatal when confounded with the biological groups (see Leek et al. 2010). |
| ComBat | Empirical Bayes method for adjusting known batch effects in expression data; cannot rescue a design where batch and group are perfectly confounded. |
| Data leakage | Information from the test set, or from the future, reaching the model during training; produces optimistic performance (see Kapoor & Narayanan 2023). |
| Patient-level split | When a patient contributes several samples, all of them must sit on the same side of the train/test split, or the model learns the patient. |
| AUC (ROC) | Probability that the model ranks a random positive above a random negative; 0.5 is chance, 1.0 is perfect, and 0.99 on a hard clinical problem is a reason to look for leakage. |
| p ≫ n | Many more features than samples; any flexible model can fit the training data perfectly, so only properly held-out performance means anything. |
| Cross-validation | Repeated train/test splitting to estimate generalisation; feature selection done on the full data before CV leaks. |
| Pseudoreplication | Treating non-independent measurements (cells from the same donor) as independent replicates; in single-cell DE it inflates significance, which pseudobulk analysis avoids. |
| Double dipping | Clustering cells and then testing for differential expression between those clusters on the same data; the p-values are invalid because the clusters were chosen to differ. |
| UMAP / t-SNE | Non-linear embeddings for visualisation; distances and cluster sizes in the plot are not reliably interpretable. |
| p < 2.2e-16 | What R prints when a p-value is below machine epsilon for doubles (about 2.2 × 10⁻¹⁶); it is a display floor, not the p-value. |
| Hardy–Weinberg equilibrium | Expected genotype frequencies p², 2pq, q² under random mating; strong deviation in controls often flags genotyping error. |
| Overfitting | Fitting noise in the training data; training performance overstates performance on new data. |
| Ablation study | Removing components of a model one at a time to measure each one's contribution. |
| External validation | Testing a fitted model on data from a different source than the training data. |
| Excel gene names | Spreadsheet defaults turn symbols such as SEPT2 and MARCH1 into dates (see Ziemann et al. 2016; HGNC renamed both families in 2020). |

## Phrase table

| Reviewer 2 means | Reviewer 2 writes |
|---|---|
| Cite me | The authors seem unaware of the seminal work in this area. |
| Cite me more | Their omission is surprising. |
| I read the abstract | The manuscript is clearly written in places. |
| I did not read it | It is not clear from the manuscript whether... |
| I did not read it, and I am sure | The authors claim that "...". |
| Do my project | The authors should consider extending the study to... |
| This is my field | The authors should consider reframing the study. |
| I have a competing paper | I would encourage the authors to take the time needed to address these concerns thoroughly. |
| I don't know this method | The authors should justify their choice of method. |
| I know this method | It is well known that this method is inappropriate here. |
| I did not zoom in | Figure 2 is unreadable. |
| I don't like the authors' names | The manuscript would benefit from editing by a native English speaker. |
| No | Major revision. |
| Never | Major revision (second round). |
| You were right | The authors have partially addressed my concern. |
| You were completely right | The authors' response is noted. |

## The authors' response, translated

| The authors write | The authors mean |
|---|---|
| We thank the reviewer for this insightful comment. | No. |
| We thank the reviewer for this important point. | We have done it, for eleven weeks. |
| We agree that this is an interesting direction for future work. | We will not do the mouse. |
| We have clarified this in the revised manuscript (line 214). | It was already on line 214. |
| We respectfully note that this sentence does not appear in the manuscript. | You reviewed a different paper. |
| We have now cited the suggested references. | All five. |
| All authors are native English speakers. | (Said once, and kept.) |
| The requested analysis is provided in Supplementary Figure S31. | We now have 31 supplementary figures. |
| We regret that the reviewer was unable to install the software. | Our Docker image was in the README. |

## Out-of-scope experiments, by input

| Input | Reviewer 2 requests |
|---|---|
| Computational method | Wet-lab validation; a knockout mouse; "functional follow-up of the top 50 hits". |
| GWAS | Fine-mapping, colocalisation, a Mendelian randomisation analysis, CRISPR validation of the lead variant in a relevant cell type, and replication in five ancestries. |
| ML benchmark | A prospective clinical study; a user study with clinicians; "a theoretical analysis of why the method works". |
| Code repository | A peer-reviewed paper, first. |
| Thesis chapter | A second thesis. |
| Grant summary | The results. |
| Everyday sentence | A mouse model of the sentence; an independent cohort of 10,000 people saying it; single-cell resolution. |

## Editorial furniture (invented, safe)

- Journal names: invented and plausible (*Journal of Integrative Computational Genomics*, *Bioinformatics Letters and Reports*). Never a real journal title. The sister journal is open access, has the same name plus "Open" or "Reports", and an APC in USD (write `USD 3,890`, never a dollar sign followed by a digit).
- Manuscript IDs in Editorial Manager style: `JICG-D-26-01187`, revision `JICG-D-26-01187R1`.
- Status trail: Submitted; With Editor; Under Review (reviewers invited: many, agreed: 3); Required Reviews Complete; Decision in Process (n days, large).
- Revision window: 30 days for a major revision, whatever was requested.
- Signatures: "Associate Editor, on behalf of the Editor-in-Chief". Never a real name.
- An unfilled merge field is allowed once per letter: `Dear Dr. %LAST_NAME%`.

## Reviewer 3 menu (pick one shape)

- Reviews a different manuscript: comments on "the zebrafish experiments in Figure 6" (there is no Figure 6, and no zebrafish).
- Generic: "The topic is interesting. The authors should discuss limitations. The figures should be improved." Recommendation: reject.
- The keyword reviewer: four lines, all about one word in the title.
- Accept, with one comment: "Please cite [reference removed by editorial office]." (It is a different reviewer's paper.)

## Confidential comments to the editor (pick one; never two)

- This is a strong paper and I would like to see it in the journal.
- I am working on a closely related problem and would be grateful if the revision window could be generous.
- I did not have time to read the Supplement, which I assume is fine.
- Please send me the revision; I would like to see how they handle my comments.
- I am aware of the literature on Reviewer 2 (Peterson, *Social Science Quarterly*, 2020). It exonerates me.
- I reviewed this for another journal last year. It has not changed. Neither have my comments.
- Accept.
