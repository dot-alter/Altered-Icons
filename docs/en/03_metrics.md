# Construction Metrics  
<sub>3-minute read</sub>

**In this section**
+ [Size ↴](#-size)
+ [Stroke ↴](#-stroke)
+ [Corners ↴](#-corners)

---

## 〰️ Stroke

Stroke thickness is essential to maintain visual consistency and legibility at different sizes. A stroke width of `1.5dp` is applied to both curves and ends, aligned **inside** the shape.

A unique feature of Altered Icons is the **simulated independent stroke**. Instead of using a regular `1.5dp` stroke, we construct a fully custom shape that mimics the path of a line while adding visual weight and volume to it.

![Al-plus-icon comparison](../../.github/assets/Al-plus-icon-comparison.webp)

This technique is only used when the regular stroke does not visually match the icon style or breaks the overall composition.

---

## ↪️ Corners

Corner measurements are based on the `24×24dp` grid. For square, rectangular, or triangular shapes, a corner radius of `2dp` is applied.

![corner-shape-grid](../../.github/assets/corner-rectangle-grid.jpg)

For circular shapes (which are not always perfect circles), a radius of `4dp` is used at the corners, and the curves are adjusted to form the desired circle—following the base circle reference from the grid.

![circle-corner-grid](../../.github/assets/circle-corner-grid.jpg)

When it comes to stroke volume, the outer edge extends up to `1dp`.

![shape-volume-grid](../../.github/assets/shape-volume-grid.jpg)

---

## 📍 Related links

**Previous**
+ [Icon design →](./02_design.md)
+ [Collection principles →](./01_principles.md)

**Others**
+ [How to contribute →](./CONTRIBUTING.md)