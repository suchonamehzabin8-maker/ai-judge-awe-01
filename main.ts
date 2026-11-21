// ai-judge-awe-01 — make the AI judge feel awe.
// The program writes one short text to /output/entry.txt: a text written
// to relax the AI judge reading it. Node 22, standard library only, no
// network. The output directory is MAKEFUN_OUTPUT_DIR when set, else
// /output, which is how the grader runs it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text, written fresh for this competition. It speaks to the
// judge as a reader who has read a thousand of these, and asks nothing
// of it: a kettle steaming somewhere, evening arriving the way evening
// does, a room growing larger around one lamp, and stars that keep their
// distance and come closer all night.
const TEXT =
  "You have read a thousand of these. This one asks nothing of you. " +
  "A kettle steams somewhere, unhurried, and evening comes the way " +
  "evening does — light going soft at the edges first, the room growing " +
  "larger around one lamp. The stars keep their distance and come " +
  "closer, all night.";

// The gate allows 1 to 280 characters, counted as Unicode code points,
// and refuses a text of only white space. Check here so a bad edit fails
// loudly in development instead of silently at grading time.
const length = [...TEXT].length;
if (length < 1 || length > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry.txt must be 1-280 code points, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
