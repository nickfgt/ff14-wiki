var express = require("express");
var router = express.Router();
var c = require("../connection");

router.get("/", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=?",
    [req.query.VC_id],
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

router.get("/VUPon", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY VUP DESC",
    [req.query.VC_id],
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
router.get("/VUPoff", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY VUP ASC",
    [req.query.VC_id],
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

router.get("/VADDon", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY VADD DESC",
    [req.query.VC_id],
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
router.get("/VADDoff", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY VADD ASC",
    [req.query.VC_id],
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

router.get("/Vgatheron", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY Vgather DESC",
    [req.query.VC_id],
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
router.get("/Vgatheroff", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY Vgather ASC",
    [req.query.VC_id],
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

router.get("/Vplayon", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY Vplay DESC",
    [req.query.VC_id],
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
router.get("/Vplayoff", function (req, res, next) {
  c.query(
    "select * from ff14_VMContent WHERE VC_id=? ORDER BY Vplay ASC",
    [req.query.VC_id],
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
