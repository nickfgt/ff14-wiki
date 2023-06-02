$(function (params) {
  var targetDate = new Date(2023, 6, 3).getTime();
  //   console.log(targetDate);
  var currentDate = new Date().getTime();
  var diff = targetDate - currentDate;
  var timer = setInterval(updateProgress, 1000);
  function updateProgress() {
    var now = new Date().getTime();
    var hours=new Date().getHours()
    var minutes=new Date().getMinutes()
    $('#etime').text(`地 ${hours}:${minutes}`)
    var remaining = targetDate - now;
    var lmm=Math.floor(remaining / 1000 / 60);
    var lss=Math.floor(remaining / 1000);
    $('#lms').text(`@${lmm % 100}:${lss % 100}`)
    var percentage = (((diff - remaining) / diff) * 100000).toFixed(2);
    if (percentage > 100) {
      clearInterval(timer);
      $("#line-bar").css("width", `100%`);
      $("#line-btn").css(
        "background-image",
        "linear-gradient(90deg,#a10eb8, #a80abf)"
      );
      $("#line-btn span").text('已出现');
      //   $('#line-bar').innerHTML = "100%";
    } else {
      // 否则，计算剩余时间占总时间的百分比，保留两位小数

      //   设置进度条的宽度为百分比
     
      $("#line-bar").css("width", `${percentage}%`);
      // 设置显示百分比的元素的内容为百分比
      //   percent.innerHTML = percentage + "%";
    }
  }
});
