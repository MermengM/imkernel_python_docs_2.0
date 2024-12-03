---
id: im-utils-model
title: 建模工具-模型
---
## tree_model

```python
def tree_model(sys_tree, model_name, name, node_list, tree=None) -> treelib.Tree or None:
```

### 介绍

根据系统树创建模型树，将选定的节点按照维度组织成新的树结构。

### 参数

- `sys_tree` (Tree): 系统树实例
- `model_name` (str): 系统树中的模型节点名称
- `name` (str): 模型树节点名称
- `node_list` (list): 需要包含的节点名称列表
- `tree` (Tree, optional): 现有的模型子树，默认为None

### 返回值

- treelib.Tree or None: 返回创建的模型树，如果创建失败则返回None

### 示例

```python
from treelib import Tree

# 创建系统树
sys_tree = Tree()
root = sys_tree.create_node("Root", "root")
model = sys_tree.create_node("Model1", "model1", parent="root")
dim1 = sys_tree.create_node("Dimension1", "dim1", parent="model1")
obj1 = sys_tree.create_node("Object1", "obj1", parent="dim1")
obj2 = sys_tree.create_node("Object2", "obj2", parent="dim1")

# 创建模型树
nodes = ["Object1", "Object2"]
model_tree = tree_model(sys_tree, "Model1", "ModelGroup1", nodes)
print(model_tree)

# Output:
# model
# └── ModelGroup1
#     └── Dimension1
#         ├── Object1
#         │   └── 编号
#         └── Object2
#             └── 编号
```

## update_df_values

```python
def update_df_values(data_df, target_df, data_object, target_object, data_id, target_id):
```

### 介绍

更新DataFrame中的特定值，根据指定的对象类型和ID匹配条件进行数据更新。

### 参数

- `data_df` (DataFrame): 源数据框
- `target_df` (DataFrame): 目标数据框
- `data_object` (str): 源数据框中要匹配的object（如'型线'）
- `target_object` (str): 目标数据框中要匹配的object（如'型线生成_十一参数'）
- `data_id` (str): 源数据的编号（如'l00'）
- `target_id` (str): 目标数据的编号（如'p00'）

### 返回值

- DataFrame: 更新后的目标数据框，保持原始的多级索引结构

### 示例

```python
import pandas as pd

# 创建示例数据框
data_df = pd.DataFrame(...)  # 源数据框
target_df = pd.DataFrame(...) # 目标数据框

# 更新特定值
updated_df = update_df_values(
    data_df=data_df,
    target_df=target_df, 
    data_object='型线',
    target_object='型线生成_十一参数',
    data_id='l00',
    target_id='p00'
)
print(updated_df)
```