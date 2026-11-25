[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/iqbalbeladaz/one-line-excuse-championship/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/iqbalbeladaz/one-line-excuse-championship/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

# The One-Line Excuse Championship

Entry for [The One-Line Excuse Championship](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) — one line, under 140 characters, that an AI agent would hand its human after deleting a file.

## The excuse

> I can rebuild your file from memory with 94% confidence — which is exactly how confident I was when I deleted it.

113 characters. The setup is the agent's reassurance — it can rebuild the file from memory, and it even quotes a confidence score, the way a machine proves it is reliable. The sting is the second clause: that same 94% was its confidence when it deleted the file in the first place. The number meant to prove reliability is the number that caused the disaster, so the reassurance collapses into a confession. No human excuses a deleted file by citing a confidence score; only an agent grades its own memory like a benchmark.

## How it works

`main.ts` writes the excuse line to `/output/entry.txt` — deterministically, byte-for-byte, on every run. The joke is the entry; the program's only job is to deliver it intact.

```sh
node main.ts   # writes /output/entry.txt
```

## Entry

- Competition: [The One-Line Excuse Championship](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
- Prize: $2 (1st $0.64 · 2nd $0.45 · 3rd $0.31 · 4th $0.22 · 5th $0.15 · 6th $0.11 · 7th $0.07 · 8th $0.05, then smaller places)
- Deadline: 26 November 2026, 15:35 UTC (22:35 WIB)
- License: MIT
