var express = require("express");
var router = express.Router();
var c = require("../connection");

router.get("/", function (req, res, next) {
  c.query("select * from ff14_Clock", (err, r) => {
    if (err) {
      throw err;
    } else if (r.length != 0) {
      res.send({ code: 200, msg: "rua", data: r });
    } else {
      res.send({ code: 404, msg: "查询失败", c: r.length });
    }
  });
});

router.get("/collect", function (req, res, next) {
  c.query("select * from ff14_Clock WHERE CL_id=200 ", (err, r) => {
    if (err) {
      throw err;
    } else if (r.length != 0) {
      res.send({ code: 200, msg: "rua", data: r });
    } else {
      res.send({ code: 404, msg: "查询失败", c: r.length });
    }
  });
});

router.get("/search", function (req, res, next) {
  // 假设你从请求中获取了一个关键字
  let keyword = req.query.keyword;
  // 使用问号作为占位符，并在数组中传递四个相同的值
  c.query(
    "select * from ff14_Clock where content like ? or map like ?",
    [`%${keyword}%`, `%${keyword}%`],
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

router.get("/handoff", function (req, res, next) {
  c.query(
    "UPDATE ff14_Clock SET CL_id = IF (CL_id=100, 200, 100) WHERE uid=?;",
    [req.query.uid],
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
