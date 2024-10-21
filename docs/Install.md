---
sidebar_position: 1
sidebar_label: 安装
---
# 安装
## 安装Imkernel
### 从PyPi安装

使用 pip 安装 IM Kernel Python SDK：  
  
```
pip install imkernel
```
## imkernel 扩展工具包安装 

除了基本的建模工具外，imkernel集成了基于统一模型的各类工具包，辅助开发。
### 交互式开发工具
集成[JupyterLab](https://jupyter.org/)作为交互式开发工具，安装方式如下：
```  
pip install jupyterlab
```  
JupyterLab设置中文需要安装额外语言包：
```  
pip install jupyterlab-language-pack-zh-CN
```  
### 三维显示工具

基于JupyterLab的三维展示采用pyvista，需安装如下包：  
  
```  
pip install vtk trame ipywidgets 'pyvista[all,trame]' trame_jupyter_extension
```  
### 几何核心扩展
采用[pythonocc](https://anaconda.org/pythonocc/pythonocc-core)作为几何核心 ，安装pyocc (需通过Conda)

```  
conda install conda-forge::pythonocc-core
```  
  
### 绘图库扩展
提供了matplotlib的一些封装，需安装如下包：  
  
```  
pip install matplotlib
```
