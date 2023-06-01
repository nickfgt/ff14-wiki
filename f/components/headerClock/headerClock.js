$(function (params) {
  $("#rl-ul li").click(function (params) {
    console.log($(this).data("line"));
    const line = $(this).data("line");
    $("#rline").css("transform", "translateX(" + line + "%)");
  });
});
