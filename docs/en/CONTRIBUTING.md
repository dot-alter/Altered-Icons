# Contributing to the Project
<small>8min read</small>

**Do you enjoy building your own environment 💫?** We value creative minds.

Contributing is simple: you just need to be familiar with the project’s principles, design styles, and metric systems. You can find them here:

+ [Principles →](./01_principles.md)
+ [Design →](./02_design.md)
+ [Metrics →](./03_metrics.md)

If you’re already familiar with these fundamentals, it's crucial to review the **contribution terms**, **practices**, and **recommendations**.

**In this section:**

+ [Conscious participation ↴](#-conscious-participation)
+ [Contribution practices ↴](#-contribution-practices)
+ [Recommendations ↴](#-recommendations)
+ [Labeling system ↴](#-labeling-system)
+ [Other clauses ↴](#-other-clauses)

---

## 🙇‍♂️ Conscious participation

By contributing, you're helping others find the material they've been looking for. That’s why it’s important for your collaboration to align with the project’s goals.

### How can you contribute?

1. **New icons**  
   You can create new icons by uploading an SVG file to the appropriate category. Clone the repository and submit your pull request (PR) for weekly review.

2. **Suggestions**  
   If you think a specific icon is missing, submit your idea by creating a new issue. Updates are reviewed weekly.

3. **Translations**  
   Inclusion is essential. If a language is missing, support us by contributing your own translation of the content.

Before you begin, we recommend reviewing the sections below.

---

## ⛳ Contribution practices

If you choose to create your own icon, follow these steps to ensure your work is **valid**, **reviewable**, and **aligned** with the project:

1. ### Selection  
   Choose the topic and style of your icon (chubby or flattered) clearly. You can review this in the [basic principles →](./01_principles.md).

2. ### Review  
   Check whether the icon you want to create already exists to avoid duplicates. See the [category list →](../../icons/README.md).

3. ### Guides  
   If the icon doesn’t exist yet, you may begin designing. Use the grid and base shape guides. 
	+ [Key shapes →](../../icons/material/Ai-key-shapes-cb.png)
	+ [Key shapes: circle →](../../icons/material/Ai-key-shapes-circle-cb.png)
	+ [Key shapes: triangle →](../../icons/material/Ai-key-shapes-triangle-cb.png)


5. ### Publishing  
   Submit a PR with your icon in SVG and PNG format (transparent background). Review the [publishing requirements ↴](#publishing-requirements)

6. ### Approval  
   Your PR will be reviewed to ensure it meets the project standards. If it’s rejected and you believe it was a mistake, feel free to open a discussion and we’ll gladly take a second look.

### Publishing requirements

+ **Chubby-style** icons must be stored in:
  - SVG: `./icons/chubby/svg/<category>`
  - PNG: `./icons/chubby/png/<category>`

+ **Flattered-style** icons must be stored in:
  - SVG: `./icons/flattered/svg/<category>`
  - PNG: `./icons/flattered/png/<category>`

+ Each icon must be added to the icon index in alphabetical order under the appropriate type and category. [View index →](../../icons/README.md)

+ Issues, PRs, and commits must follow a specific format. Refer to the templates:


	+ [🆕 Add a new icon](../../.github/PULL_REQUEST_TEMPLATE/pull_request_icon.md)
	+ [🔀 Request an Icon](../../.github/ISSUE_TEMPLATE/new_icon_request.md)
	+ [🐞 Bug report](../../.github/ISSUE_TEMPLATE/bug_report.md)
	+ [🆎 Translation request](../../.github/PULL_REQUEST_TEMPLATE/translation_request)


---

## 📋 Recommendations

To achieve the best results:

1. **Sketching is key**  
   Draw your ideas before digitizing them. This is especially helpful with the chubby style.

2. **Follow the guides**  
   Use the provided grids and base shapes to stay consistent with the project’s style.

3. **Ask questions**  
   If you have any doubts, open a GitHub discussion or submit an issue.

---

## 🏷️ Labeling system

To keep things organized and easy to follow, we use the following labels in PRs and Issues:

| Label                      | Description                          |
|----------------------------|--------------------------------------|
| `status: pending`          | PR waiting for review                |
| `status: approved`         | PR approved and ready to merge       |
| `status: changes requested`| Changes requested from contributor   |
| `status: rejected`         | PR or Issue rejected                 |
| `type: icon`               | New icon contribution                |
| `type: translation`        | Translation contribution             |
| `type: suggestion`         | New idea or recommendation           |
| `help-wanted`              | Community assistance needed          |
| `good-first-issue`         | Great for first-time contributors    |

---

## 🧾 Other clauses

### Icon file naming format:
```md
ai-[icon-name]-[style]
```

**Where:**

+ `ai` → Fixed prefix for the project (Altered Icons)
+ `[icon-name]` → Icon name in **kebab-case**
+ `[style]` → Style suffix:
  + `cb` for **chubby**
  + `ft` for **flattered**

**Examples:**

+ Message icon (Chubby): `ai-message-box-cb.svg`  
+ Settings icon (Flattered): `ai-bald-man-ft.svg`  
+ User icon (Chubby): `ai-user-profile-cb.png`

⚠️ **Avoid the following:**

- ❌ Using spaces or capital letters: `Ai MessageBox CB.svg`
- ❌ Including unnecessary words or language codes: `Ai-icon-MessageBox-chubby-final.svg`
- ❌ Special characters: `Ai-message@box(cb).svg`

### Language

To ensure consistency and support international collaboration, **all issues, pull requests, commits, and file names (including icons)** must be written in **English**. This includes:

+ Titles and descriptions of *Issues*
+ Messages and headers in *Pull Requests*
+ Commit messages and technical comments
+ SVG/PNG filenames

> This ensures that developers from all over the world can easily understand and collaborate on the project.


### Unapproved Icons

Even if a contribution is not approved, we still value the effort behind it. If it is seen as a reference or source of inspiration, the icon will be moved to the `./icons/community-drafts/` folder.

In such cases, some publishing rules still apply: both SVG and PNG versions must be included, each stored in the appropriate subfolder within `community-drafts`.

All files in this folder will retain the contributor’s name through the repository's commit history. Icons may be revisited and refined in the future for possible approval.

See this in [unapproved Icons →](../../icons/community-drafts/README.md)


---

## 🔮 First time contributing on GitHub?

If you’re new to open source, check out these helpful links:

+ [What is a GitHub Issue? (visit)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
+ [How to contribute on GitHub (visit)](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)
+ [How to create a Pull Request (visit)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)
