---
sidebar_position: 1
sidebar_label: Install
---
# Install

## Installing Imkernel
### Install from PyPi

Install IM Kernel Python SDK using pip:

```
pip install imkernel
```

## Installing imkernel extension toolkits

In addition to basic modeling tools, imkernel integrates various toolkits based on a unified model to assist development.

### Interactive Development Tool
Integrates [JupyterLab](https://jupyter.org/) as an interactive development tool. Install as follows:

```
pip install jupyterlab
```

To set JupyterLab to Chinese, an additional language pack needs to be installed:

```
pip install jupyterlab-language-pack-zh-CN
```

### 3D Visualization Tool

3D visualization based on JupyterLab uses pyvista. The following packages need to be installed:

```
pip install vtk trame ipywidgets 'pyvista[all,trame]' trame_jupyter_extension
```

### Geometry Core Extension
Uses [pythonocc](https://anaconda.org/pythonocc/pythonocc-core) as the geometry core. Install pyocc (requires Conda):

```
conda install conda-forge::pythonocc-core
```

### Plotting Library Extension
Provides some encapsulations of matplotlib. The following package needs to be installed:

```
pip install matplotlib
``` 