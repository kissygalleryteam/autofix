## 综述

Autofix是。

* 版本：2.0.0
* 作者：吕海燕
* demo：[http://kg.kissyui.com/autofix/2.0.0/demo/index.html](http://kg.kissyui.com/autofix/2.0.0/demo/index.html)

## 初始化组件

    S.use('kg/autofix/2.0.0/index', function (S, Autofix) {
         var autofix = new Autofix();
         var items=['.car-left','.mod-sidebar','.innerdiv3','.innerdiv4'];//需要等高对齐的元素可以为多个
         autofix.scrollBottom('.car-main-wrap', items);//第一个参数为父元素
    })

## API说明
