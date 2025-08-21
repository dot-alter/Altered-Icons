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
  deduplicateByName,
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

  const dateISO = new Date().toISOString().slice(0, 10);

  const versionsPath = path.join(repoRoot, "versions.json");
  let versions = {};
  try {
    const versionsRaw = await fs.readFile(versionsPath, "utf8");
    versions = JSON.parse(versionsRaw);
  } catch (err) {
    console.warn("[build-catalog] alert: versions.json not found or invalid, defaulting to 0.0.0");
  }
  
  const styles = await discoverStyles(repoRoot);
  
  for (const { style, variants } of styles) {
    for (const variant of variants) {
      let entries = await loadIconsMeta({ repoRoot, style, variant });
      entries = deduplicateByName(entries);
      
      const total = entries.length;
      const grouped = groupByCategory(entries);
      const categoryKeys = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b));
      
      const parts = [];
      
      const styleVariant = `${style}:${variant}`;
      const version = versions[styleVariant] || "0.0.0";
      
      parts.push(renderHeader({ style, variant, total, version, dateISO }));
      parts.push(renderIndex(categoryKeys));
      
      for (const cat of categoryKeys) {
        const rows = grouped.get(cat).map(e => renderRow(e)).join("\n");
        parts.push(renderCategoryBlock(cat, rows));
      }
      
      parts.push(renderFooter({ version, dateISO, schemaRel }));
      
      const mdFile = path.join(docsCatalogDir, `${style}-${variant}.md`);
      await fs.writeFile(mdFile, parts.join("\n"), "utf8");
      console.log(`Catalog generated: ${mdFile}`);
    }
  }
})().catch(err => {
  console.error("[build-catalog] FATAL:", err);
  process.exit(1);
});