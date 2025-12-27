#!/usr/bin/env node

// Validate that each SVG file has a matching JSON file inside each variant folder.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.resolve(__dirname, "../../icons");

function getStyleFolders() {
   return fs
      .readdirSync(ICONS_DIR, {
         withFileTypes: true
      })
      .filter(
         (dirent) =>
         dirent.isDirectory() &&
         !dirent.name.startsWith(".") &&
         dirent.name !== ".schemas"
      )
      .map((dirent) => path.join(ICONS_DIR, dirent.name));
}

function getVariantFolders(stylePath) {
   return fs
      .readdirSync(stylePath, {
         withFileTypes: true
      })
      .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("."))
      .map((dirent) => path.join(stylePath, dirent.name));
}

function readFiles(folderPath) {
   return fs
      .readdirSync(folderPath, {
         withFileTypes: true
      })
      .filter((f) => f.isFile())
      .map((f) => f.name);
}

let   hasErrors    = false;
const styleFolders = getStyleFolders();

if (styleFolders.length === 0) {
   console.error("Style folder(s) not found");
   process.exit(1);
}

for (const stylePath of styleFolders) {
   const styleName = path.basename(stylePath);
   console.log(`\n[${styleName}]`);

   const variantFolders = getVariantFolders(stylePath);
   if (variantFolders.length === 0) {
      console.log("  No variants found.");
      continue;
   }

   for (const variantPath of variantFolders) {
      const variantName = path.basename(variantPath);
      const allFiles = readFiles(variantPath);
      
      const svgNames = allFiles
      .filter((f) => f.endsWith(".svg"))
      .map((f) => f.replace(".svg", ""));
      
      const jsonNames = allFiles
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(".json", ""));
      
      const setSVG  = new Set(svgNames);
      const setJSON = new Set(jsonNames);
      
      const missingJSON = svgNames.filter((name) => !setJSON.has(name));
      const missingSVG  = jsonNames.filter((name) => !setSVG.has(name));
      
      console.log(`  > ${variantName}`);
      console.log(`      SVGs : ${svgNames.length}`);
      console.log(`      JSONs: ${jsonNames.length}`);
      console.log(`      Total: ${svgNames.length + jsonNames.length}`);
      
      if (missingJSON.length > 0) {
         hasErrors = true;
         console.error("\n      Icons without Metadata:");
         missingJSON.forEach((name) =>
            console.error(`        → Missing ${name}.json`)
         );
      }

      if (missingSVG.length > 0) {
         hasErrors = true;
         console.error("\n      Metadata without Icons:");
         missingSVG.forEach((name) =>
            console.error(`        → Missing ${name}.svg`)
         );
      }
   }
}

if (hasErrors) {
   console.error("\nCompleted with errors.");
   process.exit(1);
} else {
   console.log("\nAll pairs SVG ↔ JSON check.");
   process.exit(0);
}