import { mkdirSync, writeFileSync } from "node:fs";

// One hilarious line, 200 characters or fewer, that lands entirely on its own.
const line =
  "My password manager just filed a restraining order against me after I tried 'password123' for the ninth time this month, and frankly the judge agrees with it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
