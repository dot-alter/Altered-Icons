/*
 * end-to-end orchestration
 */
 
import { fileURLToPath } from "node:url";
import path from "node:path";
import { promises as fs } from "node:fs";

import {
  discoverStyles,
  loadIconsMeta,
  groupByCategory,
  resolvePaths
} from "./file-helpers.mjs";

import {
  renderHeader,
  renderIndex,
  renderCategoryBlock,
  renderRow,
  renderFooter
} from "./catalog-template.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.join(__dirname, "..", "..", "..");

(async function main() {
  const { docsCatalogDir, schemaRel } = resolvePaths({ repoRoot });
  await fs.mkdir(docsCatalogDir, { recursive: true });
  
  const version = await readVersion(repoRoot);
  const dateISO = new Date().toISOString().slice(0, 10);
  
  const styles = await discoverStyles(repoRoot);
  
  for (const { style, variants } of styles) {
    for (const variant of variants) {
      const entries = await loadIconsMeta({ repoRoot, style, variant });
      const total = entries.length;
      
      const grouped = groupByCategory(entries);
      const categoryKeys = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b));
      
      const parts = [];
      parts.push(renderHeader({ style, variant, total, version, dateISO }));
      parts.push(renderIndex(categoryKeys));
      
      for (const cat of categoryKeys) {
        const rows = grouped.get(cat).map(e => renderRow(e)).join("\n");
        parts.push(renderCategoryBlock(cat, rows));
      }
      
      parts.push(renderFooter({ version, dateISO, schemaRel }));
      
      const mdFile = path.join(docsCatalogDir, `${style}-${variant}.md`);
      await fs.writeFile(mdFile, parts.join("\n"), "utf8");
    }
  }
})().catch(err => {
  console.error("[build-catalog] FATAL:", err);
  process.exit(1);
});

async function readVersion(root) {
  try {
    const pkgRaw = await fs.readFile(path.join(root, "package.json"), "utf8");
    const pkg = JSON.parse(pkgRaw);
    return pkg.version || "0.0.0";
  } catch {
    return "0.0.0";
  }
}