---
id: im-search-tools
title: 模型查询工具
---
## search_model_data

```python
def search_model_data(df, index_levels: list, cols=None):
```

### 介绍

该函数用于在具有多级索引的DataFrame中根据索引级别和列名进行数据搜索。它支持完整DataFrame搜索、单列搜索和多列搜索。

### 参数

- `df` (pd.DataFrame): 待搜索的DataFrame，需要包含多级索引
- `index_levels` (list): 多级索引的值列表，用于定位具体行 
- `cols` (int, list, optional): 要搜索的列编号，可以是单个数字或数字列表。默认为None时返回所有列

### 返回值

- pd.DataFrame 或 pd.Series: 根据指定的索引级别和列名搜索到的数据。如果只搜索一列则返回Series，否则返回DataFrame。

### 示例

```python
import pandas as pd

# 假设有一个多级索引的DataFrame
df = pd.DataFrame(...)  # 包含多级索引的数据

# 搜索所有列
result1 = search_model_data(df, ['Root', 'Child1'])

# 搜索单列
result2 = search_model_data(df, ['Root', 'Child1'], cols=1)

# 搜索多列
result3 = search_model_data(df, ['Root', 'Child1'], cols=[1, 2])
```
