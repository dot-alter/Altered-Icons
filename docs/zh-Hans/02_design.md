# 图标设计  
<sub>阅读时间：5 分钟</sub>

了解 Altered Icons 图标的结构，从基础布局、比例设定到网格系统和图形形态。

**本节内容**  
+ [布局 ↴](#-布局)  
+ [网格系统 ↴](#-网格系统)  
+ [几何与形态 ↴](#-几何与形态)

---

## 🔧 布局

图标的构建遵循标准设计实践，使用**几何布局**来定义每个图标的比例和视觉风格。该布局会根据图形类型（正方形、高型、宽型或圆形）进行调整，同时保持在统一的网格系统中。

![图像：正方形、横向矩形、纵向矩形](../../.github/assets/basic-shapes.webp)

---

## 📈 网格系统

网格基于一个 `24×24dp` 的容器，并包含 `2dp` 的内边距，用于限定图标内容区域，防止图形溢出。最终形成一个**安全区域**，大小为 `20dp`，用于放置主要图形元素。

![24×24dp 网格](../../.github/assets/Ai-grid-24x24.png)  
<sub>基础容器。</sub>  
24×24px 是多个设计环境中图标的标准尺寸。

![24×24dp 网格，含 2dp 内边距](../../.github/assets/grid-2dp-padd.jpg)  
<sub>内边距：`2dp`。</sub>  

内边距确保图标在与其他界面元素组合使用时不会产生视觉冲突，有助于保持系统整体的对齐、间距和视觉一致性。

![24×24dp 网格，含 20×20dp 安全区](../../.github/assets/grid-secure-zone.jpg)  
<sub>安全区域：`20×20dp`。</sub>  
构成图标的几何结构均在该区域内创建。

从网格出发，我们构建出 Altered Icons 独特的布局风格。但首先，我们从关键形状开始设计。

![关键形状 - 基础](../../.github/assets/key-lines-base.webp)  
<small>基础关键形状。</small>

这些基础形状经过修改，以适配 Altered 风格，使图标在不破坏网格结构的前提下拥有更强的视觉表达力。

![关键形状 - 改造后](../../.github/assets/Ai-key-shapes-base.jpg)  
<sub>改造后的关键形状。</sub>

![关键形状 - 正方形](../../.github/assets/Ai-key-shapes-square.jpg)  
<sub>正方形 `20×20dp`。</sub>  
用于结构均衡的图标。

![关键形状 - 纵向矩形](../../.github/assets/Ai-key-shapes-regtangle-height.jpg)  
<sub>纵向矩形。</sub>  
适用于高度优先的图标设计。

![关键形状 - 横向矩形](../../.github/assets/Ai-key-shapes-regtangle-stretch.jpg)  
<sub>横向矩形。</sub>  
适用于宽度优先的图标设计。

![关键形状 - 圆形](../../.github/assets/Ai-key-shapes-circle.jpg)  
<small>基础圆形。</small>  
适用于圆形图标。

### 自适应关键形状

我们还为不同应用场景设置了额外的**关键形状**。当图标需使用特定几何构造时，可采用自适应布局，但仍基于上述主形状。例如：

![关键形状 - 三角形](../../.github/assets/Ai-key-shapes-triangle-base.jpg)  
<sub>三角形关键形状。</sub>  
用于专门的三角类图标。

![关键形状 - 圆形](../../.github/assets/Ai-key-shapes-circle-base.jpg)  
<sub>圆形关键形状。</sub>  
适用于带有圆形倾向的图标。

---

## 🛑 几何与形态

Altered Icons 的核心是三种基本形状：**圆形**、**正方形**和**矩形**（横向或纵向）。它们遵循图标集特有的风格——线条柔和，略带弧度，而非完全直线。

![Altered 基础形状](../../.github/assets/altered-basic-shapes.webp)  
<sub>基因改造风格的基础形状。</sub>

尽管这些形状是图标设计的基础，每个图标在视觉风格上都有一定的自由度。这种灵活性不会破坏一致性，因为所有图标仍需在一定程度上遵循**基础形状**或**关键形状**。

![图标示例：秃头人物布局](../../.github/assets/Ai-key-shapes-bald-icon.jpg)  
（秃头人物图标）

![图标示例：消息框布局](../../.github/assets/Ai-key-shapes-messagebox.webp)  
（消息框图标）

需要强调的是，**图形自由不等于风格松散**。一致性源于一套专门制定的设计度量标准。

也就是说，每个图标都需明确自身的构造参数。例如，当某图标设计得更高而非更宽时，已有相应的关键形状或基础规范作为指导。

---

## 📍 相关链接

**上一节**  
+ [设计原则 →](./01_principles.md)

**下一节**  
+ **[设计度量标准 →](./03_metrics.md)**