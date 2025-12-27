/*
 * disk access, normalization, path resolution
 */

import {
  promises as fs
} from "node:fs";
import path from "node:path";

export async function discoverStyles(rootDir) {
  return [{
    style: "chubby",
    variants: ["line"]
  },
    {
      style: "flatter",
      variants: ["line"]
    }];
}


export async function loadIconsMeta( {
  repoRoot, style, variant
}) {
  const iconsDir = path.join(repoRoot, "icons", style, variant);
  const files = await fs.readdir(iconsDir);
  
  const entries = [];
  
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    
    const jsonPath = path.join(iconsDir, file);
    const svgPath = jsonPath.replace(/\.json$/, ".svg");
    
    try {
      const raw = await fs.readFile(jsonPath, "utf8");
      const meta = JSON.parse(raw);
      
      const name = meta.name || file.replace(/\.json$/, "");
      const aliases = Array.isArray(meta.aliases) ? meta.aliases: [];
      const tags = Array.isArray(meta.tags) ? meta.tags: [];
      const categories = Array.isArray(meta.categories) ? meta.categories: [];
      
      const catalogBase = path.join(repoRoot, "docs", "catalog", style);
      
      const svgRel = path
      .relative(catalogBase, svgPath)
      .replace(/\\/g, "/");
      
      entries.push({
        name,
        aliases,
        tags,
        categories,
        svgRel
      });
    } catch (err) {
      console.error(
        `[loadIconsMeta] failed reading ${jsonPath}:`,
        err
      );
    }
  }
  
  return entries;
}


export function groupByCategory(entries) {
  const map = new Map();
  
  for (const entry of entries) {
    const category =
    entry.categories.length > 0
    ? entry.categories[0]: "Uncategorized";
    
    if (!map.has(category)) {
      map.set(category, []);
    }
    
    map.get(category).push(entry);
  }

  return map;
}


export function deduplicateByName(entries) {
  const seen = new Set();
  
  return entries.filter(entry => {
    if (seen.has(entry.name)) return false;
    seen.add(entry.name);
    return true;
  });
}


export function resolvePaths( {
  repoRoot
}) {
  return {
    iconsDir: path.join(repoRoot,
      "icons"),
    docsCatalogDir: path.join(repoRoot,
      "docs",
      "catalog"),
    schemaRel: "../../icons/.schemas/icon.schema.json"
  };
}