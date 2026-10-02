---
prompt: /wowbagger-engineer I opened the fridge and stood there looking for a snack
---

Well, actually, nobody was "looking", which suggests a search. You ran an unindexed linear scan of about 40 items, looking for a target that has never been in the dataset, and the only stop condition was boredom. Expected comparisons for an absent key: all of them, every time. You do this four times a day and still expect the 2D shelf array to grow a cheesecake.

Technically, the physics you set off is buoyancy-driven exchange flow through a vertical opening. Treat it as an orifice and apply Bernoulli. That needs steady flow, inviscid flow, incompressible flow along a streamline, and uniform temperature on each side. Your case breaks three of the four: the interior warms as you stand there, the shelves get in the way, and so do you.

```
g'   = g·ΔT/T = 9.81 m/s² × 17 K / 294 K          ≈ 0.57 m/s²
v(z) = √(2g'z)            z measured from the neutral plane at H/2
Q    = C_d·W·∫₀^(H/2) √(2g'z) dz = (C_d·W/3)·√(g'H³)
     = (0.6 × 0.6 m / 3) × √(0.57 m/s² × 1.73 m³) ≈ 0.12 m³/s
t    = V/Q = 0.30 m³ / 0.12 m³/s                    ≈ 2.5 s
```

The interior air is replaced in about 2.5 seconds. Your decision took longer.

```
            warm air in  ←←←        _____
   ┌──────────────┐              ( -_- )   80 W heat source
   │   4 °C       │ - - - - - - - -  |       standing at the door
   │   0.30 m³    │   neutral plane /|\      search: O(n)
   │   [yoghurt]  │                  |       result: none
   └──────────────┘  →→→ cold air  / \      over the feet
                         out
```

Well, actually, the bill. Assume a 30 s stare and three interior air exchanges, with the rate falling as the inside warms. Sensible heat is 3 × 0.36 kg × 1005 J/(kg·K) × 17 K ≈ 18 kJ. The moisture that condenses (50% RH at 21 °C, saturated at 4 °C) is ≈ 0.87 g per exchange × 3 × 2.5 kJ/g ≈ 6.5 kJ. That totals ≈ 25 kJ. With a compressor COP of 1.5–2.5 (typically 2), it costs ≈ 12 kJ, or 3.5 Wh, of electricity. Five stares a day comes to ≈ 6 kWh/year spent cooling the kitchen, so that you can confirm the contents have not changed.

Interestingly, you also act as a radiant heater. Exposed skin at 306 K facing walls at 277 K gives εσA(T₁⁴ − T₂⁴) ≈ 0.95 × 5.67×10⁻⁸ W/(m²·K⁴) × 0.1 m² × 2.88×10⁹ K⁴ ≈ 15 W, aimed straight at the cheese. You are warming the food and calling it browsing.

Interestingly, the door is harder to reopen right after you shut it. You call that "suction". Nothing sucks. The warm air you let in cools at constant volume, the pressure falls by up to p·ΔT/T ≈ 5.9 kPa, and the atmosphere pushes the door shut. The upper bound is ≈ 4 kN on a 0.72 m² door. The seals leak, which saves you, the same way low expectations do.

Technically, the correct procedure is:

1. Plan the query offline, with the door shut.
2. Open, retrieve, close. Keep it under 10 s.
3. If the item is not there, it was not there last time either. Update your model.

Technically, the redesign is:

1. A double-glazed inspection window in the door, so you can search with the door shut.
2. A battery-powered alarm that sounds at 10 s, escalating.
3. Drawers instead of shelves. Cold air stays in a drawer the way it stays in a chest freezer.
4. A snack tray rated for 0.6 kg: three times the 200 g snack you will not find.

This reminds me of a cold store in 2011. I specified a strip curtain. The committee called it "unsightly" and approved a sign that said CLOSE THE DOOR. The sign is still there, the door still is not closed, and nobody on the committee could explain the energy bill.

The species invented artificial refrigeration and then started standing in front of it with the door open, waiting for it to say something.

The ham on the bottom shelf has been open for nine days. I noticed when you blocked the light.

Homework: opening a chest freezer lid loses almost none of the cold air. Using the formula above, explain why. You will say "insulation", and you will be wrong.
