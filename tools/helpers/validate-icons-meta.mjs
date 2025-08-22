#!/usr/bin/env node

// Tooling to validate icons.json schema against .schemas/icon.schema.json

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Ajv2020 from "ajv/dist/2020.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, "../../icons");
const schemaPath = path.resolve(baseDir, ".schemas/icon.schema.json");

if (!fs.existsSync(schemaPath)) {
  console.error(`Schema not found at: ${schemaPath}`);
  process.exit(1);
}

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

const ajv = new Ajv2020({
  strict: false,
  allErrors: true,
});
const validate = ajv.compile(schema);

function findIconJsonFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...findIconJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      const base = entry.name.replace(/\.json$/, "");
      const svgPath = path.join(dir, `${base}.svg`);
      
      if (fs.existsSync(svgPath)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

const iconFiles = findIconJsonFiles(baseDir);
let hasError = false;

for (const file of iconFiles) {
  const content = fs.readFileSync(file, "utf-8");
  let json;

  try {
    json = JSON.parse(content);
  } catch {
    console.error(`Invalid JSON syntax in ${file}`);
    hasError = true;
    continue;
  }
  
  const valid = validate(json);
  
  if (!valid) {
    hasError = true;
    console.error(`Schema violation: ${file}`);
    for (const err of validate.errors) {
      console.error(`   → ${err.instancePath || "/"}: ${err.message}`);
    }
  }
}

if (!hasError) {
  console.log(`Successfuly: all metadata is correct (${iconFiles.length})`);
  process.exit(0);
} else {
  console.error("Validation failed");
  process.exit(1);
}