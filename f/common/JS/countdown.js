// 设置目标时间为当前时间加上2小时
function a(params) {
  var targetDate = new Date().getTime() + params * 60 * 60 * 1000;
  // 每隔1秒更新倒计时
  var timer = setInterval(function () {
    // 获取当前时间
    var now = new Date().getTime();
    // 计算剩余时间
    var distance = targetDate - now;
    // 计算剩余的小时、分钟和秒数
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // 如果倒计时结束，清除计时器并显示信息
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
    return hours, minutes, seconds;
  }, 1000);
}
