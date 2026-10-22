import { copyFile, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(projectRoot, "dist");
if (!dist.startsWith(projectRoot + "\\") && !dist.startsWith(projectRoot + "/")) {
  throw new Error("Refusing to build outside the project directory");
}

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(dist, ".openai"), { recursive: true });
await copyFile(resolve(projectRoot, ".openai", "hosting.json"), resolve(dist, ".openai", "hosting.json"));
await import("./generate-worker.mjs");
