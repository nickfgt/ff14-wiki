var express = require("express");
var router = express.Router();
var c = require("../connection");

router.get("/", function (req, res, next) {
  c.query(
    "select * from ff14_videoMenu WHERE V_id=?",
    [req.query.V_id],
    (err, r) => {
      if (err) {
        throw err;
      } else if (r.length != 0) {
        res.send({ code: 200, msg: "rua", data: r });
      } else {
        res.send({ code: 404, msg: "查询失败", c: r.length });
      }
    }
  );
});

module.exports = router;
