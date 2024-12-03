---

sidebar_position: 4
sidebar_label: API Reference

---

# API Reference

## tree_to_df

```python
def tree_to_df(tree, index_num=None, columns_num=2, index_levels=None, columns=None):
```

### Introduction

Convert a treelib tree into a DataFrame with customizable indices and columns.

### Parameters

- `tree` (Tree): A tree structure from treelib.
- `index_num` (int, optional): Number of index levels, default is the maximum depth of the path.
- `columns_num` (int, optional): Number of DataFrame columns, default is 2.
- `index_levels` (list, optional): Names for index levels, default is ['level_1', ...].
- `columns` (list, optional): Names for columns, default is ['column_1', ...].

### Returns

- pd.DataFrame: A DataFrame containing paths from the root to leaf nodes, represented by node TAGs.
  An error is raised if `index_num` exceeds the path levels or other parameters do not match.

### Example

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