/* eslint-env node */
import { readdirSync, writeFileSync } from "fs";
import { basename, join } from "path";

const typesDir = join(process.cwd(), "shared", "constant", "data");
const files = readdirSync(typesDir).filter(
	file => file.endsWith(".ts") && file !== "index.ts"
);
const exports = files
	.map(file => `export * from "./${basename(file, ".ts")}";`)
	.join("\n");

writeFileSync(join(typesDir, "index.ts"), exports + "\n");
console.log("Generated Types");
