---
layout: default
title: 放物線の教材
---

# 放物線の視覚化と数式の学習

---

## 📈 1. 放物線のスケッチ

<div id="sketch-holder"></div>

---

## 🖼 2. 放物線のグラフ画像

![グラフの例](../assets/img/graph-example.png)

---

## 🧮 3. 数学的な説明（MathJax）

放物線の基本形は以下のように表されます：

$$
y = ax^2 + bx + c
$$

特に、$a = 1, b = 0, c = 0$ のとき、  
$$
y = x^2
$$  
となり、頂点は原点 $(0, 0)$ にあります。

---

<script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
<script src="assets/js/parabola-sketch.js"></script>

<!-- MathJax CDN -->
<script>
  MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
    svg: { fontCache: 'global' }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
