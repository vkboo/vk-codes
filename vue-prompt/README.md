# vue-prompt
## Vue编程式组件的编写与使用
> 一般组件的用法都是引入组件后，用`components`注册，然后在`template`中声明使用，但是，有部分组件如`Toast` `Alert` `Prompt` `ImagePreview`等等，组件功能比较单一，不会声明插槽改动内部的结构，针对这种组件，通常使用编程式UI的

### 一. 直接挂载到Vue.prototype上，通过this.$prompt调用
查看`vue-prompt/src/components/Prompt/main.js`源代码

### 二. 先引入方法，再进行调用 
查看`vue-prompt/src/components/Prompt/prompt.js`源代码