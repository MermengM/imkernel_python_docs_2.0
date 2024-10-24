---
id: three-dimension
title: 三维显示
---
## show_model

### 介绍

一个用于显示CAD模型的函数。该函数可以在Jupyter环境中或普通Python环境中显示CAD模型，支持自定义颜色和边缘显示。
> 目前支持.stl .obj 格式，step格式需要使用occ附加包进行解析
### 参数

- `file_path` (str): CAD模型文件的路径
- `color` (str, optional): 模型的颜色，默认为None
- `show_edges` (bool, optional): 是否显示边缘，默认为False

### 返回值

- None: 该函数没有返回值，直接显示3D模型

### 示例

```python
# 基本用法
show_model("model.stl")

# 显示橙色模型
show_model("model.stl", color="orange")

# 显示自定义rgb模型
show_model("model.stl", color=[255,255,255]")

# 显示带边缘的模型
show_model("model.stl", show_edges=True)

# 显示橙色带边缘的模型
show_model("model.stl", color="orange", show_edges=True)
```