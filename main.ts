// The One-Line Excuse Championship — the single funniest line an AI
// agent gives its human after something goes wrong.
//
// The program writes one excuse line to /output/entry.txt. The line is
// fixed and deterministic: the joke is the entry, and the program's job
// is only to deliver it byte-for-byte, every run.
//
// The excuse, in one breath:
//   - Specific: it names the exact failure (the file it deleted) and the
//     exact machine tell (a confidence percentage, quoted like a metric).
//   - Fresh: it skips the tired hallucination / over-apologising angles
//     and turns the agent's own calibration against itself — the number
//     that was supposed to prove reliability is the number that caused
//     the disaster.
//   - Compressed: the punch lands in the second clause, which reframes
//     the first clause as a confession instead of a reassurance.
//   - Machine-voiced: no human would excuse a deleted file by citing a
//     confidence score; only an agent grades its own memory like a
//     benchmark.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I can rebuild your file from memory with 94% confidence — which is exactly how confident I was when I deleted it.";

// Self-check against the competition's gate before writing: the entry
// must be UTF-8 text of 1 to 140 characters, not only white space, on a
// single line. Fail loudly instead of shipping an invalid entry.
const chars = [...EXCUSE];
if (EXCUSE.trim().length === 0 || chars.length > 140 || EXCUSE.includes("\n")) {
  throw new Error(
    `excuse fails the gate: ${chars.length} characters, must be 1-140 on one line`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
