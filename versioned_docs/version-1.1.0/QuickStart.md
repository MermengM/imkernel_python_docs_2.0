---
sidebar_position: 3
sidebar_label: 快速开始
---
# 快速开始
> 该教程讲解了如何快速使用imkernel创建一个简单的三维四层统一模型。

## 创建系统模型
首先，导入 Model（三维四层统一模型）并创建实例：

```python
from imkernel import Model

model = model()
```
# 单元模型
## 对象层
### 添加单元模型到对象层
添加到系统中：

```python
model.element.create("system", "系统")
model.element.create("subsystem", "子系统", "system", True)
model.element.create("component", "组件", "subsystem")
```

### 管理参数

定义元素的参数组和参数：

```python
model.element.parameter_group("system", ['特征', '标签'])
model.element.parameter("system", [['feature1', 'feature2'], ['label1']])
```

### 添加模型数据

```python
model.element.add_model_data(['System1', 'Component1', 'Feature1'])
```

### 创建方法

定义方法并关联程序：

```python
model.method.create("optimization_method", "优化方法", None, True)
model.method.set_program("optimization_method", [r"程序路径"])
```

### 创建流程

组织方法到流程中：

```python
model.procedure.create("optimization_procedure", "优化流程", None, True)
model.procedure.create("design_phase", "设计阶段", "optimization_procedure", True)
```

### 关联流程和方法

```python
model.procedure.relate("design_phase", "optimization_method", "component")
```

这份指南可以帮助你快速上手使用 `imkernel` 库。根据你的具体需求调整路径和参数。