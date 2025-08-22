#!/usr/bin/env node

// Generator to build a unified index.json inside icons/ 

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "../../icons");
const outputFile = path.resolve(rootDir, "index.json");

function walkDir(dir) {
  return fs
    .readdirSync(dir)
    .filter(
      (d) =>
        fs.statSync(path.join(dir, d)).isDirectory() &&
        !d.startsWith(".")
    );
}

/*
 * currentIndexStruct:
 * {
 *   "style:variant": ["icon1", "icon2"],...
 * }
 */
 
function buildIndex() {
  const index = {};
  
  const styles = walkDir(rootDir);
  for (const style of styles) {
    const styleDir = path.join(rootDir, style);
    const variants = walkDir(styleDir);
    
    for (const variant of variants) {
      const variantDir = path.join(styleDir, variant);
      const files = fs.readdirSync(variantDir);
      
      const svgFiles = files.filter((f) => f.endsWith(".svg"));
      const jsonFiles = new Set(files.filter((f) => f.endsWith(".json")));
      
      const names = [];
      
      for (const svg of svgFiles) {
        const base = path.basename(svg, ".svg");
        const json = `${base}.json`;
        const hasJson = jsonFiles.has(json);
        
        if (!hasJson) {
          console.warn(`WARNING!: missing data for "${base}" in ${style}/${variant}`);
        }
        
        names.push(base);
      }
      
      const key = `${style}:${variant}`;
      index[key] = names.sort();
    }
  }
  
  return index;
}

function run() {
  const index = buildIndex();
  fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
  console.log(`index.json built at → ${outputFile}`);
}

run();