#!/usr/bin/env node

// Simple tooling to validate icons.json schema

const fs = require("fs");
const path = require("path");
const Ajv2020 = require("ajv/dist/2020").default;

const baseDir = path.resolve(__dirname, "../../icons");
const schemaPath = path.resolve(baseDir, ".schemas/icon.schema.json");

if (!fs.existsSync(schemaPath)) {
  console.error(`schema not found at: ${schemaPath}`);
  process.exit(1);
}

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

const ajv = new Ajv2020({
  strict: false,
  allErrors: true
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
  } catch (err) {
    console.error(`invalid json syntax in ${file}`);
    hasError = true;
    continue;
  }
  
  const valid = validate(json);
  
  if (!valid) {
    hasError = true;
    console.error(`schema violation: ${file}`);
    for (const err of validate.errors) {
      console.error(`   → ${err.instancePath || "/"}: ${err.message}`);
    }
  }
}

if (!hasError) {
  console.log(` all metadata is correct (${iconFiles.length})`);
  process.exit(0);
} else {
  console.error("fail validation");
  process.exit(1);
}