/*
 * Task: markdown compose (- IO)
 */

export function renderHeader({ style, variant, total, version, dateISO, schemaRel }) {
  return `# ${capitalize(style)} ${capitalize(variant)} Icons Catalog

Icons: **${capitalize(style)}/${capitalize(variant)}**.
Total: **${total}**.
Last Update: **${dateISO}**.
Version: \`${version}\`.
Schema: \`${schemaRel}\`.
`;
}

export function renderIndex(categoryKeys = []) {
  if (!categoryKeys.length) return "## Index\n\n_(No featured categories)_\n";
  const items = categoryKeys.map(k => `- [${k}](#${slug(k)})`).join("\n");
  return `## Index\n\n${items}\n`;
}

export function renderCategoryBlock(category, rowsMd) {
  return `\n## ${category}\n\n| Icon | Name | Aliases | Tags |\n|------|------|---------|------|\n${rowsMd}\n`;
}

export function renderRow({ svgRel, name, aliases = [], tags = [] }) {
  const aliasStr = aliases.join(", ");
  const tagStr = tags.join(", ");
  return `| ![${name}](${svgRel}) | \`${name}\` | ${aliasStr} | ${tagStr} |`;
}


// some utils
function slug(s) { 
  return String(s).toLowerCase().replace(/\s+/g, "-");
}
function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}