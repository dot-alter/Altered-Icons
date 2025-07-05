# Icon Design  
<sub>5-minute read</sub>

Learn how the icons in Altered Icons are structured—from the base layout to proportions, grid systems, and visual morphology.

**In this section**  
+ [Layout ↴](#-layout)  
+ [Grid ↴](#-grid)  
+ [Geometry & Morphology ↴](#-geometry--morphology)

---

## 🔧 Layout

The icon family is built following standard design practices, using a **geometric layout** that defines the proportions and visual style of each icon. This layout adapts to different shape types (square, tall, wide, or circular) while staying within a shared grid system.

![IMAGE: Square, horizontal rectangle, vertical rectangle](../../.github/assets/basic-shapes.webp)

---

## 📈 Grid

The grid is based on a `24×24dp` container, including an internal `2dp` padding that defines the boundaries and prevents visual overflow. This results in a **safe area** of `20dp` where key shapes are placed.

![Grid 24×24dp](../../.github/assets/Ai-grid-24x24.png)  
<sub>Base container.</sub>  
24×24px is the standard icon size across many design environments.

![Grid 24×24dp with 2dp padding](../../.github/assets/grid-2dp-padd.jpg)  
<sub>Internal `2dp` padding.</sub>  

This padding ensures that icons don't visually collide when placed near other UI elements. It helps maintain consistent alignment, spacing, and system-wide visual harmony.

![Grid 24×24dp with 20×20dp safe zone](../../.github/assets/grid-secure-zone.jpg)  
<sub>Safe area of `20×20dp`.</sub>  
The geometric structures that define the icons are constructed within this safe zone.

From this grid, we build the specific layout used in Altered Icons—but we always begin with key shapes.

![Key-shapes - basic](../../.github/assets/key-lines-base.webp)  
<small>Basic key shapes.</small>

These base shapes are altered to match the "Altered" aesthetic of the icon set, giving each icon more visual expression while preserving the structure of the grid.

![Key-shapes - altered](../../.github/assets/Ai-key-shapes-base.jpg)  
<sub>Altered key shapes.</sub>

![Key-shapes - altered, square](../../.github/assets/Ai-key-shapes-square.jpg)  
<sub>Square shape (`20×20dp`).</sub>  
Use for geometrically balanced icons.

![Key-shapes - altered, vertical rectangle](../../.github/assets/Ai-key-shapes-regtangle-height.jpg)  
<sub>Vertical rectangular shape.</sub>  
Use for icons with taller proportions.

![Key-shapes - altered, horizontal rectangle](../../.github/assets/Ai-key-shapes-regtangle-stretch.jpg)  
<sub>Horizontal rectangular shape.</sub>  
Use for wider icons.

![Key-shapes - altered, circle shape](../../.github/assets/Ai-key-shapes-circle.jpg)  
<small>Base circular shape.</small>  
Use for circular icons.

### Adapted key shapes

**Key shapes** are also adapted for specific use cases. If an icon needs to follow a more particular structure, an adjusted layout is used—still based on the core shapes shown above. For example:

![Key-shapes - triangle](../../.github/assets/Ai-key-shapes-triangle-base.jpg)  
<sub>Triangular key shape.</sub>  
For icons that are strictly triangular.

![Key-shapes - circle](../../.github/assets/Ai-key-shapes-circle-base.jpg)  
<sub>Circular key shape.</sub>  
For icons with a tendency toward round design.

---

## 🛑 Geometry & Morphology

At their core, Altered Icons are built using three basic forms: **circle**, **square**, and **rectangle** (horizontal or vertical). Each follows the characteristic style of the icon set—featuring softly rounded or curved lines instead of perfectly straight ones.

![Altered Shapes](../../.github/assets/altered-basic-shapes.webp)  
<sub>Genetically altered base shapes.</sub>

While these basic forms provide the foundation, each icon has the freedom to adjust according to stylistic needs. This flexibility doesn't compromise consistency; every icon must adhere—at least partially—to the **base forms** or **key shapes**.

![Altered-icon, bald-man-layout](../../.github/assets/Ai-key-shapes-bald-icon.jpg)  
(bald man icon)

![Altered-icon, message-box-layout](../../.github/assets/Ai-key-shapes-messagebox.webp)  
(message box icon)

However, it’s important not to confuse visual freedom with a lack of structure. Visual flexibility doesn’t mean reduced consistency. That consistency is grounded in a defined set of design metrics.

This means each icon aligns with a specific visual parameter. For instance, if an icon is taller than it is wide, there's already a key shape or base rule that supports that proportion.

---

## 📍 Related links

**Previous**  
+ [Material Principles →](./01_principles.md)

**Next**  
+ **[Metrics →](./03_metrics.md)**