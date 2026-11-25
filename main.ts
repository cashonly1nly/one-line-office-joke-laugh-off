import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original one-line office joke about expensing a coffee.
// Written here, deterministically, with no input, no network and no randomness.
const ENTRY =
  "I expensed one coffee and Finance wanted a receipt, a business case, and a character reference from the barista.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
