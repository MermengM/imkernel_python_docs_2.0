---
id: im-utils
title: 建模工具
---
## tree_sys
```python
def tree_sys(supsys: list, sys: list = None, subsys: list = None, tree=None):
```
### 介绍

创建系统树或向已有树中添加分支节点的函数。这个函数可以创建一个新的树结构，也可以向现有树中添加新的分支。

### 参数

- `supsys` (list): 第一层节点列表，必填参数
- `sys` (list, optional): 第二层节点列表，可选参数
- `subsys` (list, optional): 第三层节点列表，可选参数
- `tree` (Tree/str, optional): 可以是现有的树对象或字符串。如果传入树对象表示向该树中添加分支，如果是字符串则作为根节点名称创建新树，不传入则创建新树

### 返回值

- Tree: 返回创建或修改后的系统树对象

### 示例

```python
from treelib import Tree

# 创建新树
supsys = ["Child1"]
sys = ["Child2"]
subsys = ["Grandchild1"]
tree = tree_sys(supsys, sys, subsys)

# 向现有树添加分支
existing_tree = Tree()
tree = tree_sys(supsys, sys, subsys, existing_tree)
```
## tree_ele
```python
def tree_ele(dimension: str, root_ele: str, ele: str, eleid: str, eleprop: str, elevar: list, tree=None):
```
### 介绍

创建单元树或向已有树中添加分支节点的函数。该函数支持三种维度的树结构：`人员(person)`、`机器(machine)`和`产品(product)`。与系统树类似，它可以创建新树或向现有树添加分支。
### 参数

- `dimension` (str): 维度类型，必须是 'person'、'machine' 或 'product' 之一
- `root_ele` (str): 根节点名称
- `ele` (str): 单元名，作为一级节点
- `eleid` (str): 单元的名称，作为二级节点
- `eleprop` (str): 单元的特性，作为二级节点
- `elevar` (list): 单元的特性变量列表，作为三级节点
- `tree` (Tree, optional): 可选参数，传入现有树对象表示向该树添加分支，不传入则创建新树

### 返回值

- Tree/None: 返回创建或修改后的单元树对象，如果维度参数错误则返回None

### 示例

```python
from treelib import Tree

# 创建新的人员维度树
root_ele = "department"
dimension = "person"
ele = "worker"
eleid = "worker001"
eleprop = "skills"
elevar = ["welding", "assembly"]

tree = tree_ele(dimension, root_ele, ele, eleid, eleprop, elevar)

# 生成的树结构可以转换为DataFrame
df = tree_to_df(tree, index_num=2)
```

生成的树结构可以使用tree_to_df函数转换为DataFrame格式，支持自定义索引层数和列数。如果指定的索引层数超过树的实际层次将会报错。转换后的数据可以更直观地展示树的层级结构。
## combine_sys_ele

### 介绍
这是一个用于将多个单元树合并到系统树指定节点下的函数。它可以将人员、机器和产品三种类型的单元树分别合并到系统树的指定节点下。

### 参数
- `system_tree` (Tree): 需要合并的目标系统树
- `root_ele` (str): 系统树中指定节点的tag标识
- `person_tree` (Tree, optional): 人员单元树，默认为None
- `machine_tree` (Tree, optional): 机器单元树，默认为None
- `product_tree` (Tree, optional): 产品单元树，默认为None

### 返回值
- None: 函数直接修改输入的system_tree，不返回值

### 示例
```python
from treelib import Tree

# 创建系统树
system_tree = Tree()
system_tree.create_node("Root", "root")
system_tree.create_node("Element1", "ele1", parent="root")

# 创建人员树
person_tree = Tree()
person_tree.create_node("Person", "p1")
person_tree.create_node("Worker1", "w1", parent="p1")

# 创建机器树
machine_tree = Tree()
machine_tree.create_node("Machine", "m1")
machine_tree.create_node("Robot1", "r1", parent="m1")

# 合并树
combine_sys_ele(system_tree, "ele1", person_tree=person_tree, machine_tree=machine_tree)

# 结果：系统树ele1节点下会包含person_tree和machine_tree的所有节点
```

## element_data_value
```python
def element_data_value(df, dimension: str, root_ele: str, ele: str, eleid: str, elevar: list):
```
### 介绍

用于向DataFrame中进行维度单元输入操作的函数。该函数主要用于处理具有多级索引的DataFrame,根据指定的维度、根节点和元素信息进行数据填充。

### 参数

- `df` (DataFrame): 需要输入数据的DataFrame对象
- `dimension` (str): 维度标识,可选值包括:`person: 人员维度` `machine: 机器维度` `product: 产品维度`
- `root_ele` (str): 树的根节点名称,对应系统树中的项目名称
- `ele` (str): 单元树中的一级节点,对应DataFrame中的一级索引
- `eleid` (str): 二级节点"名称"的值
- `elevar` (list): 二级节点"特征"对应的三级节点值列表

### 返回值

- None: 函数直接修改传入的DataFrame,无返回值

### 示例

```python
import imkernel
import pandas as pd

# 创建示例DataFrame
df = pd.DataFrame()

# 调用函数填充数据
imkernel.element_data_value(
df=df,
dimension='person',
root_ele='Project1',
ele='Department1',
eleid='John',
elevar=['age:30', 'role:manager']
)

# 结果将在df中添加新的列并填充相应的值
```