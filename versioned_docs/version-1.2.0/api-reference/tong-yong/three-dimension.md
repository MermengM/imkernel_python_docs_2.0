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

## show_points_from_files

### 介绍
这是一个用于从多个文件中读取并显示点位数据的函数。该函数支持单个文件路径或文件路径列表作为输入，并可以为点位数据指定不同的颜色。函数会初始化 Jupyter 环境并使用 PyVista 进行可视化。

### 参数
- `file_paths` (list 或 str): 
  - 文件路径列表或单个文件路径
  - 支持多个文件路径的列表输入或单个文件路径字符串输入

- `color` (list 或 str, optional): 
  - 点位显示的颜色
  - 可以是颜色列表(对应每个文件的点位颜色)
  - 可以是单个颜色值(所有点位使用相同颜色)
  - 如果为 None 则使用默认颜色

### 返回值
- None: 函数直接显示可视化结果，无返回值

### 示例
```python
# 显示单个文件的点位
show_points_from_files("path/to/points.txt", color="red")

# 显示多个文件的点位，使用不同颜色
file_paths = ["points1.txt", "points2.txt", "points3.txt"]
colors = ["red", "blue", "green"]
show_points_from_files(file_paths, color=colors)

# 显示多个文件的点位，使用相同颜色
show_points_from_files(file_paths, color="blue")

# 显示多个文件的点位，使用默认颜色
show_points_from_files(file_paths)
```


