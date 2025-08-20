#!/usr/bin/env node

// simple tooling to map all svg+json icons into a unified index.json for Altered Icons

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../../icons");
const outputFile = path.resolve(rootDir, "../icons/index.json");

const walkDir = (dir) => {
  return fs
    .readdirSync(dir)
    .filter((d) =>
      fs.statSync(path.join(dir, d)).isDirectory() &&
      !d.startsWith(".")
    );
};

const buildMap = () => {
  const styleMap = {};
  
  const styles = walkDir(rootDir);
  for (const style of styles) {
    const styleDir = path.join(rootDir, style);
    const variants = walkDir(styleDir);
    styleMap[style] = {};
    
    for (const variant of variants) {
      const variantDir = path.join(styleDir, variant);
      const files = fs.readdirSync(variantDir);
      
      const svgFiles = files.filter((f) => f.endsWith(".svg"));
      const jsonFiles = new Set(files.filter((f) => f.endsWith(".json")));
      
      const index = [];
      
      for (const svg of svgFiles) {
        const base = path.basename(svg, ".svg");
        const json = `${base}.json`;
        const hasJson = jsonFiles.has(json);
        
        if (!hasJson) {
          console.warn(
            `missing data "${base}" : ${style}/${variant}`
          );
        }
        
        index.push({
          name: base,
          svg: path.join(style, variant, svg).replace(/\\/g, "/"),
          json: hasJson
            ? path.join(style, variant, json).replace(/\\/g, "/")
            : null,
        });
      }
      
      styleMap[style][variant] = index;
    }
  }
  
  return styleMap;
};

const run = () => {
  const map = buildMap();
  fs.writeFileSync(outputFile, JSON.stringify(map, null, 2));
  console.log(`index.json output → ${outputFile}`);
};

run();