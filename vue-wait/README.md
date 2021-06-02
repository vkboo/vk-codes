# vue-wait库
> Vue项目开发中，有很多loading的需求，如果都在`data`中去声明`xLoading`变量的方式，会产生不少的雷同变量；还有需要在`<template>`中根据变量来控制数据与loading的显示。

vue-wait库就是为了解决以上的问题，不用再申明冗余的`xLoading`变量，也不用再在`<template>`中写重复的控制语句，库提供了多种使用的方式，详细的使用示例可以看`./src/views/Home.vue`中提供的使用示例。