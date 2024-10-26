---
id: three-dimension
title: 三维显示
---
## show_model

### 介绍

显示3D模型的函数,支持stl和obj格式文件的可视化,提供丰富的显示选项来自定义模型的渲染效果。

### 参数

- `file_path` (str): 3D模型文件的路径,仅支持.stl和.obj格式
- `color` (str, optional): 模型的颜色,默认为None
- `opacity` (float, optional): 透明度,范围0-1,默认为1.0
- `show_edges` (bool, optional): 是否显示边缘,默认为False
- `point_size` (float, optional): 点的大小(style='points'时生效),默认为5.0
- `line_width` (float, optional): 线条宽度,默认为1.0
- `lighting` (bool, optional): 是否启用光照,默认为True
- `background_color` (str, optional): 背景颜色,默认为'white'
- `window_size` (tuple, optional): 窗口大小,默认为(1024, 768)
- `camera_position` (str, optional): 相机视角,可选'xy','xz','yz','iso',默认为'iso'
- `zoom_factor` (float, optional): 缩放因子,默认为1.0
- `style` (str, optional): 渲染样式,可选'surface','wireframe','points',默认为'surface'

### 返回值

- None

### 示例

```python
# 基本用法与兼容的格式
show_model("model.stl")
show_model("model.obj")

# 显示橙色模型
show_model("model.stl", color="orange")

# 显示自定义rgb模型
show_model("model.stl", color=[255,255,255]")

# 显示带边缘的模型
show_model("model.stl", show_edges=True)

# 显示橙色带边缘的模型
show_model("model.stl", color="orange", show_edges=True)
```