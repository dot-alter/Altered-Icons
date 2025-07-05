# Métricas de construcción 
<sub>Lectura de 3 minutos</sub>

**En esta sección**
+ [Stroke ↴](#-stroke)
+ [Bordes ↴](#-bordes)
+ [Size ↴](#-relleno)

---

## 〰️ Stroke

El trazo es esencial para mantener la legibilidad y coherencia visual en distintos tamaños. Se utiliza un grosor de línea de `1.5dp`, aplicado tanto a curvas como a extremos, siempre con alineación al **interior** de la figura.

Una de las características únicas de Altered Icons es la **simulación de trazo independiente**. En lugar de una simple línea de `1.5dp`, se construye una forma completa que replica visualmente ese trazo, pero con volumen propio.

![Al-plus-icon comparison](../../.github/assets/Al-plus-icon-comparison.webp)
<sub>Ai-plus-add</sub>

Este método se emplea solo cuando el trazo tradicional no logra integrarse con el estilo visual del icono o rompe la armonía general del diseño.

---

## ↪️ Bordes

Para definir los bordes, se toma como base la cuadrícula de `24×24dp`. En formas cuadradas, rectangulares y triangulares, se aplica un radio de borde de `2dp` en las esquinas.

![corner-shape-grid](../../.github/assets/corner-rectangle-grid.jpg)

En el caso de las formas circulares (que no siempre son esferas perfectas), se usa un radio de `4dp` en las esquinas y se ajustan los nodos hasta formar el contorno circular deseado, siguiendo la guía de la forma base circular en la cuadrícula.

![circle-corner-grid](../../.github/assets/circle-corner-grid.jpg)

Por su parte, el volumen en los bordes se extiende hasta `1dp` de grosor en la línea.

![shape-volume-grid](../../.github/assets/shape-volume-grid.jpg)

---

## 📍 Enlaces relacionados 

**Anteriores**
+ [Diseño de los iconos →](./02_diseño.md)
+ [Principios de la colección →](./01_principios.md)

**Otros**
+ [Cómo contribuir →](./CONTRIBUIR.md)