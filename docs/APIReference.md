---
sidebar_position: 4
sidebar_label: API参考
---
# API参考

## tree_to_df

```python
def tree_to_df(tree, index_num=None, columns_num=2, index_levels=None, columns=None):
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
from treelib import Tree
import pandas as pd

# Create a sample tree
tree = Tree()
tree.create_node("Root", "root")
tree.create_node("Child1", "child1", parent="root")
tree.create_node("Child2", "child2", parent="root")
tree.create_node("Grandchild1", "grandchild1", parent="child1")

# Convert tree to DataFrame
df = tree_to_df(tree, index_num=2, columns_num=1)
print(df)

# Output:
#                      column_1
# level_1 level_2             
# Root    Child1     Grandchild1
#         Child2     Child2
```