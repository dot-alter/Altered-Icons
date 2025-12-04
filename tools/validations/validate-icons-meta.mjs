#!/usr/bin/env node

// Validates icon metadata JSON files against per-style schemas.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Ajv2020 from "ajv/dist/2020.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.resolve(__dirname, "../../icons");
const SCHEMA_DIR = path.join(ICONS_DIR, ".schemas");
const CORE_SCHEMA = path.join(SCHEMA_DIR, "icon.schema.json");


function getStyles() {
   return fs
      .readdirSync(ICONS_DIR, {
         withFileTypes: true
      })
      .filter(
         (d) =>
         d.isDirectory() &&
         d.name !== ".schemas" &&
         !d.name.startsWith(".")
      )
      .map((d) => d.name);
}

function loadSchema(schemaPath) {
   if (!fs.existsSync(schemaPath)) return null;

   try {
      return JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
   } catch (err) {
      console.error(`Error parsing schema: ${schemaPath}`);
      console.error(err);
      process.exit(1);
   }
}

function gatherJsonFiles(styleName) {
   const basePath = path.join(ICONS_DIR, styleName);
   
   const files = [];
   
   function walk(dir) {
      const entries = fs.readdirSync(dir, {
         withFileTypes: true
      });
      for (const entry of entries) {
         const full = path.join(dir, entry.name);
         
         if (entry.isDirectory()) {
            walk(full);
         } else if (entry.isFile() && entry.name.endsWith(".json")) {
            files.push(full);
         }
      }
   }

   walk(basePath);
   return files;
}

// Core --------------------------------------------------------------

let hasErrors = false;

const styles = getStyles();

if (styles.length === 0) {
   console.error("No styles found under /icons");
   process.exit(1);
}

console.log(`Detected styles: ${styles.join(", ")}`);

for (const style of styles) {
   console.log(`\n[${style}]`);

   // Determine schema file
   const styleSchemaPath = path.join(SCHEMA_DIR, `${style}.schema.json`);

   let schema = loadSchema(styleSchemaPath);

   if (schema) {
      console.log(`  Using style-specific schema: ${style}.schema.json`);
   } else {
      schema = loadSchema(CORE_SCHEMA);
      
      if (!schema) {
         console.error(`Core schema missing at: ${CORE_SCHEMA}`);
         process.exit(1);
      }
      
      console.log(`  Using core schema: icon.schema.json`);
   }

   // Prepare validator
   const ajv = new Ajv2020( {
      strict: false, allErrors: true
   });
   const validate = ajv.compile(schema);

   const jsonFiles = gatherJsonFiles(style);

   console.log(`  Metadata files found: ${jsonFiles.length}`);


   // Validate
   for (const file of jsonFiles) {
      let data;
      
      try {
         data = JSON.parse(fs.readFileSync(file, "utf-8"));
      } catch {
         hasErrors = true;
         console.error(`  ✖ Invalid JSON syntax → ${file}`);
         continue;
      }
      
      const valid = validate(data);
      
      if (!valid) {
         hasErrors = true;
         console.error(`  Schema violation → ${file}`);
         
         for (const err of validate.errors) {
            console.error(`     → ${err.instancePath || "/"}: ${err.message}`);
         }
      }
   }
}

// Results ------------------------------------------------------------

if (hasErrors) {
   console.error("\nValidation failed.");
   process.exit(1);
} else {
   console.log("\nAll metadata validated successfully.");
   process.exit(0);
}