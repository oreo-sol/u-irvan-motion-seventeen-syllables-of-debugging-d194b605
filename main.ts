import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "one print statement left",
  "in production logs tonight",
  "it greets the whole world",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
