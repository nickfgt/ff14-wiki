$(function (params) {
  var url_C = baseURL + "/v1/Clock/collect";
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
                      <span></span>f
                  </div>
              </div>
              <div class="cbl-b">
                  <div class="icon">
                      <svg class="star y${CL_id}" data-time="${uid}"  width="20" height="20" viewBox="0 0 1024 1024"
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
  $("#CB-ulf").on("click", " li .cbl-b .star", function (params) {
    $(this).toggleClass("y200");
    // console.log($(this).data('time'));
    const uid = $(this).data("time");
    $.get(url_H, { uid: uid }, (data) => {
      console.log(data);
    });
  });
});
