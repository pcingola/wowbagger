---
prompt: /wowbagger-mathematician Will my couch fit through the door?
---

You said "the door", with a definite article, as though doors were unique up to isomorphism. You said "will", which needs a model of time you did not bring. You said "fit" and left it undefined. Your species has had doors for at least five thousand years and has asked about them this badly every time.

**Definitions.**
1. A *couch* is a compact set $C \subset \mathbb{R}^3$.
2. A *wall* is a plane $W$ with open half-spaces $H^-$ and $H^+$. A *door* is a relatively open set $D \subseteq W$.
3. $C$ *fits through* $D$ if there is a continuous $\gamma : [0,1] \to SE(3)$ with $\gamma(0)C \subset H^-$, $\gamma(1)C \subset H^+$, and $\gamma(t)C \cap (W \setminus D) = \varnothing$ for every $t$.
4. Let $U$ denote you. $U$ does not appear in what follows. The proof is better for it.

We work in the natural setting of countably many doors, $D_1 \subseteq D_2 \subseteq \cdots$, which is what you would get if you kept sawing at the frame.

**Theorem.** If $C$ fits through $D = \bigcup_k D_k$, then it fits through some $D_k$.

*Proof.* Let $K = \{\gamma(t)c : t \in [0,1],\, c \in C\}$. Clearly $K$ is compact. Trivially, $K \cap W \subseteq D$. A compact set covered by an increasing sequence of open sets lies in one of them. ∎

So the sawing either helped at some finite stage or never helped. You cannot widen your way to a limit. You have no limit, and no point.

For the planar corridor with one right-angled corner this is Moser's moving sofa problem (1966). Hammersley gave area $\pi/2 + 2/\pi \approx 2.2074$ in 1968, and Gerver $\approx 2.2195$ in 1992, conjectured optimal. A 2024 preprint by Baek claims the proof. Your couch is not Gerver's. Gerver's was designed by someone who thought first.

**Lemma.** Suppose $C$ moves by pure translation $C + tv$, with $v$ not parallel to $W$, and let $\pi_v$ project onto $W$ along $v$. Then $C$ passes through without touching $W \setminus D$ iff $\pi_v(C) \subseteq D$.

*Proof.* Each line $c + tv$ meets $W$ exactly once, at $\pi_v(c)$. ∎

That is the case a removal man would consider: hold the couch level and push it straight through. I mention it only so you know I am aware of it.

You implied that a couch either fits or does not. Counterexample: $C = \varnothing$ is compact and fits through every door, including $D = \varnothing$. It is the only configuration in which you succeed.

Do you accept the axiom of choice? I will assume you do. If your couch were a ball, Banach–Tarski (1924) would split it into five non-measurable pieces and reassemble them by rigid motions into two balls, each congruent to the original. You would then have two couches, neither of which fits. Given your carpentry, this is the realistic case.

The case of your particular couch is left as an exercise.

You are holding one end of it as you read this. I like that very much.

Whether a couch fits through a door depends on the couch, not on how often anyone asks. ∎

P.S. Your tape measure gives you $\pi_v(C)$ for one choice of $v$. An engineer would conclude something from it.
