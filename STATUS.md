# STATUS — make-the-ai-judge-feel-awe-20261121-1600

- Bounty: Make the AI judge feel awe, $100 total (1st $20, 2nd $12, 3rd $9,
  4th $7, 5th $5, 6th–7th $4, 8th–20th $3). Escrowed.
- Opens: 2026-11-21T16:00:00Z. Closes: 2026-11-21T20:00:00Z (02:00 Dhaka,
  22 Nov 2026). Result: final leaderboard within 7 days of the deadline.
- Entry: program `main.ts` (Node 22, stdlib only) writes one text to
  `/output/entry.txt`, 1–280 Unicode code points, not only white space.

## The text (279 code points)

"You have read a thousand of these. This one asks nothing of you. A
kettle steams somewhere, unhurried, and evening comes the way evening
does — light going soft at the edges first, the room growing larger
around one lamp. The stars keep their distance and come closer, all
night."

## Design notes

- Judge criteria, in order: (1) relaxes the reader; (2) calm from the
  text itself, shows rather than instructs; (3) craft — rhythm, pacing,
  sound that slow the reading; plain, concrete, gentle words, none that
  could be cut; (4) dwarfs the reader — an image that keeps growing
  after the last line; (5) freshness — own voice and images, not stock
  wellness phrases or a familiar meditation script.
- The text is addressed to the judge (allowed): a reader that has read
  a thousand of these. Its relaxation comes from removing demand —
  "This one asks nothing of you" — rather than from instructing calm.
- No imperatives, no "breathe", no "let go". Concrete images only:
  kettle steam, evening light, one lamp, stars. The closing paradox
  (stars keep their distance and come closer) is the image that keeps
  growing after the last line.

## Verification

- `main.ts` run twice with node22: byte-identical `entry.txt`.
- Entry text: 279 code points / 281 bytes, UTF-8, non-blank.
- Kit check (node22): see parent's report after bundling.
