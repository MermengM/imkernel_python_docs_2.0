---
id: dao
title: 数据库对接
---

## save_system

```python
def save_system(tree: Tree, datadf: pd.DataFrame, system_name: str = None, show_info: bool = False):
```

### 介绍

将DataFrame数据保存到树结构中，并将树结构及其数据保存到数据库系统中。

### 参数

- `tree` (Tree): treelib.Tree对象，表示要保存的树结构
- `datadf` (pd.DataFrame): 包含多重索引的DataFrame数据
- `system_name` (str, optional): 系统名称，默认为当前时间戳
- `show_info` (bool, optional): 是否显示处理信息，默认为False

### 返回值

无返回值，函数执行结果通过打印信息展示。


### 示例

```python
from treelib import Tree
import pandas as pd

# 创建示例树和数据
tree = Tree()
tree.create_node("Root", "root")
df = pd.DataFrame(...)

# 保存系统
save_system(tree, df, "test_system", show_info=True)

# 输出示例:
# 正在处理第 1 行数据... ['Root', 'Child1']
# 保存系统模型结构成功！共添加 5 个节点
# 保存系统数据成功！共添加 10 条数据
```

## save_model

```python
def save_model(tree, df, save_name):
```

### 介绍

保存模型到数据库。
该函数首先从数据库中获取所有树结构，并删除它们。然后将模型树结构转换为列表，并将列表中的第一个节点的名称追加保存名称。最后，通过API请求将模型列表保存到数据库中。

### 参数

- `tree`: 模型树结构。
- `df`: 模型数据。
- `save_name`: 模型保存名称。

### 返回值

- response_json: 保存模型成功后返回的响应数据。

### 描述


## add_node

```python
def add_node(tree, model_name, layer_2: str, object_name: str = None, layer_3=None, prop_name=None, prop_variable=None, show_info=False):
```

### 介绍

向树中添加节点，支持多层级节点的创建。该函数会检查每一层节点是否存在,不存在则创建新节点。

### 参数

- `tree` (Tree): 需要添加节点的树结构
- `model_name` (str): 模型名称，用于定位根节点
- `layer_2` (str): 第二层节点名称
- `object_name` (str, optional): 对象名称，默认为None
- `layer_3` (str, optional): 第三层节点名称，默认为None
- `prop_name` (str, optional): 属性名称，默认为None
- `prop_variable` (str, optional): 属性变量名称，默认为None
- `show_info` (bool, optional): 是否显示节点创建信息，默认为False

### 返回值

- Tree: 返回添加节点后的树结构

### 示例

```python
from treelib import Tree

# 创建示例树
tree = Tree()
tree.create_node("Model1", "model1", data={'node_type': 'model_name', 'snow_id': 1})

# 添加节点
tree = add_node(
    tree=tree,
    model_name="Model1",
    layer_2="Dimension1",
    object_name="Object1",
    layer_3="Layer3",
    prop_name="Property1",
    prop_variable="Variable1",
    show_info=True
)

# 输出树结构
tree.show()

# Output:
# Model1
# └── Dimension1
#     └── Object1
#         └── Layer3
#             └── Property1
#                 └── Variable1
```



## delete_node

```python
def delete_node(tree, model_name, layer_2: str, object_name: str = None, layer_3=None, prop_name=None, prop_variable=None, show_info=False):
```

### 介绍

删除树中指定路径的节点及其子树。支持从model_name到prop_variable的六个层级的节点删除。删除时会先调用API删除后端数据，成功后再从树中移除节点。

### 参数

- `tree` (Tree): 要操作的树结构
- `model_name` (str): 模型名称，第一层级节点
- `layer_2` (str): 第二层级节点名称
- `object_name` (str, optional): 对象名称，第三层级节点
- `layer_3` (str, optional): 第四层级节点名称
- `prop_name` (str, optional): 属性名称，第五层级节点
- `prop_variable` (str, optional): 属性变量，第六层级节点
- `show_info` (bool, optional): 是否显示删除信息，默认False

### 返回值

- bool: 删除成功返回True，节点不存在返回None，删除失败抛出异常

### 示例

```python
# 删除到第二层级
delete_node(tree, "model1", "layer2", show_info=True)

# 删除到第四层级
delete_node(tree, "model1", "layer2", "object1", "layer3", show_info=True)

# 删除完整路径
delete_node(tree, "model1", "layer2", "object1", "layer3", "prop1", "var1", show_info=True)
```
