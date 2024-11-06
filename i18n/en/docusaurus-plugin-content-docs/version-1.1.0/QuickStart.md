---
sidebar_position: 3
sidebar_label: Quick Start
---
# Quick Start
The tutorial explains how to quickly create a three-dimensional, four-layer unified model using `imkernel`.

# SystemModel
## Creating the SystemModel
First, import the Model (three-dimensional, four-layer unified model) and create an instance:

```python
from imkernel import Model

Model = Model()
```

# UnitModel
## ObjectLayer
### Adding Unit Model to the Object Layer
Add to the system:

```python
Model.element.create("system", "系统")
Model.element.create("subsystem", "子系统", "system", True)
Model.element.create("component", "组件", "subsystem")
```

### Managing Parameters

Define parameter groups and parameters for elements:

```python
Model.element.parameter_group("system", ['特征', '标签'])
Model.element.parameter("system", [['feature1', 'feature2'], ['label1']])
```

### Adding Model Data

```python
Model.element.add_model_data(['System1', 'Component1', 'Feature1'])
```

### Creating Methods

Define methods and associate programs:

```python
Model.method.create("optimization_method", "优化方法", None, True)
Model.method.set_program("optimization_method", [r"program_path"])
```

### Creating Procedures

Organize methods into procedures:

```python
Model.procedure.create("optimization_procedure", "优化流程", None, True)
Model.procedure.create("design_phase", "设计阶段", "optimization_procedure", True)
```

### Relating Procedures and Methods

```python
Model.procedure.relate("design_phase", "optimization_method", "component")
```

This guide helps you quickly get started with the `imkernel` library. Adjust paths and parameters according to your specific needs.