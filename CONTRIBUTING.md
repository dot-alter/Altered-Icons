# Contributing to Altered Icons
<small>15-min read</small>

If you're here, we're glad to know that Altered Icons piques your interest. Your help is greatly appreciated as community support is what will give life to the project.

Contributing is simple: you just need to be familiar with the project’s principles, design styles, and metric systems:

+ [Principles →](docs/guide/principles/01_basics.md)  
+ [Design →](docs/guide/principles/02_design.md)  
+ [Metrics →](docs/guide/principles/03_metrics.md)

Once you're familiar with the fundamentals, it's essential to follow the contribution standards, file format rules, and automated validation workflow.

**In this section:**

+ [Conscious participation ↴](#conscious-participation)
	+ [Ways to contribute ↴](#ways-to-contribute)
	+ [Suggest or report an icon ↴](#suggest-or-report-an-icon)
+ [Submit your icon](#submit-your-icon)
	+ [Steps ↴](#steps)
+ [Labeling system ↴](#labeling-system)
+ [File formatting ↴](#file-format-guidelines)
	+ [Naming conventions](#file-naming)
	+ [Best practices](#icon-naming-best-practices)
	+ [JSON format](#json-format)
	+ [SVG format](#svg-formatting-standards)
+ [Language ↴](#language-requirements)
+ [Unapproved icons ↴](#unapproved-icons)


---

## Conscious Participation

Your contribution helps others discover icons they need. Please align your effort with the project's values of clarity or consistency.

### Ways to contribute:

1. **Suggestions**  
Submit ideas for missing icons by opening an issue. Reviews are weekly.

2. **New icons**  
	Submit a pull request with a valid SVG and JSON. Review is stricter for `icons/`, relaxed for `lab/`.
	+ **Draft contributions** → added to the `lab/` directory. Used for community testing, prototyping, or early-stage ideas
	+ **Final integrations** → icons ready for production go into the `icons/` directory and must follow strict validation rules

3. **Bug reports**  
Found something broken? Open an issue using the proper template.

> Depending on your PR's intention, place your files in the appropriate directory.

---


## Suggest or Report an Icon

1. **Check for duplicates**  
Search the repo or ask in [Discord](https://discord.gg/bWW6teuF45).

2. **Open an issue**  
Use the templates:
- [🐞 Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)  
- [🆕 Icon Suggestion](.github/ISSUE_TEMPLATE/new_icon_request.md)

3. **Fill the template fields properly**  
Don't remove required sections unless justified.


---

## Submit Your Icon

You can contribute icons to either `lab/` or `icons/`:

| Type            | Path                                      | Use                                  | Requirements                   |
| --------------- | ----------------------------------------- | ------------------------------------ | ------------------------------ |
| Community Draft | `lab/<style>/<variant>/<iconNameFolder>/` | Unit tests or possible integrations. | Minimal validation             |
| Production Icon | `icons/<style>/<variant>/`                | New icon that fits the AI style.     | Strict formatting & validation |

### Steps:

1. **Choose category/style**  
	Refer to [Basic Principles →](docs/guide/principles/01_basics.md).

2. **Check for duplicates**
	- [Chubby](https://github.com/dot-alter/Altered-Icons/tree/master/icons/chubby)  
	- [Flatter](https://github.com/dot-alter/Altered-Icons/tree/master/icons/flatter)

3. **Submit a PR**
	- Provide both `.svg` and `.json`  
	- Target the correct folder  
	- Use the template:  
	  [🆕 Add a New Icon PR Template](.github/PULL_REQUEST_TEMPLATE/pull_request_icon.md)


> [!NOTE] 
> Find the specific **format of the JSON file** below.


<!--
3. **Review & approval**  
	PRs go through validation tooling. Feedback is provided if changes are needed.

---

<!--
## Automated Validation Workflow

Every icon submission is processed through automated scripts:

| Validation Type      | Tool/Script                          | Scope                       |
| -------------------- | ------------------------------------ | --------------------------- |
| SVG Optimization     | SVGO                                 | Formatting & structure      |
| JSON Schema          | AJV CLI                              | `.json` metadata validation |
| Metadata Consistency | `tools/validations/validate-meta.js` | Required fields             |

### Commands

Run all validations locally:

```bash
npm install
```

```bash
npm run validate
```

Or run specific tasks:

```bash
npm run lint:svg:lab     # Validate lab/ contributions
npm run lint:svg:icons   # Validate production icons
npm run lint:json        # Validate .json schema
npm run lint:naming      # Validate naming conventions
npm run lint:meta        # Validate required JSON fields
```

---

-->

---

## Labeling System

| Label                      | Description                          |
|----------------------------|--------------------------------------|
| `status: pending`          | PR awaiting review                   |
| `status: approved`         | PR meets standards, ready to merge   |
| `status: changes requested`| Requires contributor revisions       |
| `status: rejected`         | Not accepted                         |
| `type: icon`               | New icon added                       |
| `type: suggestion`         | Feature or icon request              |
| `help-wanted`              | Assistance needed from community     |
| `good-first-issue`         | Beginner-friendly task               |

---

## File Format Guidelines

### File Naming

`icon-name.svg` and `icon-name.json`

Use **kebab-case** only. Avoid:

- ❌ Spaces or uppercase (`MessageBox.svg`)
- ❌ Redundant descriptors (`final`, `chubby`, `en`)
- ❌ Symbols or special characters (`@`, `#`, `.`)

### Icon Naming Best Practices

- Name icons by what they **are**, not what they **do**
- Use **alphabetical** numbers: `loop-two.svg`
- Prefer **derivatives**: `door`, `door-open` (not `door-2`)
- Order elements by importance: `user-happy` (not `happy-user`)


### JSON Format 

Use the following template for the JSON file corresponding to the icon you created:

```json
{
  "$schema": "../../.schemas/icon.schema.json",
  "name": "your-icon-name",
  "aliases": [
    "some",
    "aliases",
    "here"
  ],
  "tags": [
    "tag1",
    "tag2"
  ],
  "categories": [
    "category1",
    "category2"
  ],
  "contributors": [
    "yourusername"
  ]
}
```

**Allowed categories**

```txt
- actions
- analytics
- buildings
- business
- commerce
- communication
- design
- development
- devices
- document
- emotions
- events
- feedback
- health
- indication
- interface
- mathematics
- media
- navigation
- network
- objects
- office
- people
- rating
- security
- shopping
- status
- technology
- time
- transportation
```

---

### SVG Formatting Standards

All SVG files must:

- Be indented with **2 spaces**
- Use **LF line endings**
- Contain only 1 `<svg>` element
- Include the following attributes in this **exact order**:

```xml
<svg
  fill="none"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="1.5"
  viewBox="0 0 24 24"
  width="24"
  height="24">
```

Wrap inner elements with `<g>` when needed

Example:

```xml
<svg
  fill="none"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="1.5"
  viewBox="0 0 24 24"
  width="24"
  height="24">
  <g>
    <path d="..." />
    <path d="..." />
  </g>
  </svg>
```


---

## Other Requirements


### Language

All issues, commits, PRs, filenames, and icon metadata must be in English:

+ Issues & Pull Request titles/descriptions
+ Commit messages
+ Icon names (.svg, .json)


### Commit Conventions
- Use Conventional Commits to clearly indicate the type of change:
  - `feat(<style>):` for adding new icons or expanding a set → triggers **MINOR** increment for that style.
  - `fix(<style>):` for correcting icon metadata, aliases, or SVG issues.

<!-- FOR MAINTAINERS
  - `chore:` for updating CHANGELOG or internal tooling; does **not** affect style version directly unless it accompanies a `feat` or `fix`.

### tagging releases

Altered-Icons uses **semantic versioning per style**. Each style (e.g., `chubby-line`, `chubby-fill`) can have its own independent version, tracked via Git tags. The global repository version (`package.json` at root) reflects overall project releases but does not automatically update with every style release.

- Tags must always point to the commit that represents a **complete, releasable state**:
  - Includes new icons (feat) **and** updated CHANGELOG entries.
  - Example: `chubby-line-v0.11.0`
- Maintainers are responsible for creating tags; contributors do not create tags.

### Summary
- **Minor** = new icons added
- **Patch** = fixes or optimizations
- **Major** = breaking changes (rare in 0.x)
- Always follow commit conventions; this ensures predictable, clean versioning even if only maintainers handle releases.
-->


---

## Unapproved Icons

Rejected icons with potential may be moved to:

`./drafts/community/[style]/[user]/[icon-name-folder]/`

These must still include both `.svg` and `.json`, and follow formatting standards. Attribution is preserved via Git history.


---

## 🔮 New to Open Source?


+ [What is a GitHub Issue? (visit)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)

+ [How to contribute on GitHub (visit)](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

+ [How to create a Pull Request (visit)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)

