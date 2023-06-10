$(function () {
  var url_C = baseURL + "/v1/Clock";
  var url_CL = baseURL + "/v1/Clock/col";
  var url_S = baseURL + "/v1/Clock/search";
  var url_H = baseURL + "/v1/Clock/handoff";
  $.get(url_C, (data) => {
    console.log(data);
    data.data.map((i) => {
      const { uid, CL_id, content, map, lev, countdown } = i;
      $("#CB-ulf").append(`
      <li  data-time="${uid}">
      <div class="test-li" id="test-li" >
          <div class="cbl-t">
              <div class="item">
                  <ul>
                      ${content}
                  </ul>
              </div>
              <div class="map">
                 ${map}
              </div>
              <div class="level">
                 ${lev}
                 
              </div>
              <div class="time">
                  <span>艾 21:00</span>
                  <span class="etime" id="etime"></span>
              </div>
              <div class="countdown">
                  <span class="lms" id="lms"></span>
                  <span></span>
              </div>
          </div>
          <div class="cbl-b">
              <div class="icon">
                  <svg class="star y${CL_id}"  data-time="${uid}"  width="20" height="20" viewBox="0 0 1024 1024"
                      style="font-size: 2.2em;">
                      <path
                          d="M576.7168 92.5696l85.0944 182.3744c10.1376 21.76 30.3616 37.0176 54.016 40.5504l196.096 30.1056c57.6 8.8576 81.152 79.5136 40.448 121.4976l-146.432 150.8864c-15.872 16.384-23.04 39.3216-19.456 61.7984l33.9456 209.2032a71.936 71.936 0 0 1-70.656 83.6608c-11.52 0-23.296-2.816-34.56-9.0624l-168.704-93.696a70.656 70.656 0 0 0-69.12 0l-168.704 93.8496c-11.264 6.2464-23.1936 9.0624-34.56 9.0624-41.472 0-78.2336-37.2224-70.656-83.712l33.8944-209.152c3.7376-22.528-3.584-45.568-19.456-61.7984L71.68 467.1488c-40.704-41.984-17.152-112.64 40.448-121.4464l196.096-30.1056c23.552-3.584 43.776-18.7904 54.016-40.6016L447.2832 92.672C460.0832 65.024 485.9392 51.2 512 51.2c25.9584 0 51.8144 13.824 64.768 41.3696z"
                          stroke="transparent"></path>
                  </svg>
              </div>
              <div class="line" id="${countdown}">
                  <div class="line-cooling" id="line-cooling"></div>
                  <div class="line-bar" id="line-bar"></div>
                  <div class="line-reset" id="line-reset"></div>
                  
              </div>
              <div id="${countdown}p" class="line-btn" id="line-btn">
                  <span>将出现</span>
              </div>
          </div>
      </div>
  </li>
      `);
    });
  });
  $("#btnR").click(function (params) {
    $.get(url_C, (data) => {
      console.log(data);
      data.data.map((i) => {
        const { uid, CL_id, content, map, lev, countdown } = i;
        $("#CB-ulf").append(`
        <li  data-time="${uid}">
        <div class="test-li" id="test-li" >
            <div class="cbl-t">
                <div class="item">
                    <ul>
                        ${content}
                    </ul>
                </div>
                <div class="map">
                   ${map}
                </div>
                <div class="level">
                   ${lev}
                   
                </div>
                <div class="time">
                    <span>艾 21:00</span>
                    <span class="etime" id="etime"></span>
                </div>
                <div class="countdown">
                    <span class="lms" id="lms"></span>
                    <span></span>
                </div>
            </div>
            <div class="cbl-b">
                <div class="icon">
                    <svg class="star y${CL_id}"  data-time="${uid}"  width="20" height="20" viewBox="0 0 1024 1024"
                        style="font-size: 2.2em;">
                        <path
                            d="M576.7168 92.5696l85.0944 182.3744c10.1376 21.76 30.3616 37.0176 54.016 40.5504l196.096 30.1056c57.6 8.8576 81.152 79.5136 40.448 121.4976l-146.432 150.8864c-15.872 16.384-23.04 39.3216-19.456 61.7984l33.9456 209.2032a71.936 71.936 0 0 1-70.656 83.6608c-11.52 0-23.296-2.816-34.56-9.0624l-168.704-93.696a70.656 70.656 0 0 0-69.12 0l-168.704 93.8496c-11.264 6.2464-23.1936 9.0624-34.56 9.0624-41.472 0-78.2336-37.2224-70.656-83.712l33.8944-209.152c3.7376-22.528-3.584-45.568-19.456-61.7984L71.68 467.1488c-40.704-41.984-17.152-112.64 40.448-121.4464l196.096-30.1056c23.552-3.584 43.776-18.7904 54.016-40.6016L447.2832 92.672C460.0832 65.024 485.9392 51.2 512 51.2c25.9584 0 51.8144 13.824 64.768 41.3696z"
                            stroke="transparent"></path>
                    </svg>
                </div>
                <div class="line" id="${countdown}">
                    <div class="line-cooling" id="line-cooling"></div>
                    <div class="line-bar" id="line-bar"></div>
                    <div class="line-reset" id="line-reset"></div>
                    
                </div>
                <div id="${countdown}p" class="line-btn" id="line-btn">
                    <span>将出现</span>
                </div>
            </div>
        </div>
    </li>
        `);
      });
    });
  });
  $("#btnS").click(function (params) {
    console.log($("#btnS-input").val());
    const key = $("#btnS-input").val();
    $.get(url_S, { keyword: key }, (data) => {
      // console.log(data.data);
      $("#CB-ulf").empty();
      data.data.map((i) => {
        const { uid, CL_id, content, map, lev, countdown } = i;
        $("#CB-ulf").append(`
        <li  data-time="${uid}">
        <div class="test-li" id="test-li" >
            <div class="cbl-t">
                <div class="item">
                    <ul>
                        ${content}
                    </ul>
                </div>
                <div class="map">
                   ${map}
                </div>
                <div class="level">
                   ${lev}
                   
                </div>
                <div class="time">
                    <span>艾 21:00</span>
                    <span class="etime" id="etime"></span>
                </div>
                <div class="countdown">
                    <span class="lms" id="lms"></span>
                    <span></span>
                </div>
            </div>
            <div class="cbl-b">
                <div class="icon">
                    <svg class="star y${CL_id}"  data-time="${uid}"  width="20" height="20" viewBox="0 0 1024 1024"
                        style="font-size: 2.2em;">
                        <path
                            d="M576.7168 92.5696l85.0944 182.3744c10.1376 21.76 30.3616 37.0176 54.016 40.5504l196.096 30.1056c57.6 8.8576 81.152 79.5136 40.448 121.4976l-146.432 150.8864c-15.872 16.384-23.04 39.3216-19.456 61.7984l33.9456 209.2032a71.936 71.936 0 0 1-70.656 83.6608c-11.52 0-23.296-2.816-34.56-9.0624l-168.704-93.696a70.656 70.656 0 0 0-69.12 0l-168.704 93.8496c-11.264 6.2464-23.1936 9.0624-34.56 9.0624-41.472 0-78.2336-37.2224-70.656-83.712l33.8944-209.152c3.7376-22.528-3.584-45.568-19.456-61.7984L71.68 467.1488c-40.704-41.984-17.152-112.64 40.448-121.4464l196.096-30.1056c23.552-3.584 43.776-18.7904 54.016-40.6016L447.2832 92.672C460.0832 65.024 485.9392 51.2 512 51.2c25.9584 0 51.8144 13.824 64.768 41.3696z"
                            stroke="transparent"></path>
                    </svg>
                </div>
                <div class="line" id="${countdown}">
                    <div class="line-cooling" id="line-cooling"></div>
                    <div class="line-bar" id="line-bar"></div>
                    <div class="line-reset" id="line-reset"></div>
                    
                </div>
                <div id="${countdown}p" class="line-btn" id="line-btn">
                    <span>将出现</span>
                </div>
            </div>
        </div>
    </li>
        `);
      });
    });

    // $.get(url_S,params,(data)=>{
    //   console.log(data);
    // })
  });
  $("#CB-ulf").on("click", " li .cbl-b .star", function (params) {
    $(this).toggleClass("y200");
    // console.log($(this).data('time'));
    const uid = $(this).data("time");
    $.get(url_H, { uid: uid }, (data) => {
      console.log(data);
    });
  });

  let timer1, timer2, timer3;

  const updateProgress = (progressBar, value) => {
    progressBar.value = value;
  };

  const updateTimeLeft = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);

    // $(".lms").text(`${minutes}分${seconds}秒`);
  };

  var progressBar1 = $(" .line-bar");
  var progressBar2 = $(" .line-cooling");
  var progressBar3 = $(" .line-reset");

  function clock(params) {
    const startProgressBar1 = () => {
      const startTime = Date.now();
      updateProgress(progressBar1, 0);
      var time = $("#CB-ul li").data(time);
      timer1 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / (params * 10), 1) * 100;
        const remaining = Math.max(params * 10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-bar`).css("width", `${progress}%`);
        updateProgress(progressBar1, progress);
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        $(".etime").text(`地 ${hours}:${minutes}`);
        if (progress >= 100) {
          $(`#${params}p span`).text("出现中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg,#a10eb8, #a80abf)"
          );
          clearInterval(timer1);
          startProgressBar2();
        }
      }, 1000);
    };

    const startProgressBar2 = () => {
      const startTime = Date.now();

      updateProgress(progressBar2, 0);
      timer2 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        updateTimeLeft(remaining);
        $(`#${params} .line-cooling`).css("width", `${progress}%`);
        updateProgress(progressBar2, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg, #8a8a8a, #c5c5c5)"
          );
          clearInterval(timer2);
          startProgressBar3();
          $(`#${params} .line-bar`).css("width", `0%`);
          $(`#${params} .line-cooling`).css("width", `0%`);
        }
      }, 1000);
    };

    const startProgressBar3 = () => {
      const startTime = Date.now();
      updateProgress(progressBar3, 0);
      timer3 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-reset`).css("width", `${progress}%`);
        updateProgress(progressBar3, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");

          clearInterval(timer3);
          startProgressBar1();
        }
      }, 1000);
    };

    // 启动程序
    startProgressBar1();
  }
  function clock2(params) {
    const startProgressBar1 = () => {
      const startTime = Date.now();
      // updateProgress(progressBar1, 0);
      // var time = $("#CB-ul li").data(time);
      timer11 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / (params * 10), 1) * 100;
        const remaining = Math.max(params * 10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-bar`).css("width", `${progress}%`);
        // updateProgress(progressBar1, progress);
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        $(".etime").text(`地 ${hours}:${minutes}`);
        if (progress >= 100) {
          $(`#${params}p span`).text("出现中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg,#a10eb8, #a80abf)"
          );
          clearInterval(timer11);
          startProgressBar2();
        }
      }, 1000);
    };

    const startProgressBar2 = () => {
      const startTime = Date.now();

      // updateProgress(progressBar2, 0);
      timer22 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-cooling`).css("width", `${progress}%`);
        // updateProgress(progressBar2, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg, #8a8a8a, #c5c5c5)"
          );
          clearInterval(timer22);
          startProgressBar3();
          $(`#${params} .line-bar`).css("width", `0%`);
          $(`#${params} .line-cooling`).css("width", `0%`);
        }
      }, 1000);
    };

    const startProgressBar3 = () => {
      const startTime = Date.now();
      // updateProgress(progressBar3, 0);
      timer33 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-reset`).css("width", `${progress}%`);
        // updateProgress(progressBar3, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");

          clearInterval(timer33);
          startProgressBar1();
        }
      }, 1000);
    };

    // 启动程序
    startProgressBar1();
  }
  function clock3(params) {
    const startProgressBar1 = () => {
      const startTime = Date.now();
      // updateProgress(progressBar1, 0);
      // var time = $("#CB-ul li").data(time);
      timer111 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / (params * 10), 1) * 100;
        const remaining = Math.max(params * 10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-bar`).css("width", `${progress}%`);
        // updateProgress(progressBar1, progress);
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        $(".etime").text(`地 ${hours}:${minutes}`);
        if (progress >= 100) {
          $(`#${params}p span`).text("出现中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg,#a10eb8, #a80abf)"
          );
          clearInterval(timer111);
          startProgressBar2();
        }
      }, 1000);
    };

    const startProgressBar2 = () => {
      const startTime = Date.now();

      // updateProgress(progressBar2, 0);
      timer222 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-cooling`).css("width", `${progress}%`);
        // updateProgress(progressBar2, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg, #8a8a8a, #c5c5c5)"
          );
          clearInterval(timer222);
          startProgressBar3();
          $(`#${params} .line-bar`).css("width", `0%`);
          $(`#${params} .line-cooling`).css("width", `0%`);
        }
      }, 1000);
    };

    const startProgressBar3 = () => {
      const startTime = Date.now();
      // updateProgress(progressBar3, 0);
      timer333 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-reset`).css("width", `${progress}%`);
        // updateProgress(progressBar3, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");

          clearInterval(timer333);
          startProgressBar1();
        }
      }, 1000);
    };

    // 启动程序
    startProgressBar1();
  }
  function clock4(params) {
    const startProgressBar1 = () => {
      const startTime = Date.now();
      // updateProgress(progressBar1, 0);
      // var time = $("#CB-ul li").data(time);
      timer1111 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / (params * 10), 1) * 100;
        const remaining = Math.max(params * 10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-bar`).css("width", `${progress}%`);
        // updateProgress(progressBar1, progress);
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        $(".etime").text(`地 ${hours}:${minutes}`);
        if (progress >= 100) {
          $(`#${params}p span`).text("出现中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg,#a10eb8, #a80abf)"
          );
          clearInterval(timer1111);
          startProgressBar2();
        }
      }, 1000);
    };

    const startProgressBar2 = () => {
      const startTime = Date.now();

      // updateProgress(progressBar2, 0);
      timer2222 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-cooling`).css("width", `${progress}%`);
        // updateProgress(progressBar2, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");
          $(`#${params}p`).css(
            "background-image",
            "linear-gradient(90deg, #8a8a8a, #c5c5c5)"
          );
          clearInterval(timer2222);
          startProgressBar3();
          $(`#${params} .line-bar`).css("width", `0%`);
          $(`#${params} .line-cooling`).css("width", `0%`);
        }
      }, 1000);
    };

    const startProgressBar3 = () => {
      const startTime = Date.now();
      // updateProgress(progressBar3, 0);
      timer3333 = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 10, 1) * 100;
        const remaining = Math.max(10 - elapsed, 0);
        // updateTimeLeft(remaining);
        $(`#${params} .line-reset`).css("width", `${progress}%`);
        // updateProgress(progressBar3, progress);
        if (progress >= 100) {
          $(`#${params}p span`).text("冷却中");

          clearInterval(timer3333);
          startProgressBar1();
        }
      }, 1000);
    };

    // 启动程序
    startProgressBar1();
  }
  clock(1);
  clock2(2);
  clock3(3);
  clock4(4);
});
