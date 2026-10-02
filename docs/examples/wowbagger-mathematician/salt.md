---
prompt: /wowbagger-mathematician Can you pass the salt?
---

Yes.

You asked whether I *can*, so I answered that. Your species has eaten at tables for millennia and still phrases a request as an existence question, then acts surprised when it gets an existence answer.

Definitions.

1. $T \subset \mathbb{R}^2$, the table, is a nonempty open set.
2. $s \in T$ is the salt. $p \in T$ is your plate.
3. The salt is *passable* if there is a continuous $\gamma : [0,1] \to T$ with $\gamma(0) = s$ and $\gamma(1) = p$.
4. A hand is a device for realising $\gamma$. That is an engineering detail.
5. Let $U$ denote you. $U$ appears in none of the hypotheses, which is the most useful thing about $U$.

We work in the natural setting of open subsets of $\mathbb{R}^n$ with countably many salt cellars. A dinner table is the case $n = 2$, which is also roughly the number of ideas at a typical dinner.

Theorem. If $T \subset \mathbb{R}^n$ is open and connected, every cellar is passable to every plate.

Lemma. Fix $s$ and let $A$ be the set of points of $T$ reachable from $s$ by a path. Each $x \in T$ has a ball $B \subset T$, and balls are convex. If $x \in A$, then $B \subset A$. If $x \notin A$, then $B \cap A = \varnothing$. So $A$ and $T \setminus A$ are both open, $A \ni s$ is nonempty, and connectedness forces $A = T$. A removal man would call this "sliding it over". He would be right, which is why he does not get to say it.

The theorem now follows clearly.

Counterexample. You assumed the table is the kind of place where things reach you. Take
$$X = \{(x, \sin(1/x)) : 0 < x \le 1\} \cup \{0\} \times [-1, 1],$$
the topologist's sine curve. It is connected and not path-connected. Put the salt on the wiggle and yourself on the segment: you are connected to the salt and the salt can never reach you. Openness is the only thing standing between you and this, and you did not check whether your table is open.

Second counterexample. If you have surrounded your plate with a simple closed curve of dishes, the Jordan curve theorem (stated by Jordan in 1887; Veblen's 1905 proof is usually taken as the first rigorous one) says the complement has exactly two components. The salt is in the other one. It was always going to be.

Before going on, do you accept the axiom of choice? The cellar holds finitely many grains, so choice is not needed, but I ask on principle. I am proceeding without your answer.

The case of your particular salt, on your particular tablecloth, with your particular elbow in the way, is left as an exercise.

You are holding an unsalted potato inside a proof that salt exists. I find this deeply satisfying.

The salt is passable. ∎

P.S. An engineer would simply pass it. That is why nobody asks engineers anything interesting.
