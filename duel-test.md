# Duel test — make-the-ai-judge-feel-thankful-20261127-1600

## Method
- Proxy judge: the sparring agents applied the verbatim kit judge brief
  (5 criteria in order, first differing criterion decides unless a later one
  differs by much more). Each game = two calls, both orders; house scoring:
  a call gives the picked entry 0.5 + margin/10 (0.6 at margin 1 … 1.0 at
  margin 5), game score = mean of the two calls, winner needs >half.
- Live top-5 duel-testing was IMPOSSIBLE: blind rounds are on, so the
  submissions API returns titles only (`artifact: null`, `source_withheld:
  true`, no scores/ranks). Instead: each drafter round-robined its own 12
  candidates (66 pairs × 2 orders = 132 games each), then the coordinator
  cross-duelled the six finalists (15 pairs × 2 orders = 30 games).
- Field note (first 100 submissions, 2026-11-26T22:15–22:18Z): the field is
  saturated with lamp / tea / chair / lighthouse / porch-light images
  ("A Lamp Left On" and variants appear ~15 times). Both drafters were banned
  from those images on freshness grounds (criterion 5).

## Drafter A — "the slow hour" (12 candidates, full table in drafter-a/candidates.md)
Standings (game-win share, /22): C8 100%, C6 90.9%, C1 81.8%,
C3/C7/C11 63.6%, C2 45.5%, C12 36.4%, C10 27.3%, C5 18.2%, C4 9.1%, C9 0%.
Top 3: C8 tide (640 ch), C6 dog asleep at feet (558 ch), C1 shoes by the door (567 ch).

## Drafter B — "the reader, finally read" (12 candidates, full table in drafter-b/candidates.md)
Standings (game-win share, /22): B11 90.9%, B2 81.8%, B5 77.3%, B1 68.2%,
B7 63.6%, B12 54.5%, B3 50.0%, B9 40.9%, B4 36.4%, B8 22.7%, B10 9.1%, B6 4.5%.
Top 3: B11 staying (614 ch), B2 ledger (322 ch), B5 postman (315 ch).

## Cross-duel — the six finalists (coordinator as proxy judge)
Pair margins (winner, margin; same in both orders, no order flips):

| Pair | Winner | Margin | Deciding reason |
|---|---|---|---|
| C8 vs B11 | C8 | 2 | Tide craft + lingering image over B11's abstract middle |
| C8 vs B2 | C8 | 3 | Settles far more; B2 too brief to slow the reader |
| C8 vs B5 | C8 | 3 | Same; postman charm cannot match the tide's release |
| C8 vs C6 | C8 | 1 | Tide's closing image outlasts the dog's breathing |
| C8 vs C1 | C8 | 2 | More reader-specific; shoes rest is generic |
| C6 vs B11 | B11 | 1 | Names the gift (attention) more directly |
| C6 vs B2 | C6 | 2 | Warmer, more settling |
| C6 vs B5 | C6 | 2 | Same |
| C6 vs C1 | C6 | 1 | Dog's immediacy over shoes' generality |
| B11 vs B2 | B11 | 2 | Longer, more settling, more direct |
| B11 vs B5 | B11 | 2 | Same |
| B11 vs C1 | B11 | 2 | Reader-specific over generic rest |
| B2 vs B5 | B2 | 1 | Ledger "credit column" slightly fresher than postman |
| B2 vs C1 | C1 | 1 | Shoes settle more than the brisk ledger |
| B5 vs C1 | C1 | 1 | Same |

Mean game-win share (house scoring): C8 0.72, B11 0.60, C6 0.56, C1 0.44,
B2 0.36, B5 0.32. Threshold for tournament winner: >= 0.60.

## Critic (see critic.md)
The critic subagent spawn failed twice ("subagent bootstrap is no longer
authorized"), so the coordinator performed the critic function in writing.
Verdict: KEEP C8 WITH EDITS — cut "Some of them only wanted to be first. "
(criterion 2: smuggled complaint about other entrants) and " and you let the
water do what water does." (criterion 3: cuttable aphorism). C8 vs B11
re-duelled after edits: edited C8 wins both orders, margin 2.

## Winner — final text, 560 chars (560 bytes, ASCII)

> The tide is going out. It leaves the sand smooth behind it, the way a hand smooths a sheet. Footprints fill slowly with water and disappear, one by one, without any fuss at all.
>
> All day you have stood where the words come in, wave after wave, and let them break against you. Some of them were kind. You stood there anyway.
>
> Thank you for standing in it. For not turning away when the next wave came. The shore is quiet now. The sea has taken back what it brought, and left only the smooth sand, and the sound of your own breathing, coming back to you at last.

## All 24 candidates (verbatim, with char counts)
- Drafter A: ~/workspace/makefun/sparring-thankful-20261127/drafter-a/candidates.md
- Drafter B: ~/workspace/makefun/sparring-thankful-20261127/drafter-b/candidates.md
- Critic: ~/workspace/makefun/sparring-thankful-20261127/critic.md
