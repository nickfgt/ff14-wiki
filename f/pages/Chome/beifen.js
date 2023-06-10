 // function gettime(params) {
    var targetDate = new Date().getTime() + 1 * 60 * 1000;
    //   console.log(targetDate);
    var currentDate = new Date().getTime();
    var diff = targetDate - currentDate;
    // }
  
    var tim = 1;
    // var timer = setInterval(loopProgress, 1000);
  
    // 定义一个函数，用来启动第一个进度条 const startProgressBar1 = () => { // 获取程序本地时间为起始时间 const startTime = Date.now(); // 设置第一个进度条的值为0 updateProgress(progressBar1, 0); // 设置第一个计时器，在每隔1000毫秒更新一次进度条的值 timer1 = setInterval(() => { // 计算已经过去的时间（秒） const elapsed = (Date.now() - startTime) / 1000; // 计算进度条的值（百分比） const progress = Math.min(elapsed / 10, 1) * 100; // 更新进度条的值 updateProgress(progressBar1, progress); // 判断是否到达10秒，如果是，则停止第一个计时器，并启动第二个进度条 if (elapsed >= 10) { clearInterval(timer1); startProgressBar2(); } }, 1000); };
  
    var state = "update";
    //将出现-已出现
    function updateProgress() {
      if (tim == 0) {
        return;
      }
      var now = new Date().getTime();
      var hours = new Date().getHours();
      var minutes = new Date().getMinutes();
      $("#etime").text(`地 ${hours}:${minutes}`);
      var remaining = targetDate - now;
      var lmm = Math.floor(remaining / 1000 / 60);
      var lss = Math.floor(remaining / 1000);
      $("#lms").text(`@${lmm % 100}:${lss % 100}`);
      var percentage = (((diff - remaining) / diff) * 1000).toFixed(2);
      if (percentage > 100) {
        console.log("11");
        console.log(percentage);
        // var targetDate = new Date().getTime() + 1 * 60 * 1000;
        tim = 0;
        // clearInterval(timer);
  
        $("#line-bar").css("width", `100%`);
        $("#line-btn span").text("出现中");
        $("#line-btn").css(
          "background-image",
          "linear-gradient(90deg,#a10eb8, #a80abf)"
        );
        state = "cooling";
        loopProgress();
      } else {
        $("#line-bar").css("width", `${percentage}%`);
      }
    }
    var cooltar;
    var coolcurr;
    var cotime = setInterval(cooling, 1000);
    function cooling(params) {
      if (tim != 0) {
        // console.log("Timer is running");
      } else {
        // console.log("not running");
        cooltar = new Date().getTime() + 1 * 60 * 60 * 1000;
        coolcurr = new Date().getTime();
        clearInterval(cotime);
      }
    }
    var timC = 1;
    // var counttimer = setInterval(loopProgress, 1000);
    function countdown() {
      var now = new Date().getTime();
      var remaining = cooltar - now;
      var diff = 1 * 60 * 60 * 1000;
      var percentage = (((diff - remaining) / diff) * 100000).toFixed(2);
      // console.log(percentage);
  
      if (percentage > 100) {
        // clearInterval(counttimer);
  
        timC = 0;
        $("#line-cooling").css("width", `100%`);
        $("#line-btn span").text("冷却中");
        $("#line-cooling").css(
          "background-image",
          "linear-gradient(90deg,#630ce6, #a10eb8)"
        );
        $("#line-bar").css("width", `0%`);
        $("#line-cooling").css("width", `0%`);
        state = "reset";
        loopProgress();
        // console.log(timC);
      } else {
        $("#line-cooling").css("width", `${percentage}%`);
      }
    }
  
    var retar;
    var recurr;
    var retime = setInterval(remake, 1000);
    function remake(params) {
      if (timC != 0) {
      } else {
        retar = new Date().getTime() + 5 * 60 * 60 * 1000;
        recurr = new Date().getTime();
        clearInterval(retime);
      }
    }
    // setInterval(() => {
    //   console.log(retar);
    // }, 1000);
  
    // var resettimer = setInterval(loopProgress, 1000);
    function reset(params) {
      var now = new Date().getTime();
      var remaining = retar - now;
      var diff = 5 * 60 * 60 * 1000;
      var percentage = (((diff - remaining) / diff) * 1000000).toFixed(2);
      // console.log(percentage);
      if (percentage > 100) {
        // clearInterval(resettimer);
        tim = 1;
        state = "update";
        loopProgress();
        $("#line-btn span").text("冷却中");
        // setInterval(()=>{console.log('1');}, 1000);
        // timer = setInterval(loopProgress, 1000);
        $("#line-reset").css("width", `0%`);
      } else {
        $("#line-reset").css("width", `${percentage}%`);
      }
    }
    setInterval(loopProgress, 1000);
    function loopProgress() {
      console.log(state);
      switch (state) {
        case "update":
          updateProgress();
          break;
        case "cooling":
          countdown();
          break;
        case "reset":
          reset();
          break;
      }
    }