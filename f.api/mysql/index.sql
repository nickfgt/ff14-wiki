-- Active: 1679903602153@@127.0.0.1@3306@ff14
-- 设置客户端连接服务器端编码
set names utf8;
-- 丢弃数据库如果存在
drop database if exists ff14;
-- 创建新的数据库
create database ff14 charset = utf8;
-- 进入数据库
use ff14;
-- 新闻分类表
create table ff14_versionFocus(
        fid int primary key auto_increment,
        versionNumber varchar(16),
        chineseService varchar(16),
        internationalService varchar(16)
);
-- 插入数据
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.3', '2023/05/09', '2023/01/10');
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.31', '2023/06/06', '2023/01/24');
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.35', '2023/06/06', '2023/01/24');
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.38', '未知', '2023/04/04');
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.4', '未知', '2023/05/23');
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.41', '未知', '2023/05/30');
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.45', '未知', '未知');
insert into ff14_versionFocus (
                versionNumber,
                chineseService,
                internationalService
        )
VALUES ('6.48', '未知', '未知');
CREATE TABLE ff14_versionContent(
        cid int primary key auto_increment,
        versionName VARCHAR (255) NOT NULL,
        prepareBeforehand VARCHAR (255) NOT NULL,
        fourth VARCHAR (255) NOT NULL,
        crusade VARCHAR (255) NOT NULL,
        twentyFour VARCHAR (255) NOT NULL,
        large VARCHAR (255) NOT NULL,
        hard VARCHAR (255) NOT NULL,
        produce VARCHAR (255) NOT NULL,
        maze VARCHAR (255) NOT NULL,
        subsequent VARCHAR (255) NOT NULL,
        other VARCHAR (255) NOT NULL,
        ff_id VARCHAR (255) -- foreign key(ff_id) references ff14_versionFocus(fid)
);
-- 插入数据
INSERT INTO ff14_versionContent (ff_id, versionName)
VALUES(400, 'Patch6.0「晓月之终途」');
INSERT INTO ff14_versionContent (ff_id, prepareBeforehand)
VALUES(400, '[6.0] 战斗职业事先准备');
INSERT INTO ff14_versionContent (ff_id, prepareBeforehand)
VALUES(400, '[6.0] produce事先准备');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[81] 异形楼阁 佐特塔');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[83] 魔导神门 巴别塔');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[85] 末日树海 万相森国');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[87] 创造环境 极北造物院');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[89] 星海深幽 寻因星晶镜');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[90] 最终幻想 末世终迹');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[90] 电脑梦境 斯提格玛四');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(400, '[90] 乐园都市 笑笑镇');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(400, '[83] 佐迪亚克歼灭战');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(400, '[89] 海德林歼灭战');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(400, '[90] 终结之战');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(400, '[90] 佐迪亚克暝暗歼灭战');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(400, '[90] 海德林晖光歼灭战');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(400, '[90] Lv80-90生产练级宏');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(400, '[90] produce6.0攻略及提前准备');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(400, '[90] 顶配禁断宏搓伊修加德/辉煌');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(400, '[90] 580HQ推荐手法');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 子言姐姐-万魔殿普通1-4层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 子言姐姐-万魔殿零式一层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 魔法少女-万魔殿零式一层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 被窝国际-万魔殿零式一层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 友利郁也-万魔殿零式一层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 被窝国际-万魔殿零式二层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] Delta-万魔殿零式三层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 被窝国际-万魔殿零式三层');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 被窝国际-万魔殿零式四层-门神');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(400, '[90] 被窝国际-万魔殿零式四层-本体');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(400, '- [6.01]更新笔记');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(400, '- [6.0]更新笔记');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(400, '- 风脉/宠物/坐骑/狩猎/探索笔记');
INSERT INTO ff14_versionContent (ff_id, versionName)
VALUES(300, 'Patch6.1「崭新的冒险」');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(300, '[90] 近东秘宝 阿尔扎达尔海底遗迹群');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(300, '[90] 终极之战');
INSERT INTO ff14_versionContent (ff_id, large)
VALUES(300, '[90] 灿烂神域 阿格莱亚');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(300, '[90] 专家不垫的590hq手法');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(300, '[90] 590HQ生产/采集装');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(300, '[90] 非专家不垫的590hq96%手法');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(300, '[90] 6.1版本顶配禁断宏秒杀辉煌');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-萌神神');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-咖波');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-莫古力攻略-P1-P4');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-魔法少女-P1-P4');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-子言姐姐-P5');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-友利郁也-P1-P7');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-候鸟症候群-P3+麻将全流程');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.11] 绝龙诗-模拟器');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.15] 次元欧米茄后日谈(暂译)');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.15] 塔塔露的大繁荣商会(暂译)');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.15] 回归的希尔迪布兰德（事件屋）(暂译)');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.15] 老主顾阿梅莉安丝');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(300, '[6.15] 友好部族支线任务');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- [6.1]更新笔记');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- [鸡排]宠物/坐骑/乐谱');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 联动复刻「牙狼」');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 职能任务「帝都的野兽」');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 幻巧战「究极神兵幻巧战」');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 新增外墙配方「姜饼外墙」');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 新增房区「穹顶皓天」，购买指南');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 新增坐骑「辅助机602认证密钥」,金碟币购买');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 新增硌狮族发型,');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(300, '- 新增「探索笔记」达成时的演出');
INSERT INTO ff14_versionContent (ff_id, versionName)
VALUES(200, 'Patch6.2「禁忌的记忆」');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(200, '[90] 异界孤城 特罗亚宫廷');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(200, '[90] 巴尔巴莉希娅歼殛战');
INSERT INTO ff14_versionContent (ff_id, large)
VALUES(200, '[90] 万魔殿 炼净之狱1~4');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[子言] 零式-炼狱1');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[被窝] 零式-炼狱1');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[千星] 零式-炼狱2');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[被窝] 零式-炼狱2');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[被窝] 零式-炼狱3');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[苦茶子] 零式-炼狱3');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[啭啭] 零式-炼狱3');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[菓子] 零式-炼狱4门神');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[苦茶子] 零式-炼狱4门神');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[胡萌萌] 零式-炼狱4本体');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(200, '[奶油咖啡] 零式-炼狱4本体');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(200, '[90] 610HQ');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(200, '[90] 610HQ最穷工匠の制作笔记');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(200, '[90] 獭獭泉生产高难配方不完全指北');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] 希拉狄哈水道-全结局文字');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] 希拉狄哈水道-全结局视频');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] 树歌-异闻希拉狄哈水道,');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] mm+w-异闻希拉狄哈水道');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] 塔塔露的大繁荣商店');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] 回归的事件屋关联');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] 友好部族支线任务');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(200, '[6.25] 新强化武器关联');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- [6.2]更新笔记');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- [鸡排]数据更新至6.2');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- 新增[素素无人岛指南]');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- 幻巧战「萨菲洛特幻巧战」');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- 崭新的冒险 番外篇');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- 追加「惊奇百宝城」掉落');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- 新增维埃拉族发型');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- 调整硌狮族发型,');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(200, '- 新增「探索笔记」达成时的演出');
INSERT INTO ff14_versionContent (ff_id, versionName)
VALUES(100, 'Patch6.3「天上欢庆，地下轰鸣」');
INSERT INTO ff14_versionContent (ff_id, fourth)
VALUES(100, '[90] 雪山奥窟 冥魂石洞');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(100, '[90] 树歌-极火天王/卢比坎特歼殛战');
INSERT INTO ff14_versionContent (ff_id, crusade)
VALUES(100, '[90] 菓子-幻女神索菲亚');
INSERT INTO ff14_versionContent (ff_id, large)
VALUES(100, '[90] 喜悦神域 欧芙洛绪涅');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[莫古力][P1-2]欧米茄绝境战');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[莫古力]一图流打法');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[MM+W][P1]绝欧米茄检证战');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[莫古力]P3先行版');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[狗贝戎]P3小电视');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[莫古力]P5先行版');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[模拟器]P5自制模拟器');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[素素] 绝欧米茄之绝密档案');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[MM+W] 绝欧米茄文档');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[贼喊捉贼] 绝欧米茄 自研攻略总结文档');
INSERT INTO ff14_versionContent (ff_id, hard)
VALUES(100, '[盗火] Steal Fire绝欧米茄攻略');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(100, '[90] 生产&采集620HQ');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(100, '[90] 6.35-生产&采集肝武预览');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(100, '[90] 6.35-生产肝武系列攻略');
INSERT INTO ff14_versionContent (ff_id, produce)
VALUES(100, '[90] 6.35-生产肝武莫雯工具简略+');
INSERT INTO ff14_versionContent (ff_id, maze)
VALUES(100, '[90] 苦茶子1-98层道具/怪物详细攻略');
INSERT INTO ff14_versionContent (ff_id, maze)
VALUES(100, '[90] 子言-BOSS战合集');
INSERT INTO ff14_versionContent (ff_id, maze)
VALUES(100, '[90] GreatGBL-全BOSS战');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(100, '[6.35]副本-正统优雷卡');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(100, '[6.35]任务-回归的事件屋续篇');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(100, '[6.35]曼武-曼德维尔武器续篇');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(100, '[6.35]主手-produce莫雯工具');
INSERT INTO ff14_versionContent (ff_id, subsequent)
VALUES(100, '[6.35]友好部族-兔兔族');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [6.3]更新笔记');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [鸡排]数据更新至6.3');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [无人岛指南]更新至6.3');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [任务]虚无界的旁观者续篇');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [任务]联系远东的大繁荣之轮');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [任务]安登的老主顾');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [挖宝]厄尔庇斯育体宝殿');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [房屋]住宅区追加25~30区');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [金碟]新增400w金碟币4人坐骑');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [金碟]新增妖精领风格跳跳乐');
INSERT INTO ff14_versionContent (ff_id, other)
VALUES(100, '- [系统]队伍列表可显示buff剩余时');
create table ff14_utilityGadgets(
        uid int primary key auto_increment,
        toolImage varchar(32),
        toolName varchar(32)
);
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('clock.png', '采集时钟');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('peifang.png', '配方计算器');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('peizhuang.png', '配装计算器');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('shengchan.png', '生产模拟器');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('tool.png', '鸡排小工具');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('fish.png', '鱼糕钓鱼');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('blue.png', '青魔法书');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('bird.png', '陆行鸟染色');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('hunt.png', '狩猎车次表');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('huntclock.png', '狩猎时钟');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('tansuo.png', '探索笔记时钟');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('hunthot.png', '狩猎热点图');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('huanqiao.png', '幻巧拼图');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('skybook.png', '天书奇谈');
INSERT INTO ff14_utilityGadgets (toolImage, toolName)
VALUES('weicai.png', '仙人微彩');

-- 创建新闻数据表
-- create table ht_news(
--     nid int primary key auto_increment,
--     title varchar(64),
--     ctime bigint,
--     detail varchar(10240),
--     cat_id int,
--     -- 将cat_id列作为外键，它的值必须在ht_cat表的cid中出现过
--     foreign key(cat_id) references ht_cat(cid)
-- );
-- -- 插入数据