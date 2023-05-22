$(function (params) {
  var url = baseURL + "/v1/content";
  // console.log($("#maze ul").has("li").length);
  // $("#maze ul").html(data.data.join(""));
  $("#r-b-l img").click(function (params) {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".i-right .b-l>div")
    .click(function (params) {
      // console.log($(this).data("num"));
      const ff_id = $(this).data("num");
      $(this).addClass("active").siblings().removeClass("active");
      $(".b-r").scrollTop(0);
      $.get(url, { ff_id: ff_id }, (data) => {
        // console.log(data.data);

        $("#patch  ").html(
          data.data.map((i) => {
            const { versionName } = i;
            if (versionName.length > 0) {
              return ` <b>${versionName}</b>`;
            }
          })
        );
        $("#fourth ul").html(
          data.data.map((i) => {
            const { fourth } = i;
            if (fourth.length > 0) {
              return ` <li>${fourth}</li>`;
            }
          })
        );
        $("#crusade ul").html(
          data.data.map((i) => {
            const { crusade } = i;
            if (crusade.length > 0) {
              return ` <li>${crusade}</li>`;
            }
          })
        );
        $("#large ul").html(
          data.data.map((i) => {
            const { large } = i;
            if (large.length > 0) {
              return ` <li>${large}</li>`;
            }
          })
        );
        $("#hard ul").html(
          data.data.map((i) => {
            const { hard } = i;
            if (hard.length > 0) {
              return ` <li>${hard}</li>`;
            }
          })
        );
        $("#produce ul").html(
          data.data.map((i) => {
            const { produce } = i;
            if (produce.length > 0) {
              return ` <li>${produce}</li>`;
            }
          })
        );
        $("#maze ul").html(
          data.data.map((i) => {
            const { maze } = i;
            // console.log(maze,length);
            if (maze.length > 0) {
              return ` <li>${maze}</li>`;
            }
          })
        );

        $("#subsequent ul").html(
          data.data.map((i) => {
            const { subsequent } = i;
            if (subsequent.length > 0) {
              return ` <li>${subsequent}</li>`;
            }
          })
        );
        $("#other ul").html(
          data.data.map((i) => {
            const { other } = i;
            if (other.length > 0) {
              return ` <li>${other}</li>`;
            }
          })
        );
      });
      if ($("#maze ul").has("li").length > 0) {
        console.log($("#maze ul").has("li").length);
      }
    })
    .eq(0)
    .click();
  $(".i-right .b-l>div").click(function () {
    setTimeout(() => {
      $(
        "#fourth, #crusade, #large,#hard,#produce,#maze,#subsequent,#other"
      ).each(function () {
        var id = $(this).attr("id");
        if ($("#" + id + " ul").has("li").length == 1) {
          $("#" + id + " ul").show();
          $("#" + id).show();
        } else if ($("#" + id + " ul").has("li").length == 0) {
          $("#" + id + " ul").hide();
          $("#" + id).hide();
        }
      });
    }, 10);
  });
  var url_v = baseURL + "/v1/focus";
  $.get(url_v, (data) => {
    // console.log(data.data);
    data.data.map((i) => {
      // console.log(i);
      const { versionNumber, internationalService, chineseService } = i;
      $("#ver").append(
        `
        <div id="list">
            <div class="c">●</div>
            <div class="v">${versionNumber}</div>
            <div class="w">●</div>
            <div class="detail">
                <p>中文服:${chineseService}
                <p>国际服:${internationalService}
            </div>
        </div>
        `
      );
    });
  });
  $("#ver").on("mouseover", ">div", function (params) {
    // console.log($(this));
    $(this).find(".detail").css("display", "inline-block");
  });
  $("#ver").on("mouseleave", ">div", function (params) {
    console.log($(this));
    $(this).find(".detail").css("display", "none");
  });
  var url_t = baseURL + "/v1/tools";
  $.get(url_t, (data) => {
    // console.log(data.data);
    data.data.map((i) => {
      const { toolImage, toolName } = i;
      $("#b-b>ul").append(
        `
        <li>
            <a href="#"><img src="img/mini_app/${toolImage}" alt=""></a>
            <a href="#"><span>${toolName}</span></a>
        </li>
        `
      );
    });
  });
});

// data.data.filter((i)=>{
// return i !== ''; //只保留蛮神副本不为空的数据
// }).map((i)=>{
// console.log(i);
// })
