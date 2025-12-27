# Changelog

> **Versions**:
> - **chore**: `alteted-icons`
> - **type**: `<style>-<variant>`


---

## Altered Icons
+ ### v0.15.0
	<sup>`Dec. 27, 2025` `minor`</sup>
	
	**feat**
	- Added first batch of Flatter icon set (350+ icons) as a first-class style.
	- Introduced style-scoped catalog generation (`docs/catalog/<style>/`).
	- Implemented shared SVGO default configuration compatible with all styles.
	- Extended metadata validation to support multiple styles consistently.
	
	**tooling**
	- Refactored SVGO tooling into style-based structure under `tools/svgo/`.
	- Added style-specific SVGO configs with a safe global fallback.
	- Updated catalog generator to resolve paths and output per style.
	
	**docs**
	- Refactored documentation into per-style guides under `docs/guide/<style>/`.
	- Added optimization and contribution guidance scoped by style.
	- Updated root CONTRIBUTING to align with the new global guidelines.
	- Updated root README to reflect multi-style architecture.
	- Restructure root ROADMAP to strengthen phased scalability
	
	**validation**
	- Enforced `SVG` ↔ `JSON` metadata pairing across all styles.
	
	**chore**
	- Updated `package.json` for v0.15.0 release.
	- Updated `versions.json` to reflect core and style versions.
	- Regenerated all catalogs and icon indexes for the release.
	- Cleaned up legacy SVGO configs and deprecated tooling paths.
	
	[Release](https://github.com/dot-alter/Altered-Icons/releases/tag/altered-icons-v0.15.0)
	


---

## Chubby Line
+ ### v0.14.0
	<sub>`Nov. 09, 2025` `minor`</sub>
	
	**Feat**
	- +80 icons added for chubby-line
	- New milestone: 350 icons for `chubby/line`
	- Update catalog in `./docs/catalog/`
	- Update icons index in `./icons/index.json`
	
	[Release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/chubby-line-v0.14.0)
	


---

## Altered Icons
+ ### v0.13.1
	<sub>`Oct. 18, 2025` `hotfix`</sub>
	
	**Fixed**
	- Update the path of the last 100 icons (added `XMLNS` property) — prevent visibility issues.
	- Regenerated catalog for `chubby-line` style.
	- Regenerated `index.json` for core icons.
	- Update tooling.
	- Update `core.version` to `0.13.1` (no new icons added)
	
	[Release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/altered-icons-v0.13.1)


+ ### v0.13.0
	<sub>`Oct. 18, 2025` `minor`</sub>
	
	**Update Docs**
	- Create guidelines for interpreted brand icons that are inspired by logos or third-party trademarks.
	- Added `BRAND_ICONS.md` and `brand-disclaimer.md` documentation.
	
	**New icons**
	- Added 100 new variated icons for `chubby/line` style.
	- Introduction to icons of technologies such as `html5`, `css3`, `C#` and `C++`.
	
	[Release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/altered-icons-v0.13.0)


---

## Chubby Line

+ ### v0.12.0
	<sub>`Aug. 20, 2025` `minor`</sub>
	
	**New icons**
	- +35 SVG icons added to chubby/line
	- Added metadata
	- 170 total icons for chubby-line style
	- Update internal validations
	
	[Release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/chubby-line-v0.12.0)


+ ### v0.11.0
	<sub>`Aug.  16, 2025` `minor`</sub>
	
	**New icons**
	- +35 SVG files added to chubby/line
	- Added metadata
	- 135 total icons for chubby-line style
	
	[Release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/chubby-line-v0.11.0)


---

## Altered Icons

+ ### v0.10.0 – Initial Stable Release
	<sub>`Aug. 04, 2025` `stable`</sub>
	
	**Updated stable structure**
	- Icons separated by styles
	- Applying formal metadata to all icons
	- Optimization for future bindings (framework integrations)
	
	**Key milestone: 100 icons added**
	- Abstracting categories into a single icon folder (`icons/<style>/<variant>/icon.svg`)
		*Before: `icons/<style>/<category>/svg|png/icon.svg`*
	- Optimization to allow multiple variants/styles in the future 
	
	[Release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/altered-icons-v0.10.0)


---

## Chubby Icons

- ### v0.1.0-beta.1
	<sub>`Jul. 08, 2025` `rc`</sub>
	
	**New set of chubby icons has been added across different categories**
	- Actions & Activities (+9)
	- Business & Education (+1)
	- UI (+10)
	
	[release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/chubby-v0.1.0-beta.1)



- ### v-0.1.0-alpha - First Look
	<sub>`Jul. 05, 2025`</sub>
	
	Discover Altered-icons material.
	
	[release](https://github.com/dot-alter/Altered-Icons-Pack/releases/tag/v-a.0.0)