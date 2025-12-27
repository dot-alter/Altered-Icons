---
updated: 2025-12-22
version: 2.0
---

# Contributing to Altered Icons
<sup>10 min read</sup>

If you're here, we're glad to know that Altered Icons piques your interest ❤️.

Your help is greatly appreciated; contributions helps others discover icons they need. Please align your effort with the project's values.

> To understand the current direction of the project, see the [Project Roadmap.](ROADMAP.md)

### In this file

+ [Pull Requests](#pull-requests)
	+ [Target the correct branch](#1-target-the-correct-branch)
	+ [Commit message guidelines](#2-commit-message-guidelines)
+ [Issues](#issues)
+ [SVGO Optimization](#svgo-optimization)
+ [Ways to contribute](#ways-to-contribute)
	+ [1. Suggest or report an icon](#1-suggest-or-report-an-icon)
	+ [2. Contribute to an existing style set](#2-contribute-to-an-existing-style-set)
		+ [Requirements](#requeriments)
	+ [3. New style set](#3-new-style-set)
		+ [Contribution terms](#contribution-terms)
		+ [Proposal](#proposal)
		+ [Define your set](#define-your-set)
		+ [Submit your PR](#submit-your-pr)
		+ [Experimental lifecycle](#experimental-lifecycle)
+ [File format guidelines](#file-format-guidelines)
	+ [File naming](#file-naming)
		+ [Best practices](#best-practices)
	+ [JSON format: metadata](#json-format-metadata)
		+ [Active categories](#active-categories)
	+ [SVG formatting standards](#svg-formatting-standards)
+ [Development](#development)
	+ [How to run SVGO](#how-to-run-svgo)
		+ [Optimize a single icon](#optimize-a-single-icon-recommended)
		+ [Using the default configuration](#using-the-default-configuration)
+ [New to open source?](#new-to-open-source)


---

## Pull Requests

Pull Requests are reviewed manually. Please follow these rules carefully:

### 1. Target the correct branch: 

- **Existing style updates**: Target the `master` branch. Includes icon additions, bug fixes, and minor improvements.

- **New style sets**: Target the `lab/community-entries` branch. The proposal must be documented before submission.


### 2. Commit message guidelines

- Clearly describe **what changed** and **why**.
- Split unrelated changes into separate commits.
- Reference issues or discussions when applicable.


--- 

## Issues

- Search for existing issues before opening a new one.
- Use the appropriate issue template.
- Keep descriptions concise and focused.
- Use Discussions instead of Issues for exploratory ideas.


---

## SVGO Optimization

All Altered Icons contributions must be optimized using SVGO. Configurations are organized by style and variant for precise control:

```
tools/
	├── svgo/
	│    ├── lab/
	│	  └── styles/
	│	      └── <style>/
	│            └── <variant>.config.js
	└── default.config.js
```

- Use the style+variant config as the primary source.
- `default.config.js` serves as a fallback.
- Each style guide specifies its applicable configuration.

**Before a Pull Request (PR):**

1. Optimize each SVG with its correct style+variant SVGO config.
2. Preserve visual proportions and stroke integrity.

> PRs with unoptimized or incorrectly optimized SVGs will be rejected.

---

# Ways to contribute

You can contribute either to an existing style or by proposing a new one.

All icon submissions **must include metadata**.

> For [brand-related icons](BRAND_ICONS.md), review the [legal disclaimer](docs/legal/brand-disclaimer.md).

## 1. Suggest or report an icon

Submit missing icon requests, improvements, or bug reports by opening an issue. Issues are reviewed weekly.

1. Select the appropriate issue template.
2. Complete all required fields.
3. Provide references, examples, or use cases when possible.


---

## 2. Contribute to an existing style set

Production-ready icons must go into the `icons/` directory.

Each style has its own design and contribution rules. Review the relevant documentation before submitting icons.

| Style Set          | Design Guide                           | Contributing                                          |
| ------------------ | -------------------------------------- | ----------------------------------------------------- |
| (Ch) Chubby — core | [README](docs/guide/chubby/README.md)  | [CONTRIBUTING.md](docs/guide/chubby/CONTRIBUTING.md)  |
| (Fl) Flatter       | [README](docs/guide/flatter/README.md) | [CONTRIBUTING.md](docs/guide/flatter/CONTRIBUTING.md) |

### Requirements

Your PR must include:

- The **SVG source file**
- The corresponding **JSON metadata file**

Both files must be placed under:

`icons/<style>/<variant>/`


---

## 3. New style set

Creating a new style set is encouraged and supported. All new styles live under the `lab/` directory and require approval.

### Contribution terms

By submitting a new style set or **experimental icons** to AI, you acknowledge and agree to the following terms:

- You confirm that all submitted assets are your **original work**, or that you have the **legal right** to distribute them.
- You agree that your contribution is licensed under the same license used by the Altered Icons project.
- You grant Altered Icons the right to review, modify, adapt, reorganize, or remove your contribution at any time.
- Submission of a style set does not guarantee inclusion in the core library or long-term maintenance.
- Altered Icons maintainers reserve the right to decline contributions that do not align with the project’s quality, consistency, or design principles.

These terms apply to all experimental and community-driven contributions submitted under the `lab/` directory.


### Proposal

Before submitting a PR:

- Open a Discussion on GitHub **or**
- Start a thread on the community Discord


### Define your set

Create the following structure inside `lab/` directory:

```txt
lab/
└── your-style-name/
    ├── guide/
    ├── icons/
    │   └── variant-name/
    │       ├── icon-name.svg
    │       ├── icon-name.json
    ├── manifest.yaml
    └── README.md
```

> **Use kebab-case** for each folders and files name.

- **`guide/` must document:**
	- Design system (grid, proportions, geometry)
	- Optimization strategy
	- Design process

- **`icons/` is the source of truth**: include the SVG and JSON files.

- **`manifest.yaml` must follow this schema:**
	```yaml
	style:
	  style-name: "your-style-name"
	  categories:
	    - "category"
	  variants:
	    - "variant"
	author:
	  name: "author-name"
	  contact: "optional"
	```


- **`README.md`**: introduce your style set and refer to the documentation you created.


### Submit your PR

- **Create a Pull Request targeting:** `lab/community-entries`


### Experimental lifecycle

To keep the project maintainable and focused, all contributions under `lab/` follow a limited lifecycle:

- Experimental style sets and icons are subject to review and iteration.
- If a contribution shows no activity, updates, or review progress for **30 consecutive days**, it may be removed.
- Removal applies to:
	- Unreviewed or inactive style sets
	- Icons without recent discussion, updates, or maintainer engagement
- Removed contributions will not be merged into the `master` branch and may be deleted entirely from the repository.

Contributors are encouraged to actively maintain their experimental submissions and participate in discussions to increase the likelihood of promotion to a stable style.


---

# File format guidelines

## File naming

- Use kebab-case
- Always include metadata

**Correct**:

- icon-name.svg
- icon-name.json

**Avoid**:

- Uppercase or spaces
- Redundant suffixes
- Special characters

### Best practices

- Name icons by what they **are**, not what they **do**
- Use **alphabetical** numbers: `loop-two.svg`
- Prefer **derivatives**: `door`, `door-open` (not `door-2`)
- Order words by importance: `user-happy` (not `happy-user`)


---

## JSON Format: Metadata

Use the following template for the JSON file corresponding to the icon you created:

```json
{
  "$schema": "../../.schemas/icon.schema.json",
  "name": "your-icon-name",
  "aliases": [
    "aliases",
    "..."
  ],
  "tags": [
    "tags",
    "..."
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

> Maintain the file format (tabs, spaces, line breaks)

### Active categories

```txt
- actions, analytics
- buildings, business
- commerce, communication
- design, development, devices, document
- emotions, events
- feedback
- health
- indication, interface
- mathematics, media
- navigation, network
- objects, office
- people
- rating
- security, shopping, status
- technology, time, transportation
```

---

## SVG formatting standards

All SVG files must:

- Be indented with **2 spaces**
- Use **LF line endings**
- Contain only 1 `<svg>` element
- Wrap inner elements with `<g>` **when needed**

> [!NOTE]
> SVG structure may vary by style. Always refer to the [style-specific guide.](docs/guide/README#-style-guides)


---

# Development

To work locally with the project, you must have:

- **Node.js** `>= 20.x`
- **npm** for package management
- Basic knowledge of SVG structure and optimization

After cloning the repository, install dependencies:

```bash
npm install
```

## How to run SVGO

All icons must be optimized before submission. Each style and variant may define its own SVGO configuration.

### Optimize a single icon (recommended)

Use the following command:

```bash
svgo --config=tools/svgo/styles/<style>/<variant>.config.js icons/<style>/<variant>/<icon-name>.svg
```


### Using the default configuration

If a style or variant does not define a custom config, use the fallback:

```bash
svgo --config=tools/svgo/default.config.js <icon-name>.svg
```

> **TIP**: You can run SVGO in a temporary or isolated folder for local testing before submitting.


---

# New to open source?

+ [What is a GitHub Issue? (visit)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)

+ [How to contribute on GitHub (visit)](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

+ [How to create a Pull Request (visit)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)
