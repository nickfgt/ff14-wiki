var createError = require("http-errors");
var cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var ContentRouter = require("./routes/Content");
var FocusRouter = require("./routes/focus");
var ToolsRouter = require("./routes/tools");
var SynthesisRouter = require("./routes/synthesis");
var ScontentRouter = require("./routes/Scontent");
var videoMenuRouter = require("./routes/videoMenu");
var vContentRouter = require("./routes/vContent");
//引入服务器

//创建web服务器
var app = express();

//打印日志
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/v1/content", ContentRouter);
app.use("/v1/focus", FocusRouter);
app.use("/v1/tools", ToolsRouter);
app.use("/v1/synthesis", SynthesisRouter);
app.use("/v1/Scontent", ScontentRouter);
app.use("/v1/videoMenu", videoMenuRouter);
app.use("/v1/vContent", vContentRouter);

//处理404
app.use(function (req, res, next) {
  res.send({ code: 404, msg: "资源不存在" });
});

// error handler
//错误处理中间件
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.send({ code: 500, msg: "服务器错误" });
});

module.exports = app;
