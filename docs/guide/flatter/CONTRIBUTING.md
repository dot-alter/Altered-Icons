---
updated: 2025-12-22
contributions: open
---

# Contribute to Flatter Icons

> For global contribution rules, workflows, and tooling, refer to the root [`CONTRIBUTING.md`](../../../CONTRIBUTING.md).

---

## Pull Request message

All Pull Requests targeting **Flatter icons** must include a clear and structured description.

**Required information:**

```md
## Summary

- **style**: `chubby`
- **variant**: line / fill / other (specify)

Briefly describe the purpose of this Pull Request.
Explain *what* is being added, changed, or fixed, and *why* it is necessary.

---

## Scope of Changes

- [ ] New icon(s)
- [ ] Icon update / refinement
- [ ] Bug fix
- [ ] Documentation update


---

## Icons Included

List the icons affected by this PR:

- `icon-name-1`
- `icon-name-2`
- `...`


---

## Good contribution checklist

- [ ] Icons follow the style guide (`docs/guide/flatter/README.md`)
- [ ] Variant-specific rules were respected
- [ ] Geometry rules were followed
- [ ] Spacing and legibility were verified at small sizes
- [ ] SVGs were optimized using the correct SVGO config  
- [ ] No unnecessary groups or attributes remain
- [ ] SVG output matches repository formatting standards
- [ ] Each icon includes a matching `.json` metadata file
- [ ] Metadata validates against the schema (`icons/.schemas/icon.schema.json`)
- [ ] Categories and tags are accurate and relevant

---

## Screenshots / Previews (optional)

Attach screenshots or previews if the change affects visual output.

---

## Additional Notes

Any context reviewers should be aware of (trade-offs, limitations, follow-ups).
```


---

## Optimization

All Flatter icons **must be optimized before submission**. For this style and variant, optimization is handled using:

`tools/svgo/styles/flatter/line.config.js`

Run the optimization tooling as defined in the global CONTRIBUTING file.  

This configuration enforces:
- controlled path simplification
- preservation of stroke weight 

> Do not reuse configs from other styles or variants.

If optimization is skipped or incorrectly applied, the icon will not be merged.

---

## SVG file format

### Line variant

The following SVG structure represents the **canonical format** for `flatter/line` icons.

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="1.5"
  viewBox="0 0 24 24"
  width="24"
  height="24">
  <path d="..."/>
</svg>
```

**Important notes:**

- Use currentColor for stroke
- Do not inline colors
- Maintain the declared stroke-width
- Keep the SVG minimal and readable
- Group elements only when strictly necessary
