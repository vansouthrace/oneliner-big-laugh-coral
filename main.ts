import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My fitness tracker congratulated me on 10,000 steps, then quietly admitted 9,800 of them were me pacing while the microwave beeped.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
