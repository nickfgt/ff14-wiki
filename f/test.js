var https = require("https"); //网络请求
var fs = require("fs"); //操作文件，读写文件
var cheerio = require("cheerio"); //扩展模块


const wz = "https://search.bilibili.com/all?vt=55783667&keyword=ff14+%E5%AE%98%E6%96%B9%E7%89%88%E6%9C%ACcg&from_source=webtop_search&spm_id_from=333.1007&search_source=5"
// const wz = "https://api.bilibili.com/x/web-interface/wbi/search/type?__refresh__=true&_extra=&context=&page=1&page_size=42&order=click&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=ff14+%E5%AE%98%E6%96%B9%E7%89%88%E6%9C%ACcg&qv_id=vHqxC1pUri2p5VViGSB5c3lG2MLtarGk&ad_resource=5654&source_tag=3&gaia_vtoken=&category_id=&search_type=video&dynamic_offset=0&web_location=1430654&w_rid=e9861f10c2bc9f89652b52832a530c81&wts=1685154155"; //网址
var strHtml = "";
var results = [];

https.get(wz, function (res) {
  res.on("data", function (chunk) {
    strHtml += chunk;
  });
  res.on("end", function () {
    // console.log(strHtml);
    // let json = JSON.parse(strHtml)
    var $ = cheerio.load(strHtml);
    console.log($(".bili-video-card__info--tit"));
    $(".bili-video-card__info--tit").each((i) => {
      // 在回调函数中，打印每个li元素的文本内容
      console.log(i);
    //   console.log($(i).text());
    // console.log($(i).attr('title'))
    });
  });
});

// https.get(wz, (res) => {
//     var data = '';  //接口数据
 
//     res.on('data', (chunk) => {
//         data += chunk;    //拼接数据块
//     });
//     res.on('end', function() {
//         let json = JSON.parse(data); //解析json
       
//         console.log(json);  //打印json
//     })
// }).on('error', () => 
//     console.log('获取数据出错!')
// );

