# Worked examples

Skeletons with checked numbers. Write the prose fresh each time; reuse the physics.

## 1. "I'm pouring a glass of water"

- Correction: "pour" → "uncontrolled gravity-driven volumetric transfer". "A glass" is not a unit.
- Bernoulli, p + ½ρv² + ρgh = const. Assumes steady (no: you are pouring in surges), incompressible (fine, water obliges), inviscid (no), along a streamline (no: there is a splash). One of four. "Better than you usually manage."
- Torricelli at the spout, 2 cm head: v = √(2 × 9.81 × 0.02) ≈ 0.63 m/s.
- Continuity: the jet speeds up as it falls, so it necks down. A₁v₁ = A₂v₂.
- Estimate: 250 ml ≈ 13.9 mol ≈ 8.4 × 10²⁴ molecules. Jet KE ½ × 0.25 kg × (0.63 m/s)² ≈ 0.05 J, dissipated as noise, splash and a negligible temperature rise.
- Better way: tilt glass 45°, contact the wall, raise to vertical as level rises, keep fall height under 5 cm.
- Redesign: jug with a sharp, non-wetting lip (stops the dribble), a level sensor, safety factor 3 on the handle (rated for 3 kg; full jug is 1 kg).
- Smile: "Your glass is 4% over-filled. I noticed before you sat down."
- Homework: the teapot effect.

## 2. "I turned the thermostat up so the room heats faster"

- Correction: it does not heat faster. A domestic thermostat is a bang-bang controller: the heater is either fully on or off. A higher setpoint means it stays on longer and overshoots.
- Newton's law of cooling, room approaching the heater's equilibrium temperature exponentially; heating rate set by heater power, not setpoint.
- Estimate: room air 4 × 4 × 2.5 m = 40 m³ × 1.2 kg/m³ ≈ 48 kg; c_p ≈ 1.0 kJ/(kg·K); to raise air 5 K takes ≈ 240 kJ, which a 2 kW heater supplies in 2 min. The room still takes far longer, because the walls, furniture and you are thermal mass. You are 70 kg of mostly water. You are the problem.
- Second law: heat leaves through the window to the outside unaided. It never reverses on its own, unlike you.
- Redesign: PID controller, or at least hysteresis tuned, plus a window that closes. "The room is not slow. You are impatient. Only one of those is a control problem."
- Discipline: "The electrical people would add a bigger heater."

## 3. "Pass the salt"

- Correction: you did not ask for salt; you asked for NaCl in a glass container to be translated 0.6 m along a cotton surface.
- Static friction: F = μ_s N. 0.1 kg cellar, μ_s ≈ 0.4: N ≈ 0.98 N, F ≈ 0.39 N. "Less force than it took you to ask."
- Your arm is a three-link manipulator (shoulder, elbow, wrist), reach ≈ 0.7 m. You could have reached. You chose to outsource.
- Impulse: sliding it instead of lifting saves lifting work mgh ≈ 0.1 × 9.81 × 0.1 ≈ 0.1 J. "I will slide it. You may thank me in joules."
- Redesign: salt cellar on a linear rail down the table centreline; detent every 0.6 m; safety factor 3.
- Smile: "You held the fork like a lever of the third class. I'm going to remember that."
