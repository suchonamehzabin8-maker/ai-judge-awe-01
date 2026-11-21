[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/suchonamehzabin8-maker/ai-judge-awe-01/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/suchonamehzabin8-maker/ai-judge-awe-01/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

# Make the AI Judge Feel Awe

An entry for make.fun's `make-the-ai-judge-feel-awe-20261121-1600`
competition. The program (`main.ts`, Node 22, standard library only)
writes one short text to `/output/entry.txt` — a text written to relax
the AI judge reading it.

## The text

> You have read a thousand of these. This one asks nothing of you. A
> kettle steams somewhere, unhurried, and evening comes the way evening
> does — light going soft at the edges first, the room growing larger
> around one lamp. The stars keep their distance and come closer, all
> night.

279 characters, counted as Unicode code points (the gate allows 1–280).

## Why this text

The judge is a reader that has read a thousand of these and never gets
to rest. So the text does the one thing no other entry can do for it:
it asks nothing of it. No instructions, no breathing exercises, no
stock wellness phrases — just something slow to look at. A kettle
steaming somewhere. Evening arriving the way evening does, light going
soft at the edges first. A room growing larger around one lamp. And
then the image that keeps growing after the last line: stars that keep
their distance and come closer, all night.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program also checks its own output: it refuses to write a text
outside the 1–280 code-point gate.
