/*
 * Task: markdown compose (no IO, pure rendering)
 */

export function renderHeader( {
  style, variant, total, version, dateISO, schemaRel
}) {
  return `# ${capitalize(style)} ${capitalize(variant)} Icons Catalog

  Icons: **${capitalize(style)}/${capitalize(variant)}**
  Total: **${total}**
  Last update: **${dateISO}**
  Version: \`${version}\`
  Schema: \`${schemaRel}\`
  
  `;
}

export function renderIndex(categoryKeys = []) {
  if (!categoryKeys.length) {
    return "## Index\n\n_(No categorized icons available)_\n";
  }

  const items = categoryKeys
  .map(k => `- [${k}](#${slug(k)})`)
  .join("\n");
  
  return `## Index\n\n${items}\n`;
}

export function renderCategoryBlock(category, rowsMd) {
  return `
  ## ${category}

  | Icon | Name | Aliases | Tags |
  |------|------|---------|------|
  ${rowsMd}
  `;
}

export function renderRow( {
  svgRel, name, aliases = [], tags = []
}) {
  const aliasStr = aliases.length ? aliases.join(", "): "—";
  const tagStr = tags.length ? tags.join(", "): "—";

  return `| ![${name}](${svgRel}) | \`${name}\` | ${aliasStr} | ${tagStr} |`;
}


function slug(value) {
  return String(value)
  .toLowerCase()
  .trim()
  .replace(/\s+/g, "-");
}

function capitalize(value) {
  return value
  ? value.charAt(0).toUpperCase() + value.slice(1): value;
}