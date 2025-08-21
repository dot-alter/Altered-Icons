/*
 * Task: read disc, normalization
 * return structure
 */
 
import { promises as fs } from "node:fs";
import path from "node:path";

export async function discoverStyles(rootDir) {
  // hardcoded for now
  return [
    { style: "chubby", variants: ["line"] },
    { style: "flatter", variants: ["line"] },
  ];
}

export async function loadIconsMeta({ repoRoot, style, variant }) {
  const dir = path.join(repoRoot, "icons", style, variant);
  const files = await fs.readdir(dir);
  
  const entries = [];
  
  for (const f of files) {
    if (!f.endsWith(".json")) continue;
    
    const jsonPath = path.join(dir, f);
    const svgPath = jsonPath.replace(/\.json$/, ".svg");
    
    try {
      const raw = await fs.readFile(jsonPath, "utf8");
      const meta = JSON.parse(raw);
      
      const name = meta.name || f.replace(/\.json$/, "");
      const aliases = meta.aliases || [];
      const tags = meta.tags || [];
      const categories = meta.categories || [];
      
      const svgRel = path.relative(
        path.join(repoRoot, "docs", "catalog"),
        svgPath
      ).replace(/\\/g, "/");
      
      entries.push({
        name,
        aliases,
        tags,
        categories,
        svgRel,
        jsonRel: path.relative(
          path.join(repoRoot, "docs", "catalog"),
          jsonPath
        ).replace(/\\/g, "/")
      });
    } catch (err) {
      console.error(`[loadIconsMeta] error reading ${jsonPath}:`, err);
    }
  }
  
  return entries;
}

export function groupByCategory(entries) {
  const map = new Map();
  for (const e of entries) {
    const cats = Array.isArray(e.categories) && e.categories.length ? e.categories : ["Uncategorized"];
    for (const c of cats) {
      if (!map.has(c)) map.set(c, []);
      map.get(c).push(e);
    }
  }
  return map;
}

export function resolvePaths({ repoRoot }) {
  return {
    iconsDir: path.join(repoRoot, "icons"),
    docsCatalogDir: path.join(repoRoot, "docs", "catalog"),
    schemaRel: "../../icons/.schemas/icon.schema.json",
  };
}
