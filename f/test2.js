const { Builder, By, Key, until } = require("selenium-webdriver");
const cheerio = require("cheerio");
const request = require("request");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // 打开B站网址
    await driver.get(
      "https://search.bilibili.com/all?vt=55783667&keyword=ff14+%E5%AE%98%E6%96%B9%E7%89%88%E6%9C%ACcg&from_source=webtop_search&spm_id_from=333.1007&search_source=5"
    );
    // 等待页面加载完成
    while (true) {
      let state = await driver.execute_script("return document.readyState");
      if (state == "complete") {
        break;
      } else {
        await driver.sleep(1000);
      }
    }
    // 获取页面源码
    let html = await driver.getPageSource();
    // 加载HTML
    let $ = cheerio.load(html);
    // 获取目标元素
    let title = $(driver).find(".bili-video-card__info--tit").text();
    console.log(title);
  } finally {
    await driver.quit();
  }
})();
