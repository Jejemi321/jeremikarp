import { readdirSync, writeFileSync, statSync } from "fs";
import { join, basename } from "path";

const constantDir = join(process.cwd(), "shared", "constant");

// Podfoldery do przetworzenia
const subfolders = ["Photo", "Web", "Video"];

subfolders.forEach(subfolder => {
	const folderPath = join(constantDir, subfolder);

	// Sprawdź, czy folder istnieje
	if (!statSync(folderPath).isDirectory()) return;

	const files = readdirSync(folderPath).filter(
		file => file.endsWith(".ts") && file !== "index.ts"
	);

	const exports = files
		.map(file => `export * from "./${basename(file, ".ts")}";`)
		.join("\n");

	writeFileSync(join(folderPath, "index.ts"), exports + "\n");
	console.log(`Generated index.ts for ${subfolder}`);
});
