---
id: tree
title: 树
---

## tree_to_df

```python
def tree_to_df(tree, index_num=None, columns_num=2, index_levels=None, columns=None) -> pd.DataFrame:
```

### 介绍

将treelib树转换为可自定义索引和列的DataFrame。

### 参数

- `tree` (Tree): treelib中的树结构.
- `index_num` (int, optional): 索引层数，默认为路径最大深度。
- `columns_num` (int, optional): DataFrame列数，默认为2。
- `index_levels` (list, optional): 索引层级名称，默认为 ['level_1', ...]。
- `columns` (list, optional): 索引列名，默认为 ['column_1', ...]。

### 返回值

- pd.DataFrame: 包包含从根节点到叶子节点路径的DataFrame，
  路径以节点TAG表示。
如果index_num超过路径层次或其他参数不匹配则报错。
### 示例

```python
import imkernel
from treelib import Tree
import pandas as pd

# Create a sample tree
tree = Tree()
tree.create_node("Root", "root")
tree.create_node("Child1", "child1", parent="root")
tree.create_node("Child2", "child2", parent="root")
tree.create_node("Grandchild1", "grandchild1", parent="child1")

# Convert tree to DataFrame
df = imkernel.tree_to_df(tree, index_num=2, columns_num=1)
print(df)

# Output:
#                      column_1
# level_1 level_2             
# Root    Child1     Grandchild1
#         Child2     Child2
```
## df_to_tree

```python
def df_to_tree(df) -> treelib.Tree:
```

### 介绍

该函数将包含 MultiIndex 的 DataFrame 转换为树结构，并将行的值作为叶子节点添加到树中。这个函数可以看作是 `tree_to_df` 函数的逆操作，将 DataFrame 格式的数据重新构建为树形结构。

### 参数

- `df` (pd.DataFrame): 包含 MultiIndex 的 DataFrame，其索引层次及对应的行值将被转换为树结构。

### 返回值

- treelib.Tree: 返回由 DataFrame 的 MultiIndex 构建的树结构，并将行的值作为叶节点附加。

### 示例

```python
import imkernel
import pandas as pd
from treelib import Tree

# 创建数据字典
data = {
    ('Root', 'Child1'): ['Grandchild1'],
    ('Root', 'Child2'): ['Grandchild2']
}

# 从字典创建 DataFrame
df = pd.DataFrame.from_dict(data, orient='index', columns=['column_1'])

# 设置索引名称
df.index = pd.MultiIndex.from_tuples(df.index)
df.index.names = ['level_0', 'level_1']

# 将 DataFrame 转换为树结构
tree = imkernel.df_to_tree(df)

# 打印树结构
print(tree)

# 输出:
# Root
# ├── Child1
# │   └── Grandchild1
# └── Child2
# └── Grandchild2
```

## create_tree

### 介绍

构建或合并树结构的工具函数。该函数可以创建新树或在现有树的基础上添加/合并节点，支持最多三层的树结构构建。

### 参数

- `supname` (str): 根节点名称，作为树的一级节点
- `name` (list of list of str): 二级节点的名称列表，每个子列表包含属于同一类的节点名称
- `subname` (list of list of str, optional): 三级节点的名称列表，对应每个name节点的子节点，默认为None
- `origin` (Tree, optional): 用于合并的现有树对象，默认为None

### 返回值

- Tree: 返回构建或合并后的树结构对象。如果origin为None或不包含supname则返回新树，否则返回修改后的origin树。

### 示例

```python
import imkernel
from treelib import Tree

# 创建新树
name = [["Child1"], ["Child2"]]
subname = [["Grandchild1"], []]
tree = imkernel.create_tree("Root", name, subname)
print(tree)
# 输出示例
#  Root
#  ├── Child1
#  │   └── Grandchild1
#  └── Child2

# 合并到现有树
new_name = [["Child3"]]
new_subname = [["Grandchild2"]]
merged_tree = imkernel.create_tree("Root", new_name, new_subname, origin=tree)
print(merged_tree)
#  输出示例
#  Root
#  ├── Child1
#  │   └── Grandchild1
#  ├── Child2
#  └── Child3
#      └── Grandchild2
```
