$(function (params) {
  setTimeout(() => {
    var today = new Date();
    for (var i = 0; i < 7; i++) {
      var date = new Date(today);
      date.setDate(today.getDate() + i);
      var month = date.getMonth();
      var day = date.getDate();
      var weekday = date.getDay();
      month = month + 1;
      var arr = ["日", "一", "二", "三", "四", "五", "六"];
      var week = arr[weekday];
      $("#c-date").append(
        `<li>
        <span>星期${week}</span>
        <p>${month}.${day}</p>
    </li>
    `
      );
    }
  }, 100);
});
