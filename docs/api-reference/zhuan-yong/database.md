---
id: dao
title: 数据库对接
---
## save_tree

### 介绍
该函数用于将树结构保存到远程数据库中。它首先将树转换为节点列表，然后通过HTTP POST请求将数据发送到指定的API端点。

### 参数
- `tree`: 要保存的树结构对象，可以是treelib.Tree类型 

### 返回值
无返回值，但会打印保存结果：
- 成功时显示添加的节点数量
- 失败时显示错误信息

### 示例
```python
from treelib import Tree

# 创建示例树
tree = Tree()
tree.create_node("Root", "root")
tree.create_node("Child1", "child1", parent="root")
tree.create_node("Child2", "child2", parent="root")

# 保存树
save_tree(tree)

# 输出示例:
# 保存成功！共添加3个节点
```
