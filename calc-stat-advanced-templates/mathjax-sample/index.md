---
layout: default
title: MathJax 数式表示
---

# MathJax を使った数式表示サンプル

このページでは、数式を美しく表示します。

インライン表示例： $y = x^2 + 3x + 2$

ブロック表示例：

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

<!-- MathJax CDN -->
<script>
  MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
    svg: { fontCache: 'global' }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
