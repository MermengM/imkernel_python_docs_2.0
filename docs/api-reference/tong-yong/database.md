---
id: dao
title: 数据库对接
---
## tree_to_json

### 介绍
将treelib的Tree对象转换为JSON格式的字符串，支持保留完整的树结构信息，包括节点标识符、标签、数据以及子节点关系。

### 参数
- `tree` (treelib.Tree): 需要转换的treelib树对象 [[1]](https://poe.com/citation?message_id=276539458238&citation=1)

### 返回值
- `str`: 返回树结构的JSON字符串表示，包含完整的树层级结构 [[3]](https://poe.com/citation?message_id=276539458238&citation=3)

### 示例
```python
from imkernel import tree_to_json
from treelib import Tree
import json

# 创建示例树
tree = Tree()
tree.create_node("Root", "root")
tree.create_node("Child1", "child1", parent="root")
tree.create_node("Child2", "child2", parent="root")
tree.create_node("Grandchild1", "grandchild1", parent="child1")

# 调用方法转换为JSON
json_str = tree_to_json(tree)
print(json_str)
# {
#     "id": "root",
#     "name": "Root",
#     "data": null,
#     "children": [
#         {
#             "id": "child1",
#             "name": "Child1",
#             "data": null,
#             "children": [
#                 {
#                     "id": "grandchild1",
#                     "name": "Grandchild1",
#                     "data": null,
#                     "children": []
#                 }
#             ]
#         },
#         {
#             "id": "child2",
#             "name": "Child2",
#             "data": null,
#             "children": []
#         }
#     ]
# }