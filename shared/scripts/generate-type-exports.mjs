import { readdirSync, writeFileSync } from "fs";
import { basename, join } from "path";

const typesDir = join(process.cwd(), "shared", "types");
const files = readdirSync(typesDir).filter(
	file =>
		file.endsWith(".type.ts") || (file.endsWith(".ts") && file !== "index.ts")
);
const exports = files
	.map(file => `export * from "./${basename(file, ".ts")}";`)
	.join("\n");

writeFileSync(join(typesDir, "index.ts"), exports + "\n");
console.log("Generated Types");
