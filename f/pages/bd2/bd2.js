$(function (params) {
  var url = baseURL + "/v1/synthesis";
  $("#l-menu>ul")
    .on("click", ">li", function (params) {
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
          const { Menu } = e;
          $("#bl-ul").append(` <li>${Menu}</li>`);
        });
      });
    })
    .eq(0)
    .click();
  $("#bl-ul")
    .on("click", ">li", function (params) {
      $(this).addClass("active").siblings().removeClass("active");
    }).children().eq(0).click()
});
