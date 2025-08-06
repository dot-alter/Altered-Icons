# Contributing to the Project
<small>15-min read</small>

If you're here, we're glad to know that Altered Icons piques your interest. Your help is greatly appreciated as community support is what will give life to the project.

Contributing is simple: you just need to be familiar with the project’s principles, design styles, and metric systems. You can find them here:

+ [Principles →](docs/guide/principles/01_basics.md)
+ [Design →](docs/guide/principles/02_design.md)
+ [Metrics →](docs/guide/principles/03_metrics.md)

If you’re already familiar with these fundamentals, it's crucial to review the **contribution terms**, **practices**, and **recommendations**.

**In this section:**

+ [Conscious participation ↴](#conscious-participation)
+ [Contribution practices ↴](#contribution-practices)
	+ [Publishing requirements](#publishing-requirements)
+ [Labeling system ↴](#labeling-system)
+ [Other clauses ↴](#other-clauses)

---

## Conscious participation

By contributing, you're helping others find the material they've been looking for. That’s why it’s important for your collaboration to align with the project’s goals.


### How can you contribute?

1. **Suggestions** 
	If you think a specific icon is missing, submit your idea by creating a new issue. Updates are reviewed weekly.

3. **New icons**  
	You can create new icons by uploading an SVG file to the appropriate category. Clone the repository and submit your pull request (PR) for weekly review.

4. **Reporting a bug**
	If you have encountered any issues with any icon, please feel free to open an issue.


---

## Contribution practices


### Suggest/Report a new icon

We will take your ideas into account since the product is designed for you. Although you should know that to suggest new icons you must follow some previous steps:

1. **Review**
	Check whether the icon you're suggesting already exists to avoid duplicates. Or you can quickly check out the [Discord community](https://discord.gg/bWW6teuF45) to find direct answers
2. **Open a new Issue**
	For this you must use the corresponding templates for each issue (bug report or icon suggestion)
	+ [🐞 Bug report](./.github/ISSUE_TEMPLATE/bug_report.md)
	+ [🆕 Icon suggestion](./.github/ISSUE_TEMPLATE/new_icon_request.md)
3. **Fill in the fields**
	Add and replace the template content with the requested information. Major modifications to templates are not permitted unless justified by their content


### Publish your icon

If you choose to create your own icon, follow these steps to ensure your work is **valid**, **reviewable**, and **aligned** with the project:

1. **Selection**  
	Choose the category and style of your icon (chubby or flatter) clearly. You can review this in the [basic principles →](docs/guide/principles/01_basics.md).

2. **Review**
	Check whether the icon you want to create already exists to avoid duplicates. 
	+ [chubby](https://github.com/dot-alter/Altered-Icons/tree/master/icons%2Fchubby)
	+ [flatter](https://github.com/dot-alter/Altered-Icons/tree/master/icons%2Fflatter)

3. **Publishing**  
	Submit a PR with your icon in SVG and PNG format (transparent background). Review the [publishing requirements ↴](#publishing-requirements)

4. **Approval**  
	Your PR will be reviewed to ensure it meets the project standards. If it’s rejected and you believe it was a mistake, feel free to open a discussion and we’ll gladly take a second look.


---

### Publishing requirements

#### 1. File location

+ **icons must be stored in**:
	+ SVG: `icons/[style]/[variant]/`
	+ JSON: `icons/[style]/[variant]/`

> Find the naming conventions for the icons below. 


#### 2. Pull Request 

+ PRs, and commits must follow a specific format. Refer to the templates:
	+ [🆕 Add a new icon](./.github/PULL_REQUEST_TEMPLATE/pull_request_icon.md)


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
| `type: suggestion`         | New idea or recommendation           |
| `help-wanted`              | Community assistance needed          |
| `good-first-issue`         | Great for first-time contributors    |

---

## 🧾 Other clauses

### Icon file naming format:
```md
+ [icon-name].svg
+ [icon-name].json
```

**Where:**
+ `[icon-name]` → Icon name in low **kebab-case**


⚠️ **Avoid the following:**
- ❌ Using spaces or capital letters: ` MessageBox.svg`
- ❌ Including unnecessary words or language codes: `Ai-icon-MessageBox-chubby-final.svg`
- ❌ Special characters: `Ai-message@box(cb).svg`

🌻 **Best practices** 
+ Name of the icon by its literal representation rather than by its meaning, use or application
+ Numbers in icons are called by their name (alphabetical). E.g:
	+ [`loop-two.svg`](./icons/chubby/line/loop-two.svg)
+ Prefer derivatives to numeration:
	+ ✅ `door` + `door-open`
	+ ⚠️ `door` + `door-2`
+ Name starting with the most important element:
	+ ✅ `user-happy`, `scan-user`
	+ ⚠️ `happy-user`, `user-scan`


### Language

To ensure consistency and support international collaboration, **all issues, pull requests, commits, and file names (including icons)** must be written in **English**. This includes:

+ Titles and descriptions of *Issues*
+ Messages and headers in *Pull Requests*
+ Commit messages and technical comments
+ SVG/JSON filenames

> This ensures that developers from all over the world can easily understand and collaborate on the project.


### Unapproved Icons

Even if a contribution is not approved, we still value the effort behind it. If it is seen as a reference or source of inspiration, the icon will be moved to the `./drafts/community/[style]/[userName]/[icon-folder]` folder.

In such cases, some publishing rules still apply: both SVG and JSON files must be included, each stored in the appropriate subfolder within `drafts/community/`.

All files in this folder will retain the contributor’s name through the repository's commit history. Icons may be revisited and refined in the future for possible approval.

See this in [unapproved Icons →](drafts/community/README.md)


---

## 🔮 First time contributing on GitHub?

If you’re new to open source, check out these helpful links:

+ [What is a GitHub Issue? (visit)](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
+ [How to contribute on GitHub (visit)](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)
+ [How to create a Pull Request (visit)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)

