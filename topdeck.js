// topdeck.js
const topDecks = [
  {
    "deck_id": "20250404-1",
    "L_name": "約克鎮",
    "Format": "6.0",
    "Description": "20250404 湖北武漢啟典卡牌 碧海尋春賽 17人 1位 約克鎮 零ling",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 1
  },
  {
    "deck_id": "20250404-2",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250404 湖北武漢啟典卡牌 碧海尋春賽 17人 2位 埃姆登 愛吃瓜的貓",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250404-3",
    "L_name": "讓·巴爾",
    "Format": "6.0",
    "Description": "20250404 湖北武漢啟典卡牌 碧海尋春賽 17人 3位 讓·巴爾 楓糖松餅",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250403-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250403 貓腳印-東門店 休閒賽 10人 冠軍：明石 努卡",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250403-1",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250402 台南紙牌屋 4人 店鋪賽 冠軍：天城 信濃一生推",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250330-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250330 廣東珠海天啟TCG 碧藍尋春賽 17人 1位 奧古斯特·馮·帕塞瓦爾 那群女人將我打倒在地",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 1
  },
  {
    "deck_id": "20250330-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250330 廣東珠海天啟TCG 碧藍尋春賽 17人 2位 奧古斯特·馮·帕塞瓦爾 ADD-孝和",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250330-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250330 廣東珠海天啟TCG 碧藍尋春賽 17人 3位 奧古斯特·馮·帕塞瓦爾 ADD-Mr.White",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250330-4",
    "L_name": "貝爾法斯特",
    "Format": "6.0",
    "Description": "20250330 廣東珠海天啟TCG 碧藍尋春賽 17人 4位 貝爾法斯特 指揮官一拳",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250329-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250329 卡多商行 桑心卡店 9人 標槍婚紗賽 冠軍：明石 diego",
    "Level": "誓約賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250329-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250329 彰化鬥陣桌遊 標槍婚紗賽 10人 冠軍：奧古斯特·馮·帕塞瓦爾 佑安",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250329-3",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250329 彰化鬥陣桌遊 標槍婚紗賽 10人 亞軍：明石 顯像館",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250329-4",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250329 彰化鬥陣桌遊 標槍婚紗賽 10人 四強：明石 柏言",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250329-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250329 彰化鬥陣桌遊 標槍婚紗賽 10人 四強：奧古斯特·馮·帕塞瓦爾 仲文",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250329-6",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250329 貓腳印-東門店 店家賽 8人 冠軍：埃姆登 小淡",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250329-7",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 Z23婚紗誓約賽 12人 1位 奧古斯特·馮·帕塞瓦爾 @三九反應",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250329-8",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 Z23婚紗誓約賽 12人 2位 天城 白龍大王",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250329-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 Z23婚紗誓約賽 12人 3位 奧古斯特·馮·帕塞瓦爾 空虛的兔子",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250329-10",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 Z23婚紗誓約賽 12人 4位 奧古斯特·馮·帕塞瓦爾 @曉冬雨夜",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250329-11",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250329 Magic Star 店家賽 4人 冠軍：天城 從來都沒覺得收集積分開心過",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250329-12",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250329 哈爾濱進化卡牌 周六店賽 5人 1位 奧古斯特·馮·帕塞瓦爾 七星君",
    "Level": "常規賽",
    "Players": 5,
    "Champion": 1
  },
  {
    "deck_id": "20250329-13",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 天狼星新春賽 11人 1位 天城 夜明",
    "Level": "新春賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250329-14",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 天狼星新春賽 11人 2位 奧古斯特·馮·帕塞瓦爾 三九反應",
    "Level": "新春賽",
    "Players": 11,
    "Champion": 0
  },
  {
    "deck_id": "20250329-15",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 天狼星新春賽 11人 3位 鎮海 99",
    "Level": "新春賽",
    "Players": 11,
    "Champion": 0
  },
  {
    "deck_id": "20250329-16",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250329 重慶卡普塔斯 天狼星新春賽 11人 4位 天城 飄飄遊",
    "Level": "新春賽",
    "Players": 11,
    "Champion": 0
  },
  {
    "deck_id": "20250327-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250327 貓腳印-東門店 8人 休閒賽 冠軍：明石 努卡",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250326-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250326 桌上旅程 APP STORE 14人 標槍婚紗賽 冠軍：明石 努卡",
    "Level": "誓約賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250324-1",
    "L_name": "胡德",
    "Format": "6.0",
    "Description": "20250324 香港 cardkoi 構築賽 4人 冠軍：胡德 HMS Hood",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250323-1",
    "L_name": "聖路易斯",
    "Format": "6.0",
    "Description": "20250323 貓腳印-士林店 店鋪賽 6人 冠軍：聖路易斯 男爵",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250323-2",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250323 貓腳印-東門店 標槍婚紗賽 10人 冠軍：明石 努卡",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250323-3",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250323 鬥樂 一中店 標槍婚紗賽 8人 冠軍：天城 政勳",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250322-1",
    "L_name": "胡德",
    "Format": "6.0",
    "Description": "20250322 貓腳印-東門店 店家賽 4人 冠軍：胡德 水麥",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250322-2",
    "L_name": "光輝",
    "Format": "6.0",
    "Description": "20250322 貓腳印-松江店 店家賽 4人 冠軍：光輝 Kira",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250322-3",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250322 CardMaster 店家賽 6人 冠軍：明石 努卡",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250322-4",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250322 貓腳印-桃園店 標槍婚紗賽 9人 冠軍：聖女貞德 Nozo",
    "Level": "誓約賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250322-5",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250322 重慶卡普塔斯 第十屆指揮官爭奪戰 13人 1位 天城 白龍大王",
    "Level": "常規賽",
    "Players": 13,
    "Champion": 1
  },
  {
    "deck_id": "20250322-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250322 重慶卡普塔斯 第十屆指揮官爭奪戰 13人 2位 奧古斯特·馮·帕塞瓦爾 @fami--",
    "Level": "常規賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250322-7",
    "L_name": "瑞鶴",
    "Format": "6.0",
    "Description": "20250322 重慶卡普塔斯 第十屆指揮官爭奪戰 13人 4強 瑞鶴 夜明",
    "Level": "常規賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250322-8",
    "L_name": "聖路易斯",
    "Format": "6.0",
    "Description": "20250322 重慶卡普塔斯 第十屆指揮官爭奪戰 13人 4強 聖路易斯 @skyzyy",
    "Level": "常規賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250322-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250322 哈爾濱進化卡牌 周六積分賽 6人 1位 奧古斯特·馮·帕塞瓦爾 七星君",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250322-10",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250322 彰化鬥陣桌遊 店鋪賽 6人 冠軍：奧古斯特·馮·帕塞瓦爾 仲文",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250322-11",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250322 上海敘敘亭 御四家誓約賽16人 1位 明石 牧羊工小王",
    "Level": "誓約賽",
    "Players": 16,
    "Champion": 1
  },
  {
    "deck_id": "20250322-12",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250322 上海敘敘亭 御四家誓約賽16人 2位 奧古斯特·馮·帕塞瓦爾 @ccw可樂姬翅薯片",
    "Level": "常規賽",
    "Players": 16,
    "Champion": 0
  },
  {
    "deck_id": "20250322-13",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250322 上海敘敘亭 碧海尋春賽 18人 1位 奧古斯特·馮·帕塞瓦爾 KLK",
    "Level": "新春賽",
    "Players": 18,
    "Champion": 1
  },
  {
    "deck_id": "20250322-14",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250322 上海敘敘亭 碧海尋春賽 18人 2位 奧古斯特·馮·帕塞瓦爾 @ccw可樂姬翅薯片",
    "Level": "新春賽",
    "Players": 18,
    "Champion": 0
  },
  {
    "deck_id": "20250322-15",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250322 上海敘敘亭 碧海尋春賽 18人 3位 明石 牧羊工小王",
    "Level": "新春賽",
    "Players": 18,
    "Champion": 0
  },
  {
    "deck_id": "20250322-16",
    "L_name": "讓·巴爾",
    "Format": "6.0",
    "Description": "20250322 大連樂貓 Z23婚紗賽 10人 冠軍：讓·巴爾 稱魂",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250321-1",
    "L_name": "皇家方舟",
    "Format": "6.0",
    "Description": "20250321 武漢秘銀大廳 下班杯 4人場 1位 皇家方舟 沖逼",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250316-1",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250316 貓腳印-士林店 店家賽 6人 冠軍：埃姆登 小淡",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250316-2",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250316 貓腳印-東門店 標槍婚紗賽 8人 冠軍：明石 努卡",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250316-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250316 Card-Ple卡片人卡牌遊戲專賣店-民安店 標槍婚紗賽 6人 冠軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "誓約賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250316-4",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250316 這裡有桌遊 積分賽 9人 冠軍：聖女貞德 RF",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250316-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250316 重慶賽樂斯桌遊 標槍婚紗誓約賽 9人 1位 奧古斯特·馮·帕塞瓦爾 半日閒",
    "Level": "誓約賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250316-6",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250316 重慶賽樂斯桌遊 標槍婚紗誓約賽 9人 2位 天城 鐵血典獄長",
    "Level": "誓約賽",
    "Players": 9,
    "Champion": 0
  },
  {
    "deck_id": "20250316-7",
    "L_name": "黎胥留",
    "Format": "6.0",
    "Description": "20250316 彰化鬥陣桌遊 店鋪賽 8人 冠軍：黎胥留 顯像管",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250316-8",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250316 湖北武漢 秘銀大廳 標槍誓約賽 10人 1位 射水魚 雷普妹卡",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250316-9",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250316 湖北武漢 秘銀大廳 標槍誓約賽 10人 2位 埃姆登 愛吃瓜的貓",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250316-10",
    "L_name": "黎胥留",
    "Format": "6.0",
    "Description": "20250316 湖北武漢 秘銀大廳 標槍誓約賽 10人 3位 黎胥留 港區後宮王",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250316-11",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250316 鬥樂-一中店 標槍婚紗賽 10人 冠軍：天城 政勳",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250316-12",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250316 浙江湖州JO俱樂部 標槍婚紗誓約賽 8人 1位 奧古斯特·馮·帕塞瓦爾 止水",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250316-13",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250316 浙江湖州JO俱樂部 標槍婚紗誓約賽 8人 2位 奧古斯特·馮·帕塞瓦爾 墨石為玖",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 0
  },
  {
    "deck_id": "20250316-14",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250316 台中黑殿 標槍婚紗誓約賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 台中好寶地",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250315-1",
    "L_name": "腓特烈大帝",
    "Format": "6.0",
    "Description": "20250315 貓腳印-東門店 店家賽 10人 冠軍：腓特烈大帝 大帝麻麻唯一信仰",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250315-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250315 CardMaster 店家賽 6人 冠軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250315-3",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250315 貓腳印-桃園店 店家賽 11人 冠軍：埃姆登 小虛",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250315-4",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250315 重慶卡普塔斯 標槍誓約爭奪戰 12人 1位 天城 鐵血典獄長",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250315-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250315 重慶卡普塔斯 標槍誓約爭奪戰 12人 2位 奧古斯特·馮·帕塞瓦爾 @曉冬雨夜",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250315-6",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250315 重慶卡普塔斯 標槍誓約爭奪戰 12人 3位 埃姆登 莉可",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250315-7",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250315 重慶卡普塔斯 標槍誓約爭奪戰 12人 4位 鎮海 車車",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250315-8",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250315 福建省薔薇卡牌 標槍誓約爭奪戰 10人 1位 埃姆登 遊子先生",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250315-9",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250315 福建省薔薇卡牌 標槍誓約爭奪戰 10人 2位 天城 dee",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250315-10",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250315 大連樂貓 天狼星新春賽 10人 冠軍：光輝(μ兵裝) 睦月",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250313-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250313 貓腳印-東門店 休閒賽 9人 冠軍：明石 努卡",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250309-1",
    "L_name": "讓·巴爾",
    "Format": "6.0",
    "Description": "MOX Saga 天狼星新春賽 10人 冠軍：讓·巴爾 Zero.W-弱小巴爾",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250309-2",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250309 CardMaster 標槍婚紗賽 15人 冠軍：明石 努卡-綠色惡魔還在輸出",
    "Level": "誓約賽",
    "Players": 15,
    "Champion": 1
  },
  {
    "deck_id": "20250309-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250309 CardMaster 標槍婚紗賽 15人 亞軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "誓約賽",
    "Players": 15,
    "Champion": 0
  },
  {
    "deck_id": "20250309-4",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250309 這裡有桌遊 標槍婚紗賽 14人 冠軍：射水魚 鈺堂",
    "Level": "誓約賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250309-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250309 貓腳印-新店店 店家賽 4人 冠軍：奧古斯特·馮·帕塞瓦爾 鴨子大人",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250309-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250309 哈爾濱進化卡牌 周日新春賽 10人 冠軍：奧古斯特·馮·帕塞瓦爾 @魅影猛龍",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250309-7",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250309 逛逛紙牌社-集換式卡牌專賣店 店家賽 10人 冠軍：埃姆登 農恩",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250309-8",
    "L_name": "怨仇",
    "Format": "6.0",
    "Description": "20250309 逛逛紙牌社-集換式卡牌專賣店 店家賽 10人 亞軍：怨仇 阿碧",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250309-9",
    "L_name": "島風",
    "Format": "6.0",
    "Description": "20250309 貓腳印-士林店 店家賽 7人 冠軍：島風 蛋頭",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250308-1",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250308 卡多商行 桑心卡店 標槍婚紗賽 12人 冠軍：天城 政勳",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250308-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250308 貓腳印-桃園店 標槍婚紗賽 15人 冠軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "誓約賽",
    "Players": 15,
    "Champion": 1
  },
  {
    "deck_id": "20250308-3",
    "L_name": "胡德",
    "Format": "6.0",
    "Description": "20250308 貓腳印-桃園店 標槍婚紗賽 15人 亞軍：胡德 水麥",
    "Level": "誓約賽",
    "Players": 15,
    "Champion": 0
  },
  {
    "deck_id": "20250308-4",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 20人 冠軍：聖女貞德 (藍軸) 農恩",
    "Level": "誓約賽",
    "Players": 20,
    "Champion": 1
  },
  {
    "deck_id": "20250308-5",
    "L_name": "怨仇",
    "Format": "6.0",
    "Description": "逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 20人 亞軍：怨仇 佳諺",
    "Level": "誓約賽",
    "Players": 20,
    "Champion": 0
  },
  {
    "deck_id": "20250308-6",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 20人 四強：射水魚 陳彥宇",
    "Level": "誓約賽",
    "Players": 20,
    "Champion": 0
  },
  {
    "deck_id": "20250308-7",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 20人 四強：鎮海 信祐",
    "Level": "誓約賽",
    "Players": 20,
    "Champion": 0
  },
  {
    "deck_id": "20250308-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250308 CardMaster 店家賽 9人 冠軍：奧古斯特·馮·帕塞瓦爾 上杉幽",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250308-9",
    "L_name": "島風",
    "Format": "6.0",
    "Description": "20250308 貓腳印-東門店 店家賽 4人 冠軍：島風 上杉幽",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250308-10",
    "L_name": "瑞鶴",
    "Format": "6.0",
    "Description": "20250308 重慶賽樂斯卡牌桌遊 周六店賽 8人 1位 瑞鶴 夜明",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250308-11",
    "L_name": "惡毒（μ兵裝）",
    "Format": "6.0",
    "Description": "20250308 重慶賽樂斯卡牌桌遊 周六店賽 8人 2位 惡毒（μ兵裝） @fami-- ",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250308-12",
    "L_name": "彼得·史特拉塞",
    "Format": "6.0",
    "Description": "20250308 彰化鬥陣桌遊 標槍婚紗賽 11人 冠軍：彼得·史特拉塞 何勁寬",
    "Level": "誓約賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250308-13",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250308 彰化鬥陣桌遊 標槍婚紗賽 11人 亞軍：奧古斯特·馮·帕塞瓦爾 顯像館",
    "Level": "誓約賽",
    "Players": 11,
    "Champion": 0
  },
  {
    "deck_id": "20250308-14",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250308 彰化鬥陣桌遊 標槍婚紗賽 11人 四強：聖女貞德 蔡秉益",
    "Level": "誓約賽",
    "Players": 11,
    "Champion": 0
  },
  {
    "deck_id": "20250308-15",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250308 彰化鬥陣桌遊 標槍婚紗賽 11人 四強：奧古斯特·馮·帕塞瓦爾 Diego",
    "Level": "誓約賽",
    "Players": 11,
    "Champion": 0
  },
  {
    "deck_id": "20250308-16",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250308 廣東中山kaboom 天狼星尋春賽 15人 冠軍：奧古斯特·馮·帕塞瓦爾 被女人打倒",
    "Level": "新春賽",
    "Players": 15,
    "Champion": 1
  },
  {
    "deck_id": "20250308-17",
    "L_name": "貝爾法斯特",
    "Format": "6.0",
    "Description": "20250308 廣東中山kaboom 天狼星尋春賽 15人 亞軍：貝爾法斯特 Mr.white",
    "Level": "新春賽",
    "Players": 15,
    "Champion": 0
  },
  {
    "deck_id": "20250307-1",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250307 重慶卡普塔斯 周五演習構築 8人 冠軍：鎮海 @二至二分",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250307-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250307 重慶卡普塔斯 周五演習構築 8人 亞軍：瑞鶴 夜明",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 0
  },
  {
    "deck_id": "20250305-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250305 重慶卡普塔斯 周三演習構築賽 8人 冠軍 : 奧古斯特·馮·帕塞瓦爾 @fami-- ",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250305-2",
    "L_name": "讓·巴爾",
    "Format": "6.0",
    "Description": "20250305 重慶卡普塔斯 周三演習構築賽 8人 亞軍 : 讓·巴爾 @roadcari ",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 0
  },
  {
    "deck_id": "20250303-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250303 香港 CardKoi 天狼星新春賽 11人 冠軍 : 奧古斯特·馮·帕塞瓦爾 二ノ宮しいな",
    "Level": "新春賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250304-1",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250304 香港 GreymonTcgWorkShop 天狼星新春賽 10人 冠軍 : 聖女貞德 二ノ宮しいな",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250302-1",
    "L_name": "企業",
    "Format": "6.0",
    "Description": "20250302 貓腳印-宜蘭店 店家賽 6人 冠軍 : 企業 我愛企業",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250302-2",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250302 這裡有桌遊 標槍婚紗賽 14人 冠軍：聖女貞德 源聰",
    "Level": "誓約賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250302-3",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "與貓有約 BoardGame 標槍婚紗賽 16人 冠軍：射水魚 鈺堂",
    "Level": "誓約賽",
    "Players": 16,
    "Champion": 1
  },
  {
    "deck_id": "20250302-4",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "與貓有約 BoardGame 標槍婚紗賽 16人 亞軍：鎮海 柏菘",
    "Level": "誓約賽",
    "Players": 16,
    "Champion": 0
  },
  {
    "deck_id": "20250302-5",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "與貓有約 BoardGame 標槍婚紗賽 16人 四強：聖女貞德 農恩",
    "Level": "誓約賽",
    "Players": 16,
    "Champion": 0
  },
  {
    "deck_id": "20250302-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "與貓有約 BoardGame 標槍婚紗賽 16人 四強：奧古斯特·馮·帕塞瓦爾 兼一",
    "Level": "誓約賽",
    "Players": 16,
    "Champion": 0
  },
  {
    "deck_id": "20250302-7",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 12人（下半場） 冠軍：明石  @拉momo",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250302-8",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 12人（下半場） 亞軍：聖女貞德 細雨",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250302-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 12人（下半場） 四強：奧古斯特·馮·帕塞瓦爾 桐生咲",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250302-10",
    "L_name": "白龍",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 12人（下半場） 四強：白龍 ラッシュ・ビー・ザ・オリジナル（原普雷",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250302-11",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 15人（上半場） 冠軍：奧古斯特·馮·帕塞瓦爾 @拉momo",
    "Level": "常規賽",
    "Players": 15,
    "Champion": 1
  },
  {
    "deck_id": "20250302-12",
    "L_name": "沙恩霍斯特",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 15人（上半場） 亞軍：沙恩霍斯特 ラッシュ・ビー・ザ・オリジナル（原普雷",
    "Level": "常規賽",
    "Players": 15,
    "Champion": 0
  },
  {
    "deck_id": "20250302-13",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 15人（上半場） 四強：聖女貞德 細雨",
    "Level": "常規賽",
    "Players": 15,
    "Champion": 0
  },
  {
    "deck_id": "20250302-14",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250302 湖北省啟典卡牌 碧藍戰卡構築賽 15人（上半場） 四強：埃姆登 @塞拉吃泡影",
    "Level": "常規賽",
    "Players": 15,
    "Champion": 0
  },
  {
    "deck_id": "20250302-15",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250302 重慶卡普塔斯 周日演習構築賽 7人 冠軍：奧古斯特·馮·帕塞瓦爾 @fami--",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250302-16",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250302 重慶卡普塔斯 周日演習構築賽 7人 亞軍：埃姆登 莉可",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 0
  },
  {
    "deck_id": "20250302-17",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250302 CardMaster 標槍婚紗賽 20人 冠軍：奧古斯特·馮·帕塞瓦爾 μ's music start",
    "Level": "誓約賽",
    "Players": 20,
    "Champion": 1
  },
  {
    "deck_id": "20250302-18",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250302 CardMaster 標槍婚紗賽 20人 亞軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "誓約賽",
    "Players": 20,
    "Champion": 0
  },
  {
    "deck_id": "20250302-19",
    "L_name": "赤城",
    "Format": "6.0",
    "Description": "20250302 貓腳印-新店店 店家賽 4人 冠軍：赤城 Dio",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250302-20",
    "L_name": "聖路易斯",
    "Format": "6.0",
    "Description": "20250302 貓腳印-士林店 店家賽 4人 冠軍：聖路易斯 男爵",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250301-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250301 上海冒險者酒館 標槍婚紗誓約賽 12人 冠軍：奧古斯特·馮·帕塞瓦爾 @ccw可樂姬翅薯片",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250301-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250301 上海冒險者酒館 標槍婚紗誓約賽 12人 亞軍：奧古斯特·馮·帕塞瓦爾 開膛手初華（一哥）",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250301-3",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250301 廣州日蝕桌遊店 周六積分賽 5人 冠軍：明石 馮の夢想",
    "Level": "常規賽",
    "Players": 5,
    "Champion": 1
  },
  {
    "deck_id": "20250301-4",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250301 福建福州薔薇卡牌 標槍婚紗爭奪戰 8人 冠軍：明石 殘雪 (冠軍留言：Make 地溝油 Great Again)",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250301-5",
    "L_name": "聖路易斯",
    "Format": "6.0",
    "Description": "20250301 哈爾濱進化卡牌 8人 周六店賽 冠軍：聖路易斯 雨中的風",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250301-6",
    "L_name": "加賀",
    "Format": "6.0",
    "Description": "20250301 重慶卡普塔斯 周六店賽 8人 冠軍：加賀 鐵血典獄長",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250301-7",
    "L_name": "赤城",
    "Format": "6.0",
    "Description": "20250301 重慶卡普塔斯 周六店賽 8人 亞軍：赤城 曉冬雨夜",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 0
  },
  {
    "deck_id": "20250302-21",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250302 卡殿Card Palace 店家賽 4人 冠軍：奧古斯特·馮·帕塞瓦爾 夫戰隊無尾熊",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250301-8",
    "L_name": "怨仇",
    "Format": "6.0",
    "Description": "20250301 逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 19人 冠軍：怨仇 佳諺",
    "Level": "誓約賽",
    "Players": 19,
    "Champion": 1
  },
  {
    "deck_id": "20250301-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250301 逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 19人 亞軍：奧古斯特·馮·帕塞瓦爾 金正恩",
    "Level": "誓約賽",
    "Players": 19,
    "Champion": 0
  },
  {
    "deck_id": "20250301-10",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250301 逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 19人 四強：奧古斯特·馮·帕塞瓦爾 李柏呈",
    "Level": "誓約賽",
    "Players": 19,
    "Champion": 0
  },
  {
    "deck_id": "20250301-11",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250301 逛逛紙牌社-集換式卡牌專賣店 標槍婚紗賽 19人 四強：奧古斯特·馮·帕塞瓦爾 蔡永弘",
    "Level": "誓約賽",
    "Players": 19,
    "Champion": 0
  },
  {
    "deck_id": "20250301-12",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250301 卡咖王國-集換式卡牌桌遊專賣店 標槍婚紗賽 10人 冠軍：射水魚 海綿體大戰括約肌",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250301-13",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250301 貓腳印-東門店 店家賽 9人 冠軍：奧古斯特·馮·帕塞瓦爾 kira",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250301-14",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250301 卡多商行 桑心卡店 店家賽 6人 冠軍：埃姆登 弘儀",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250301-15",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250301  獵模士玩具模型店 標槍婚紗賽 13人 冠軍：明石 阿中",
    "Level": "誓約賽",
    "Players": 13,
    "Champion": 1
  },
  {
    "deck_id": "20250228-1",
    "L_name": "赤城",
    "Format": "6.0",
    "Description": "20250228 武漢秘銀大廳 週五下班杯 6人 冠軍：赤城 冲逼",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250228-2",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250228 重慶卡普塔斯 週五構築賽 8人 冠軍：鎮海 莉可",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250228-3",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250228 重慶卡普塔斯 週五構築賽 8人 亞軍：聖女貞德(藍) 隱蔽光宇",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 0
  },
  {
    "deck_id": "20250227-1",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250227 澳門球棋桌遊 標槍誓約賽 8人 冠軍：聖女貞德",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250227-2",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250227 彰化鬥陣桌遊 店家賽 4人 冠軍：聖女貞德 夫戰隊 仲文",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250227-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250227 重慶卡普塔斯 週四夜戰演習賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 莉可",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250227-4",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250227 重慶卡普塔斯 週四夜戰演習賽 8人 亞軍：鎮海 車車",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 0
  },
  {
    "deck_id": "20250226-1",
    "L_name": "腓特烈大帝",
    "Format": "6.0",
    "Description": "20250226 桌上旅程 APP STORE 12人 標槍婚紗賽 冠軍：腓特烈大帝 水麥",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250225-1",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250225 重慶卡普塔斯 戰術演習構築賽 7人 冠軍：埃姆登 Fami",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250223-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250223 鬥樂 一中店 拉菲婚紗賽 10人 冠軍：奧古斯特·馮·帕塞瓦爾 明慈",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250223-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250223 山東青島曼囤豚 標槍婚紗賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 幸运晶_Channel",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250223-3",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250223 哈爾濱進化卡牌 店家賽 8人 冠軍：埃姆登 雨中的風",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250223-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250223 貓腳印新店店 店家賽 4人 冠軍：奧古斯特·馮·帕塞瓦爾 鴨子大人",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250223-5",
    "L_name": "紀伊",
    "Format": "6.0",
    "Description": "20250223 貓腳印士林店 店家賽 6人 冠軍：紀伊 男爵",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250222-1",
    "L_name": "金剛",
    "Format": "6.0",
    "Description": "20250222 彰化鬥陣桌遊 店家賽 6人 冠軍：金剛 夫戰隊奶綠",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250222-2",
    "L_name": "白龍",
    "Format": "6.0",
    "Description": "20250222 香港Night Card 店家賽 8人 冠軍：白龍 Calvin-真。红龙霸。超絕红色战神V2",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250222-3",
    "L_name": "彼得·史特拉塞",
    "Format": "6.0",
    "Description": "20250222 重慶卡普塔斯 6.0發售賽 10人 冠軍：彼得·史特拉塞 飄飄游",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250222-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250222 重慶卡普塔斯 6.0發售賽 10人 亞軍：奧古斯特·馮·帕塞瓦爾 三九反應",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250222-5",
    "L_name": "聖路易斯",
    "Format": "6.0",
    "Description": "20250222 重慶卡普塔斯 6.0發售賽 10人 四強：聖路易斯 隱蔽光宇",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250222-6",
    "L_name": "加賀",
    "Format": "6.0",
    "Description": "20250222 重慶卡普塔斯 6.0發售賽 10人 四強：加賀 鐵血典獄長",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250222-7",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250222 北京麻袋怪獸 標槍婚紗賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 Sorin",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250222-8",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250222 杭州桌上游星 標槍婚紗賽 8人 冠軍：鎮海 AMT",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250222-9",
    "L_name": "紀伊",
    "Format": "6.0",
    "Description": "20250222 CardMaster 店家賽 5人 冠軍：紀伊 花火祭典真的好強",
    "Level": "常規賽",
    "Players": 5,
    "Champion": 1
  },
  {
    "deck_id": "20250222-10",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250222 貓腳印桃園店 店家賽 5人 冠軍：奧古斯特·馮·帕塞瓦爾 埃吉爾我大姐",
    "Level": "常規賽",
    "Players": 5,
    "Champion": 1
  },
  {
    "deck_id": "20250222-11",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250222 台南卡通卡牌遊戲店 店家賽 4人 冠軍：天城 信濃一生推",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  }
]