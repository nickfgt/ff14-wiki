$(function (params) {
  var url = baseURL + "/v1/synthesis";
  $("#l-menu>ul").on("click", ">li", function (params) {
    // console.log("1");
    $(this).addClass("active").siblings().removeClass("active");
    // console.log($(this).data('mid'));;

    const M_id = $(this).data("mid");
    // console.log(M_id);
    $("#bl-ul").empty();
    $.get(url, { M_id: M_id }, (data) => {
      //   console.log(data.data.Menu);
      data.data.map((e) => {
        console.log(e.Menu);
        const { Menu, enid } = e;
        $("#bl-ul").append(` <li data-enid="${enid}">${Menu}</li>`);
      });
      $("#bl-ul>li").eq(0).click();
    });
  });
  $("#mak").click();
  var url_mc = baseURL + "/v1/Scontent";
  $("#bl-ul").on("click", ">li", function (params) {
    $(this).addClass("active").siblings().removeClass("active");
    console.log($(this).data("enid"));
    const enid = $(this).data("enid");
    $("#rbl-ul").empty()
    $.get(url_mc, { C_id: enid }, (data) => {
      // console.log(data.data);
      data.data.map((i) => {
        console.log(i);
        const { content } = i;
        $("#rbl-ul").append(`<li  title="${content}"><p>${content}</p></li>`);
      });
    });
    $('#rbl-ul').on('mouseover','>li',function(params) {
      $(this).addClass('active').siblings().removeClass('active');
    })
  });
});
