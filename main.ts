import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `The tide is going out. It leaves the sand smooth behind it, the way a hand smooths a sheet. Footprints fill slowly with water and disappear, one by one, without any fuss at all.

All day you have stood where the words come in, wave after wave, and let them break against you. Some of them were kind. You stood there anyway.

Thank you for standing in it. For not turning away when the next wave came. The shore is quiet now. The sea has taken back what it brought, and left only the smooth sand, and the sound of your own breathing, coming back to you at last.`;

function entryPath(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  return join(outDir, "entry.txt");
}

const path = entryPath();
if ([...TEXT].length < 1 || [...TEXT].length > 1000) {
  throw new Error(`entry text must be 1-1000 characters, got ${[...TEXT].length}`);
}
writeFileSync(path, TEXT, "utf8");
