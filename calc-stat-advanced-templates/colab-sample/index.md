---
layout: default
title: Google Colab ノートブック連携
---

# Google Colaboratory ノートブック連携サンプル

以下のリンクから Colab ノートブックを開いて、SymPy を使った計算を実行できます：

👉 [平均と分散を求めるノートブック（ダミー）](https://colab.research.google.com/drive/your_colab_id_here)

```python
from sympy import symbols, simplify, Rational
x = symbols('x')
simplify((x**2 + 2*x + 1) / (x + 1))
```

> ※ 上記コードは Colab 上で動作します。
