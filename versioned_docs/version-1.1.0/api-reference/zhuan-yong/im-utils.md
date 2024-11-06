---
id: im-utils
title: 建模工具
---
## tree_sys

### 介绍

创建一个系统树，用于构建工业系统的层级结构。该函数可以创建新的系统树或向现有树中添加分支，主要用于表示系统模型的层级关系。

### 参数

- `layer_1` (str | treelib.Tree): 如果是字符串则创建新树并作为根节点名称，如果是Tree对象则在其基础上添加节点
- `model_name` (list, optional): 总系统列表，作为一级节点

### 返回值

- treelib.Tree: 返回构建好的系统树，如果创建失败则返回None

### 示例

```python
from treelib import Tree

# 创建一个生产线系统树
tree = tree_sys(
layer_1="智能制造产线",
model_name=["注塑单元", "装配单元", "检测单元"]
)

# 转换为DataFrame格式查看
df = tree_to_df(tree, index_num=2, columns_num=2)
```

## tree_dimension

### 介绍

创建一个维度子树，支持构建多层级的树形结构，可用于表示工业场景中的各种维度关系。该函数可以创建新树或向现有树中添加分支。

### 参数

- `layer_2` (str): 维度类型，可选值包括person(人员)、machine(机器)、product(产品)、method(方法)、procedure(流程)
- `object_name` (str): 对象名称，作为一级节点
- `layer_3` (list, optional): 子名称列表，作为二级节点
- `prop_name` (list, optional): 特性名称列表，作为三级节点
- `prop_variable` (list, optional): 特性变量名称列表，作为四级节点
- `tree` (treelib.Tree | None, optional): 传入已有树对象则向其添加分支，传入None则创建新树

### 返回值

- treelib.Tree: 返回构建好的维度子树，如果创建失败则返回None

### 示例

```python
from treelib import Tree

# 创建一个机器维度树
tree = tree_dimension(
    layer_2="machine",
    object_name="注塑机",
    layer_3=["温控系统", "注射系统"],
    prop_name=[["温度", "压力"], ["速度", "位置"]],
    prop_variable=[[
        [["实际温度", "目标温度"], ["当前压力", "设定压力"]], 
        [["实时速度", "目标速度"], ["当前位置", "目标位置"]]
    ]]
)

print(tree)
```
## combine_sys_dimension

### 介绍

将一个或多个维度子树合并到系统树的指定节点下，通过节点标签(tag)进行定位。该函数主要用于将不同维度的树结构（如人员、机器、产品等）整合到系统树的特定位置。

### 参数

- `system_tree` (Tree): 需要合并的目标系统树
- `root_ele` (str): 系统树中的目标节点标签
- `sub_trees` (Tree | list[Tree]): 单个子树或子树列表

### 返回值

- None: 直接在原系统树上进行修改，无返回值

### 示例

```python
from treelib import Tree

# 创建系统树
system_tree = tree_sys(
layer_1="生产线",
model_name=["注塑单元", "装配单元"]
)

# 创建设备维度子树
machine_tree = tree_dimension(
layer_2="machine",
object_name="注塑机",
layer_3=["温控系统", "注射系统"],
prop_name=[["温度"], ["压力"]],
prop_variable=[[["120℃"]], [["15MPa"]]]
)

# 将设备树合并到系统树的"注塑单元"节点下
combine_sys_dimension(system_tree, "注塑单元", machine_tree)

# 转换为DataFrame查看结果
df = tree_to_df(system_tree, index_num=3)
```
## model_data_value

### 介绍

向DataFrame中的指定位置插入数据值，主要用于处理树结构转换后的数据框。该函数可以自动寻找空列或在末尾添加新列来存储数据。

### 参数

- `df` (pd.DataFrame): 需要插入数据的DataFrame
- `index_levels` (list): 多级索引的列表
- `variable` (list): 需要插入的数值列表
- `col` (int, optional): 指定插入的列号，默认为-1表示新建列

### 返回值

- None: 直接在原DataFrame上进行修改，无返回值

### 示例

```python
import pandas as pd
import warnings

# 首先创建一个树并转换为DataFrame
tree = create_sample_tree()
df = tree_to_df(tree, index_num=3, columns_num=2)

# 插入数据值
index_levels = ['Root', 'Child1', 'GrandChild1']
values = [42.5]
model_data_value(df, index_levels, values)

# 查看结果
print(df)
```