// common.js
// 存放一些全局 自定义的 JS代码

// 为jQuery扩展方法
$.extend({
  // 获取地址栏中的参数
  s(value, def) {
    var params = new URLSearchParams(location.search)
    return params.get(value) || def
  },
})
