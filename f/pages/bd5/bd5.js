$(function (params) {
  var url_v = baseURL + "/v1/videoMenu";

  $("#lt-r li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    // console.log($(this).data("vmenu"));
    const params = $(this).data("vmenu");
    $("#bl-u").empty();
    $.get(url_v, { V_id: params }, (data) => {
      // console.log(data);
      data.data.map((i) => {
        // console.log(i);
        const { Menu, Meid } = i;
        // console.log(Meid);
        $("#bl-u").append(`<li data-Meid="${Meid}"> ${Menu}</li>`);
      });
      $("#bl-u>li").eq(2).click();
    });
    //
  });
  $("#lt-r li").eq(1).click();
  $("#bl-u").on("click", ">li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    // console.log($(this).data('meid'));
    const meid = $(this).data("meid");
    console.log(meid);
    var url_vc = baseURL + "/v1/vContent";
    $.get(url_vc, { VC_id: meid }, (data) => {
      // console.log(data);
      $("#rb-ul").empty();
      data.data.map((i) => {
        // console.log(i);

        const { content, img, VADD, VUP, Vgather, Vplay } = i;
        $("#rb-ul").append(`
            <li>
                <div>
                    <img src="img/bv/FOER/${img}" alt="">
                    <p>${content}</p>
                </div>
            </li>
            `);
      });
    });
  });
  var lindex = 0;
  var n1 = 0;
  $("#rt-ul li").click(function (params) {
    console.log($("#rt-ul li").attr("class"));
    var index = $(this).index();
    // console.log(lindex == index, n1);
    if (index == lindex) {
      const meid = $("#bl-u li.active").data("meid");
      if (n1 == 0) {
        $(this).addClass("on").siblings().removeClass("on").removeClass("off");
        n1++;
        if (index == 0 && n1 == 1) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/VADDon";
          console.log(meid);
          $.get(url_vc, { VC_id: meid }, (data) => {
            // console.log(data);
            data.data.map((i) => {
              // console.log(i);
              const { content, img } = i;
              $("#rb-ul").append(`
                    <li>
                        <div>
                            <img src="img/bv/FOER/${img}" alt="">
                            <p>${content}</p>
                        </div>
                    </li>
                    `);
            });
          });
        } else if (index == 1 && n1 == 1) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/VUPon";
          console.log(meid);
          $.get(url_vc, { VC_id: meid }, (data) => {
            // console.log(data);
            data.data.map((i) => {
              // console.log(i);
              const { content, img } = i;
              $("#rb-ul").append(`
                    <li>
                        <div>
                            <img src="img/bv/FOER/${img}" alt="">
                            <p>${content}</p>
                        </div>
                    </li>
                    `);
            });
          });
        } else if (index == 2 && n1 == 1) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/Vgatheron";
          console.log(meid);
          $.get(url_vc, { VC_id: meid }, (data) => {
            data.data.map((i) => {
              const { content, img } = i;
              $("#rb-ul").append(`
                    <li>
                        <div>
                            <img src="img/bv/FOER/${img}" alt="">
                            <p>${content}</p>
                        </div>
                    </li>
                    `);
            });
          });
        } else if (index == 3 && n1 == 1) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/Vplayon";
          console.log(meid);
          $.get(url_vc, { VC_id: meid }, (data) => {
            data.data.map((i) => {
              const { content, img } = i;
              $("#rb-ul").append(`
                    <li>
                        <div>
                            <img src="img/bv/FOER/${img}" alt="">
                            <p>${content}</p>
                        </div>
                    </li>
                    `);
            });
          });
        }
      } else if (n1 == 1) {
        $(this).addClass("off").siblings().removeClass("off").removeClass("on");
        n1++;
        if (index == 0 && n1 == 2) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/VADDoff";
          $.get(url_vc, { VC_id: meid }, (data) => {
            // console.log(data);
            data.data.map((i) => {
              // console.log(i);
              const { content, img } = i;
              $("#rb-ul").append(`
                      <li>
                          <div>
                              <img src="img/bv/FOER/${img}" alt="">
                              <p>${content}</p>
                          </div>
                      </li>
                      `);
            });
          });
        } else if (index == 1 && n1 == 2) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/VUPoff";
          $.get(url_vc, { VC_id: meid }, (data) => {
            // console.log(data);
            data.data.map((i) => {
              // console.log(i);
              const { content, img } = i;
              $("#rb-ul").append(`
                      <li>
                          <div>
                              <img src="img/bv/FOER/${img}"alt="">
                              <p>${content}</p>
                          </div>
                      </li>
                      `);
            });
          });
        } else if (index == 2 && n1 == 2) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/Vgatheroff";
          $.get(url_vc, { VC_id: meid }, (data) => {
            // console.log(data);
            data.data.map((i) => {
              // console.log(i);
              const { content, img } = i;
              $("#rb-ul").append(`
                      <li>
                          <div>
                              <img src="img/bv/FOER/${img}"alt="">
                              <p>${content}</p>
                          </div>
                      </li>
                      `);
            });
          });
        } else if (index == 3 && n1 == 2) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent/Vplayoff";
          $.get(url_vc, { VC_id: meid }, (data) => {
            // console.log(data);
            data.data.map((i) => {
              // console.log(i);
              const { content, img } = i;
              $("#rb-ul").append(`
                      <li>
                          <div>
                              <img src="img/bv/FOER/${img}"alt="">
                              <p>${content}</p>
                          </div>
                      </li>
                      `);
            });
          });
        }
      } else if (n1 == 2) {
        $(this).removeClass("off").removeClass("on");
        n1 = 0;
        if (n1 == 0) {
          $("#rb-ul").empty();
          var url_vc = baseURL + "/v1/vContent";
          $.get(url_vc, { VC_id: meid }, (data) => {
            // console.log(data);
            data.data.map((i) => {
              // console.log(i);
              const { content, img } = i;
              $("#rb-ul").append(`
                      <li>
                          <div>
                              <img src="img/bv/FOER/${img}" alt="">
                              <p>${content}</p>
                          </div>
                      </li>
                      `);
            });
          });
        }
      }
    } else {
      n1 = 0;
      lindex = index;
      $(this).click();
    }
  });
});
