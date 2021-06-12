# react-prompt
## React编程式组件的编写与使用
> 一般组件的用法都是引入组件后，挂载到render函数中的返回值中进行使用。但是，有部分组件如`Toast` `Alert` `Prompt` `ImagePreview`等等，组件功能比较单一，不会声明插槽改动内部的结构，针对这种组件，通常使用编程式UI的方式进行调用。

### 使用方式： 先引入方法，再进行调用 
查看`react-prompt/src/components/Prompt.jsx`源代码