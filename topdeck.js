// topdeck.js
const topDecks = [
  {
    "deck_id": "20250713-1",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250713 卡殿Card Palace 店家賽 4人 冠軍：普利茅斯 尚均",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250713-2",
    "L_name": "明石",
    "Format": "7.0",
    "Description": "20250713 貓腳印士林店 店家賽 9人 冠軍：明石 蛋頭",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250713-3",
    "L_name": "明石",
    "Format": "7.0",
    "Description": "20250713 花蓮玩具e哥 玩家自辦卡套賽 6人 冠軍：天城 天之驕子",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250713-4",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250713 哈爾濱進化卡牌 周日積分賽 9人 1位 普利茅斯 雨中的風@雨中的風 ",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250712-1",
    "L_name": "龍鳳",
    "Format": "7.0",
    "Description": "20250712 貓腳印東門店 店家賽 11人 冠軍：龍鳳 上杉幽",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250709-1",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250709 鬥樂 一中店 店家賽 4人 冠軍：普利茅斯 十早",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250709-2",
    "L_name": "約克鎮II",
    "Format": "7.0",
    "Description": "20250709 花蓮玩具e哥 玩家自辦卡包賽 6人 冠軍 約克鎮II 心皓",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250706-1",
    "L_name": "光輝",
    "Format": "7.0",
    "Description": "20250706 貓腳印-士林店 店家賽 9人 冠軍：光輝 阿凱",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250706-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250706 哈爾濱進化卡牌 周日構築賽 6人 1位 奧古斯特·馮·帕塞瓦爾 七星君",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250706-3",
    "L_name": "讓·巴爾",
    "Format": "7.0",
    "Description": "20250706 大連1001 積分賽 7人 1位 讓·巴爾 稱魂",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250705-1",
    "L_name": "羅恩",
    "Format": "7.0",
    "Description": "20250705 彰化鬥陣桌遊 店家賽 4人 冠軍：羅恩 仲文",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250705-2",
    "L_name": "龍鳳",
    "Format": "7.0",
    "Description": "20250705 貓腳印東門店 店家賽 14人 冠軍：龍鳳 上杉幽",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250705-3",
    "L_name": "獨角獸",
    "Format": "7.0",
    "Description": "20250705 CardMaster 店家賽 9人 冠軍：獨角獸 Kira",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250705-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250705 花蓮玩具e哥 玩家自辦卡盒賽 6人 冠軍：奧古斯特.馮.帕塞瓦爾 無盡的明天",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250705-5",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 1位 普利茅斯 A⭐M⭐T",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 1
  },
  {
    "deck_id": "20250705-6",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 2位 普利茅斯 商紂王",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 0
  },
  {
    "deck_id": "20250705-7",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 4強 普利茅斯 fami",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 0
  },
  {
    "deck_id": "20250705-8",
    "L_name": "俾斯麥Zwei",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 4強 俾斯麥Zwei cloxiu",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 0
  },
  {
    "deck_id": "20250705-9",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 8強 普利茅斯 九九三十六",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 0
  },
  {
    "deck_id": "20250705-10",
    "L_name": "明石",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 8強 明石 殘雪雪雪",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 0
  },
  {
    "deck_id": "20250705-11",
    "L_name": "俾斯麥Zwei",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 8強 俾斯麥Zwei LAMOMO",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 0
  },
  {
    "deck_id": "20250705-12",
    "L_name": "俾斯麥Zwei",
    "Format": "7.0",
    "Description": "20250705 重慶卡普塔斯 2025城市賽 重慶站 42人 8強 俾斯麥Zwei 生",
    "Level": "城市賽",
    "Players": 42,
    "Champion": 0
  },
  {
    "deck_id": "20250703-1",
    "L_name": "天城",
    "Format": "7.0",
    "Description": "20250703 貓腳印-東門店 休閒賽 9人 冠軍：天城 Whiskey",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250702-1",
    "L_name": "聖女貞德",
    "Format": "7.0",
    "Description": "20250702 鬥樂-一中店 店家賽 10人 冠軍：聖女貞德 允儀",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250629-1",
    "L_name": "明石",
    "Format": "7.0",
    "Description": "20250629 貓腳印-士林店 店家賽 8人 冠軍：明石 蛋頭",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250629-2",
    "L_name": "讓·巴爾",
    "Format": "7.0",
    "Description": "20250629 北石家莊青夢卡牌 周日積分賽 9人 1位 讓·巴爾  @絵梨衣の屑狐貍",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250629-3",
    "L_name": "曙光",
    "Format": "7.0",
    "Description": "20250629 北石家莊青夢卡牌 周日積分賽 9人 2位 曙光 @伊良華",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 0
  },
  {
    "deck_id": "20250628-1",
    "L_name": "聖女貞德",
    "Format": "7.0",
    "Description": "20250628 貓腳印-東門店 店家賽 15人 冠軍：聖女貞德 海綿體大戰括約肌",
    "Level": "常規賽",
    "Players": 15,
    "Champion": 1
  },
  {
    "deck_id": "20250628-2",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250628 彰化鬥陣桌遊 店家賽 6人 冠軍：普利茅斯 政勳",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250628-3",
    "L_name": "光輝(μ兵裝)",
    "Format": "7.0",
    "Description": "20250628 CardMaster 店家賽 9人 冠軍：光輝(μ兵裝) 明石測牌器",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250628-4",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 1位 普利茅斯 A⭐M⭐T",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 1
  },
  {
    "deck_id": "20250628-5",
    "L_name": "明石",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 2位 明石 淵井空",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250628-6",
    "L_name": "明石",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 3位 明石 問號",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250628-7",
    "L_name": "俾斯麥Zwei",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 4位 俾斯麥Zwei Aya",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250628-8",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 8強 普利茅斯 島君@超能擼戰隊",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250628-9",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 8強 普利茅斯 泰泰",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250628-10",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 8強 約克鎮II 細雨",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250628-11",
    "L_name": "俾斯麥Zwei",
    "Format": "7.0",
    "Description": "20250628浙江杭州桌上遊星CLUB 2025城市賽-大陸賽區杭州站 36人 8強 俾斯麥Zwei 沖逼@RushB",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250626-1",
    "L_name": "曙光",
    "Format": "7.0",
    "Description": "20250626 貓腳印-東門店 休閒賽 10人 三勝：曙光 喵夢的狗",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250626-2",
    "L_name": "射水魚",
    "Format": "7.0",
    "Description": "20250626 貓腳印-東門店 休閒賽 10人 三勝：射水魚 愛貓壬氏",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250625-1",
    "L_name": "明石",
    "Format": "7.0",
    "Description": "20250625 鬥樂-一中店 店家賽 11人 冠軍：明石 Diego",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250622-1",
    "L_name": "曙光",
    "Format": "7.0",
    "Description": "20250622 貓腳印-士林店 店家賽 12人 冠軍：曙光 上杉幽",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250622-2",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250622 台中黑殿 店家賽 4人 冠軍：普利茅斯 政勳",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250622-3",
    "L_name": "阿拉巴馬",
    "Format": "7.0",
    "Description": "20250622 大連1001 積分賽 8人 冠軍：阿拉巴馬 睦月",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250621-1",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250621 貓腳印-東門店 店家賽 15人 冠軍：普利茅斯 千早愛音",
    "Level": "常規賽",
    "Players": 15,
    "Champion": 1
  },
  {
    "deck_id": "20250621-2",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250621 CardMaster 店家賽 6人 冠軍：普利茅斯 明石測牌器",
    "Level": "常規賽",
    "Players": 16,
    "Champion": 1
  },
  {
    "deck_id": "20250621-3",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250621 重慶卡普塔斯 第十二屆指揮官爭奪戰 17人 1位 普利茅斯 莉可",
    "Level": "常規賽",
    "Players": 17,
    "Champion": 1
  },
  {
    "deck_id": "20250621-4",
    "L_name": "俾斯麥Zwei",
    "Format": "7.0",
    "Description": "20250621 重慶卡普塔斯 第十二屆指揮官爭奪戰 17人 2位 俾斯麥Zwei @曉冬雨夜",
    "Level": "常規賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250621-5",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250621 重慶卡普塔斯 第十二屆指揮官爭奪戰 17人 4強 普利茅斯 @fami--",
    "Level": "常規賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250621-6",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250621 重慶卡普塔斯 第十二屆指揮官爭奪戰 17人 4強 普利茅斯 @二至二分",
    "Level": "常規賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250621-7",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250621 貓腳印-桃園店 店家賽 4人 冠軍：奧古斯特·馮·帕塞瓦爾 我真心的喜歡碧藍戰卡這款遊戲 誠摯的希望碧藍戰卡能夠繼續營運下去",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250621-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250621 哈爾濱進化卡牌 店家賽 11人 冠軍：奧古斯特·馮·帕塞瓦爾 七星君",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250621-9",
    "L_name": "阿爾及利亞",
    "Format": "7.0",
    "Description": "20250621 彰化鬥陣桌遊 店家賽 8人 冠軍：阿爾及利亞 sprout",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250619-1",
    "L_name": "聖女貞德",
    "Format": "7.0",
    "Description": "20250619 貓腳印-東門店 休閒賽 12人 冠軍：聖女貞德 海綿體大戰括約肌",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250619-2",
    "L_name": "三笠",
    "Format": "7.0",
    "Description": "20250619 重慶卡普塔斯 周四摸魚賽 8人 1位 三笠 @白涵不白",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250619-3",
    "L_name": "約克鎮II",
    "Format": "7.0",
    "Description": "20250619 重慶卡普塔斯 周四摸魚賽 8人 2位 約克鎮II @skyzyy",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 0
  },
  {
    "deck_id": "20250618-1",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250618 鬥樂-一中店 店家賽 11人 冠軍：普利茅斯 政勳",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250618-2",
    "L_name": "約克鎮II",
    "Format": "7.0",
    "Description": "20250618 鬥樂-一中店 店家賽 11人 亞軍：約克鎮II 初戀",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 0
  },
  {
    "deck_id": "20250615-1",
    "L_name": "射水魚",
    "Format": "7.0",
    "Description": "20250615 貓腳印-士林店 店家賽 10人 冠軍：射水魚 上杉幽",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250615-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250615 CardMaster 7.0上市奪盒賽 10人 冠軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250615-3",
    "L_name": "射水魚",
    "Format": "7.0",
    "Description": "20250615 這裡有桌遊 店家賽 11人 冠軍：射水魚 RF",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250614-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250614 貓腳印-東門店 店家賽 12人 冠軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250614-2",
    "L_name": "光輝",
    "Format": "7.0",
    "Description": "20250614 CardMaster 店家賽 9人 冠軍：光輝 阿凱",
    "Level": "常規賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250614-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250614 貓腳印-桃園店 店家賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 毀滅得了MVP 火壓就是躺贏狗",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250614-4",
    "L_name": "沙恩霍斯特",
    "Format": "7.0",
    "Description": "20250614 重慶卡普塔斯 極光戰曲發售賽 14人 1位 沙恩霍斯特 @曉冬雨夜",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250614-5",
    "L_name": "武藏",
    "Format": "7.0",
    "Description": "20250614 重慶卡普塔斯 極光戰曲發售賽 14人 2位 武藏 白龍大王",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 0
  },
  {
    "deck_id": "20250614-6",
    "L_name": "普利茅斯",
    "Format": "7.0",
    "Description": "20250614 彰化鬥陣桌遊 店家賽 10人 冠軍：普利茅斯 奶綠",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250614-7",
    "L_name": "約克鎮II",
    "Format": "7.0",
    "Description": "20250614 上海敘敘亭 極光戰曲發售賽 10人 1位 約克鎮II 小一",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250614-8",
    "L_name": "天城",
    "Format": "7.0",
    "Description": "20250614 上海敘敘亭 極光戰曲發售賽 10人 2位 天城 @ccw可樂姬翅薯片 ",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250607-1",
    "L_name": "羅恩",
    "Format": "7.0",
    "Description": "20250607 重慶卡普塔斯 7.0先行賽 12人 1位 羅恩 二至二分",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250607-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "7.0",
    "Description": "20250607 重慶卡普塔斯 7.0先行賽 12人 2位 奧古斯特·馮·帕塞瓦爾 曉冬雨夜",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250524-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 冠軍 奧古斯特·馮·帕塞瓦爾 黑色的正義",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 1
  },
  {
    "deck_id": "20250524-2",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 亞軍 射水魚 愛貓壬氏",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 0
  },
  {
    "deck_id": "20250524-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 季軍 奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 0
  },
  {
    "deck_id": "20250524-4",
    "L_name": "金剛",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 殿軍 金剛 聖哥",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 0
  },
  {
    "deck_id": "20250524-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 八強 奧古斯特·馮·帕塞瓦爾 Kira",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 0
  },
  {
    "deck_id": "20250524-6",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 八強 射水魚 陸",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 0
  },
  {
    "deck_id": "20250524-7",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 八強 射水魚 上杉幽",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 0
  },
  {
    "deck_id": "20250524-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250524 臺北矽谷國際會議中心 2025城市賽台灣賽區-台北站 84人 八強 奧古斯特·馮·帕塞瓦爾 阿凱",
    "Level": "城市賽",
    "Players": 84,
    "Champion": 0
  },
  {
    "deck_id": "20250521-1",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250521 桌上旅程 APP STORE Z23誓約賽 16人 冠軍：射水魚 海綿體大戰括約肌",
    "Level": "誓約賽",
    "Players": 16,
    "Champion": 1
  },
  {
    "deck_id": "20250518-1",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250518 貓腳印-東門店 Z23誓約賽 14人 冠軍：射水魚 海綿體大戰括約肌",
    "Level": "誓約賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250517-1",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250517 貓腳印-東門店 Z23誓約賽 13人 冠軍：聖女貞德 喵夢的狗",
    "Level": "誓約賽",
    "Players": 13,
    "Champion": 1
  },
  {
    "deck_id": "20250517-2",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250517 卡多商行 桑心卡店 Z23誓約賽 14人 冠軍：鎮海 韋錡",
    "Level": "誓約賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250517-3",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250517 彰化鬥陣桌遊 Z23誓約賽 11人 冠軍 Diego 明石",
    "Level": "誓約賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250517-4",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 1位 聖女貞德 邪惡肥藍貓",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 1
  },
  {
    "deck_id": "20250517-5",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 2位 聖女貞德 lw",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250517-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 3位 奧古斯特·馮·帕塞瓦爾 阿肥",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250517-7",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 4位 光輝(μ兵裝) @雨中的風 ",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250517-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 8強 奧古斯特·馮·帕塞瓦爾 昏冥",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250517-9",
    "L_name": "沙恩霍斯特",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 8強 沙恩霍斯特 小八",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250517-10",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 8強 奧古斯特·馮·帕塞瓦爾 稱魂",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250517-11",
    "L_name": "金剛",
    "Format": "6.0",
    "Description": "20250517 遼寧大連1001tcg訓練家俱樂部 2025城市賽大陸賽區-大連站 36人 8強 金剛 黑暗的光亮",
    "Level": "城市賽",
    "Players": 36,
    "Champion": 0
  },
  {
    "deck_id": "20250515-1",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250515 貓腳印-東門店 休閒賽 8人 冠軍：聖女貞德 冰璃",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250511-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250511 這裡有桌遊 Z23誓約賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 炘宏",
    "Level": "誓約賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250511-2",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250511 CardMaster Z23誓約賽 13人 冠軍：射水魚 上杉幽",
    "Level": "誓約賽",
    "Players": 13,
    "Champion": 1
  },
  {
    "deck_id": "20250511-3",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250511 貓腳印-桃園店 Z23誓約賽 7人 冠軍：天城 長休送你回老家",
    "Level": "誓約賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250511-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250511 哈爾濱進化卡牌 周日店賽 4人 1位 奧古斯特·馮·帕塞瓦爾 七星君",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250510-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 冠軍 奧古斯特·馮·帕塞瓦爾 韋峻",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 1
  },
  {
    "deck_id": "20250510-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 亞軍 奧古斯特·馮·帕塞瓦爾 鹽巴",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 0
  },
  {
    "deck_id": "20250510-3",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 季軍 聖女貞德 Limbo",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 0
  },
  {
    "deck_id": "20250510-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 殿軍 奧古斯特·馮·帕塞瓦爾 三萬",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 0
  },
  {
    "deck_id": "20250510-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 八強 奧古斯特·馮·帕塞瓦爾 Kira",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 0
  },
  {
    "deck_id": "20250510-6",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 八強 聖女貞德 政勳",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 0
  },
  {
    "deck_id": "20250510-7",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 八強 射水魚 RF",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 0
  },
  {
    "deck_id": "20250510-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250510 大台南會展中心 2025城市賽台灣賽區-台南站 90人 八強 奧古斯特·馮·帕塞瓦爾 Nien",
    "Level": "城市賽",
    "Players": 90,
    "Champion": 0
  },
  {
    "deck_id": "20250509-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250509 鬥陣桌遊 店鋪賽 7人 冠軍：奧古斯特·馮·帕塞瓦爾 耕欣",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250508-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250508 貓腳印-東門店 休閒賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 kofe",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250507-1",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250507 桌上旅程 APP STORE Z23誓約賽 14人 冠軍：鎮海 淵眼-東煌人柱力",
    "Level": "誓約賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250504-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250504 CardMaster Z23誓約賽 16人 冠軍：奧古斯特·馮·帕塞瓦爾 Enix",
    "Level": "誓約賽",
    "Players": 16,
    "Champion": 1
  },
  {
    "deck_id": "20250504-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250504 彰化鬥陣桌遊 Z23誓約賽 11人 冠軍：奧古斯特·馮·帕塞瓦爾 侑廷",
    "Level": "誓約賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250504-3",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250504 這裡有桌遊 Z23誓約賽 10人 冠軍：射水魚 鈺堂",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250504-4",
    "L_name": "怨仇",
    "Format": "6.0",
    "Description": "20250504 重慶卡普塔斯 第11屆指揮官爭奪戰 14人 1位 怨仇 十六夜汐",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250504-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250504 重慶卡普塔斯 第11屆指揮官爭奪戰 14人 2位 奧古斯特·馮·帕塞瓦爾 黃豆粉單推人",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 0
  },
  {
    "deck_id": "20250504-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250504 重慶卡普塔斯 第11屆指揮官爭奪戰 14人 4強 奧古斯特·馮·帕塞瓦爾 @曉冬雨夜",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 0
  },
  {
    "deck_id": "20250504-7",
    "L_name": "金剛",
    "Format": "6.0",
    "Description": "20250504 重慶卡普塔斯 第11屆指揮官爭奪戰 14人 4強 金剛 白龍大王",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 0
  },
  {
    "deck_id": "20250504-8",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250504 貓腳印-士林店 店家賽 6人 冠軍：明石 蛋頭",
    "Level": "常規賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250503-1",
    "L_name": "獨角獸",
    "Format": "6.0",
    "Description": "20250503 貓腳印-桃園店 天狼星新春賽 7人 冠軍：獨角獸 UT",
    "Level": "新春賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250503-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250503 卡咖王國-集換式卡牌桌遊專賣店 Z23誓約賽 10人 冠軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "誓約賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250503-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250503 卡多商行 桑心卡店 Z23誓約賽 12人 冠軍：奧古斯特·馮·帕塞瓦爾 阿管",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250503-4",
    "L_name": "羅恩",
    "Format": "6.0",
    "Description": "20250503 貓腳印-東門店 店家賽 10人 冠軍：羅恩 Limbo",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250503-5",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 1位 明石 @問號三三",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 1
  },
  {
    "deck_id": "20250503-6",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 2位 鎮海 可可莉克的虞美人",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 0
  },
  {
    "deck_id": "20250503-7",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 3位 奧古斯特 止水",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 0
  },
  {
    "deck_id": "20250503-8",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 4位 射水魚 JZ",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 0
  },
  {
    "deck_id": "20250503-9",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 8強 射水魚 開膛手初華",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 0
  },
  {
    "deck_id": "20250503-10",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 8強 奧古斯特 超能擼戰隊-破曉天",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 0
  },
  {
    "deck_id": "20250503-11",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 8強 明石 淵井空",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 0
  },
  {
    "deck_id": "20250503-12",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250503上海敘敘亭 2025城市賽大陸賽區-上海站 43人 8強 聖女貞德 邪惡肥藍貓",
    "Level": "城市賽",
    "Players": 43,
    "Champion": 0
  },
  {
    "deck_id": "20250501-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250501 貓腳印-東門店 休閒賽 12人 冠軍：奧古斯特·馮·帕塞瓦爾 冰璃",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250501-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 1位 奧古斯特·馮·帕塞瓦爾 Aya" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 1
  },
  {
    "deck_id": "20250501-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 2位 奧古斯特·馮·帕塞瓦爾 ADD-孝和" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 0
  },
  {
    "deck_id": "20250501-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 4強 奧古斯特·馮·帕塞瓦爾" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 0
  },
  {
    "deck_id": "20250501-5",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 4強 明石" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 0
  },
  {
    "deck_id": "20250501-6",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 8強 光輝(μ兵裝)" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 0
  },
  {
    "deck_id": "20250501-7",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 8強 光輝(μ兵裝)" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 0
  },
  {
    "deck_id": "20250501-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 8強 奧古斯特·馮·帕塞瓦爾" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 0
  },
  {
    "deck_id": "20250501-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250501 廣東廣州啟航卡牌 2025城市賽大陸賽區-廣州站53人 8強 奧古斯特·馮·帕塞瓦爾" ,
    "Level": "城市賽",
    "Players": 53,
    "Champion": 0
  },
  {
    "deck_id": "20250427-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250427 CardMaster 新春天狼星 12人 冠軍：明石 努卡",
    "Level": "新春賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250427-2",
    "L_name": "聖路易斯",
    "Format": "6.0",
    "Description": "20250427 貓腳印-士林店 店家賽 5人 冠軍：聖路易斯 小淡",
    "Level": "常規賽",
    "Players": 5,
    "Champion": 1
  },
  {
    "deck_id": "20250427-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250427 Card-Ple卡片人卡牌遊戲專賣店-民安店 新春天狼星 6人 冠軍：奧古斯特·馮·帕塞瓦爾 鐵血才是正義",
    "Level": "新春賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250426-1",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250426 卡多商行 桑心卡店 新春天狼星 8人 冠軍：鎮海 韋錡",
    "Level": "新春賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250426-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250426 彰化鬥陣桌遊 新春天狼星 12人 冠軍：奧古斯特·馮·帕塞瓦爾 仲文",
    "Level": "新春賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250426-3",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250426 彰化鬥陣桌遊 新春天狼星 12人 亞軍：天城 奶綠",
    "Level": "新春賽",
    "Players": 12,
    "Champion": 0
  },
  {
    "deck_id": "20250426-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250426 貓腳印-東門店 店鋪賽 12人 冠軍：奧古斯特·馮·帕塞瓦爾 子誠",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250426-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250426 貓腳印-桃園店 店鋪賽 5人 冠軍：奧古斯特·馮·帕塞瓦爾 黑鐵血教徒",
    "Level": "常規賽",
    "Players": 5,
    "Champion": 1
  },
  {
    "deck_id": "20250426-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250426 重慶卡普塔斯 Z23誓約爭奪戰 13人 1位 奧古斯特·馮·帕塞瓦爾 @曉冬雨夜 ",
    "Level": "誓約賽",
    "Players": 13,
    "Champion": 1
  },
  {
    "deck_id": "20250426-7",
    "L_name": "華盛頓",
    "Format": "6.0",
    "Description": "20250426 重慶卡普塔斯 Z23誓約爭奪戰 13人 2位 華盛頓 @skyzyy ",
    "Level": "誓約賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250426-8",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250426 湖北武漢秘銀大廳 Z23誓約爭奪戰 12人 1位 聖女貞德 細雨",
    "Level": "誓約賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250424-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250424 貓腳印-東門店 休閒賽 10人 冠軍：奧古斯特·馮·帕塞瓦爾 Kira",
    "Level": "常規賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250420-1",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250420 台中黑殿 新春天狼星 8人 冠軍：射水魚 無尾熊",
    "Level": "新春賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250420-2",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250420 貓腳印-東門店 新春天狼星 17人 冠軍：射水魚 上杉幽",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 1
  },
  {
    "deck_id": "20250420-3",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250420 貓腳印-東門店 新春天狼星 17人 四強：射水魚 水麥",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250420-4",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250420 貓腳印-東門店 新春天狼星 17人 四強：明石 蛋頭",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250420-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250420 貓腳印-東門店 新春天狼星 17人 四強：奧古斯特·馮·帕塞瓦爾 平均魔女玩家",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250420-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250420 重慶賽樂斯卡牌桌遊 Z23誓約爭奪戰 11人 1位 奧古斯特·馮·帕塞瓦爾 @曉冬雨夜" ,
    "Level": "誓約賽",
    "Players": 17,
    "Champion": 1
  },
  {
    "deck_id": "20250420-7",
    "L_name": "天城",
    "Format": "6.0",
    "Description": "20250420 重慶賽樂斯卡牌桌遊 Z23誓約爭奪戰 11人 2位 天城 夜明" ,
    "Level": "誓約賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250420-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250420 Card-Ple卡片人卡牌遊戲專賣店-民安店 新春天狼星 8人 冠軍：奧古斯特·馮·帕塞瓦爾 魔女打貞德真過勞" ,
    "Level": "新春賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250420-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 1位 奧古斯特·馮·帕塞瓦爾 @Sdubby " ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 1
  },
  {
    "deck_id": "20250420-10",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 2位 射水魚 騎士之夜" ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 0
  },
  {
    "deck_id": "20250420-11",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 4強 奧古斯特·馮·帕塞瓦爾 圖拉斯土" ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 0
  },
  {
    "deck_id": "20250420-12",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 4強 聖女貞德 LW" ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 0
  },
  {
    "deck_id": "20250420-13",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 8強 射水魚 睦月" ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 0
  },
  {
    "deck_id": "20250420-14",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 8強 明石 伊布屋-ZJS" ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 0
  },
  {
    "deck_id": "20250420-15",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 8強 奧古斯特·馮·帕塞瓦爾 牢丁" ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 0
  },
  {
    "deck_id": "20250420-16",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250420 北京麻袋怪獸卡牌中心 2025城市賽大陸賽區-北京站 34人 8強 奧古斯特·馮·帕塞瓦爾 洛" ,
    "Level": "城市賽",
    "Players": 34,
    "Champion": 0
  },
  {
    "deck_id": "20250419-1",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419 卡多商行 桑心卡店 店家賽 6人 冠軍：奧古斯特·馮·帕塞瓦爾 弘儀",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250419-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419 卡咖王國-集換式卡牌桌遊專賣店 天狼星賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "新春賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250419-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 1位 奧古斯特·馮·帕塞瓦爾 Aya",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 1
  },
  {
    "deck_id": "20250419-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 2位 奧古斯特·馮·帕塞瓦爾 Frank",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 0
  },
  {
    "deck_id": "20250419-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 3位 奧古斯特·馮·帕塞瓦爾 淵井空",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 0
  },
  {
    "deck_id": "20250419-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 4位 奧古斯特·馮·帕塞瓦爾 破曉天",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 0
  },
  {
    "deck_id": "20250419-7",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 8強 奧古斯特·馮·帕塞瓦爾 斯圖拉土",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 0
  },
  {
    "deck_id": "20250419-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 8強 奧古斯特·馮·帕塞瓦爾 玩一輩子烙印",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 0
  },
  {
    "deck_id": "20250419-9",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 8強 鎮海 可可莉克的虞美人",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 0
  },
  {
    "deck_id": "20250419-10",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419江蘇南京卡皮對戰屋 2025城市賽南京站 44人 8強 奧古斯特·馮·帕塞瓦爾 187 三代目",
    "Level": "城市賽",
    "Players": 44,
    "Champion": 0
  },
  {
    "deck_id": "20250419-11",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419 貓腳印-東門店 店家賽 7人 冠軍：奧古斯特·馮·帕塞瓦爾 愛貓人士",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250419-12",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250419 哈爾濱進化卡牌 Z23誓約爭奪戰 7人 1位 奧古斯特·馮·帕塞瓦爾 七星君",
    "Level": "誓約賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250419-13",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250419 彰化鬥陣桌遊 店家賽 8人 冠軍：埃姆登 顯像管",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250417-1",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250417 貓腳印-東門店 休閒賽 11人 冠軍：鎮海 淵眼",
    "Level": "常規賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250413-1",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250413 這裡有桌遊 碧海尋春賽 11人 冠軍: 射水魚 RF",
    "Level": "新春賽",
    "Players": 11,
    "Champion": 1
  },
  {
    "deck_id": "20250413-2",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250413 貓腳印-東門店 碧海尋春賽 17人 冠軍：埃姆登 煒傑",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 1
  },
  {
    "deck_id": "20250413-3",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250413 貓腳印-東門店 碧海尋春賽 17人 四強：奧古斯特·馮·帕塞瓦爾 濃稠",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250413-4",
    "L_name": "鎮海",
    "Format": "6.0",
    "Description": "20250413 貓腳印-東門店 碧海尋春賽 17人 四強：鎮海 陸",
    "Level": "新春賽",
    "Players": 17,
    "Champion": 0
  },
  {
    "deck_id": "20250413-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250413這裡有桌遊 積分賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 尚祐",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250413-6",
    "L_name": "島風",
    "Format": "6.0",
    "Description": "20250413 廣州37°潮玩 御四家誓約戰 9人 冠軍：島風  燐川",
    "Level": "誓約賽",
    "Players": 9,
    "Champion": 1
  },
  {
    "deck_id": "20250413-7",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250413 廣州37°潮玩 御四家誓約戰 9人 亞軍：奧古斯特·馮·帕塞瓦爾  豆腐渣",
    "Level": "誓約賽",
    "Players": 9,
    "Champion": 0
  },
  {
    "deck_id": "20250412-1",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250412 彰化鬥陣桌遊 碧海巡春賽 10人 冠軍：聖女貞德 diego",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250412-2",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250412 彰化鬥陣桌遊 碧海巡春賽 10人 四強：光輝(μ兵裝) 顯像館",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250412-3",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250412 彰化鬥陣桌遊 碧海巡春賽 10人 四強：光輝(μ兵裝) 政勳",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250412-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250412 彰化鬥陣桌遊 碧海巡春賽 10人 四強：奧古斯特·馮·帕塞瓦爾 仲文",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250412-5",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250412 卡多商行 桑心卡店 碧海巡春賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 弘儀",
    "Level": "新春賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250412-6",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250412 貓腳印-東門店 店家賽 4人 冠軍：射水魚 水麥",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250412-7",
    "L_name": "怨仇",
    "Format": "6.0",
    "Description": "20250412 CardMaster 店家賽 5人 冠軍：怨仇 Kira",
    "Level": "常規賽",
    "Players": 5,
    "Champion": 1
  },
  {
    "deck_id": "20250412-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250412 貓腳印-桃園店 碧海巡春賽 10人 冠軍：奧古斯特·馮·帕塞瓦爾 想抱魔女大腿",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 1
  },
  {
    "deck_id": "20250412-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250412 貓腳印-桃園店 碧海巡春賽 10人 亞軍：奧古斯特·馮·帕塞瓦爾 參加獎抽到5包EX01",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250412-10",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250412 貓腳印-桃園店 碧海巡春賽 10人 四強：明石 濃稠",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250412-11",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250412 貓腳印-桃園店 碧海巡春賽 10人 光輝(μ兵裝) 十六那年蛋碎心傷",
    "Level": "新春賽",
    "Players": 10,
    "Champion": 0
  },
  {
    "deck_id": "20250412-12",
    "L_name": "三笠",
    "Format": "6.0",
    "Description": "20250412 貓腳印-桃園店 店家賽 7人 冠軍：三笠 十六那年蛋碎心傷",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250412-13",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250412 逛逛紙牌社 碧海尋春賽戰 14人 冠軍：明石 農恩",
    "Level": "新春賽",
    "Players": 14,
    "Champion": 1
  },
  {
    "deck_id": "20250412-14",
    "L_name": "彼得·史特拉塞",
    "Format": "6.0",
    "Description": "20250412 逛逛紙牌社 碧海尋春賽戰 14人 四強：彼得·史特拉塞 蔡宗勳",
    "Level": "新春賽",
    "Players": 14,
    "Champion": 0
  },
  {
    "deck_id": "20250412-15",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250412 逛逛紙牌社 碧海尋春賽戰 14人 四強：射水魚 張鈺堂",
    "Level": "新春賽",
    "Players": 14,
    "Champion": 0
  },
  {
    "deck_id": "20250412-16",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250412 逛逛紙牌社 碧海尋春賽戰 14人 四強：光輝(μ兵裝) 陳柏菘",
    "Level": "新春賽",
    "Players": 14,
    "Champion": 0
  },
  {
    "deck_id": "20250410-1",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250410 貓腳印-東門店 休閒賽 12人 冠軍：光輝(μ兵裝) 上杉幽與小魔術師",
    "Level": "常規賽",
    "Players": 12,
    "Champion": 1
  },
  {
    "deck_id": "20250410-2",
    "L_name": "光輝(μ兵裝)",
    "Format": "6.0",
    "Description": "20250410 20250410 HK-Moxsaga 香港限定海天playmat爭奪戰 19人 冠軍：光輝（μ兵裝）雪月千夜",
    "Level": "新春賽",
    "Players": 19,
    "Champion": 1
  },
  {
    "deck_id": "20250407-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250407重慶卡普塔斯 周一練習賽 6人 1位 明石 @roadcari ",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250406-1",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250406 CardMaster 天狼星新春賽 13人 冠軍：明石 努卡",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 1
  },
  {
    "deck_id": "20250406-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250406 CardMaster 天狼星新春賽 13人 亞軍：奧古斯特·馮·帕塞瓦爾 魔女飄呀飄",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250406-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250406 CardMaster 天狼星新春賽 13人 四強：奧古斯特·馮·帕塞瓦爾 想打天城但只能打魔女",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250406-2",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250406 CardMaster 天狼星新春賽 13人 四強：奧古斯特·馮·帕塞瓦爾 鐵血軍部俱樂部",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250406-5",
    "L_name": "阿拉巴馬",
    "Format": "6.0",
    "Description": "20250406 貓腳印-士林店 店家賽 6人 冠軍：阿拉巴馬 男爵",
    "Level": "常規賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250406-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250406 桃園一刻館 店舖賽 4人 冠軍：奧古斯特·馮·帕塞瓦爾 缺舟",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250405-1",
    "L_name": "羅恩",
    "Format": "6.0",
    "Description": "20250405 APP STORE 桌上旅程 天狼星新春賽 13人 冠軍：羅恩 水麥",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 1
  },
  {
    "deck_id": "20250405-2",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250405 APP STORE 桌上旅程 天狼星新春賽 13人 亞軍：明石 明天去肉球森林摸貓貓",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250405-3",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250405 APP STORE 桌上旅程 天狼星新春賽 13人 四強：明石 努卡",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250405-4",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405 APP STORE 桌上旅程 天狼星新春賽 13人 四強：奧古斯特·馮·帕塞瓦爾 μ's music start",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250405-5",
    "L_name": "聖女貞德",
    "Format": "6.0",
    "Description": "20250405 卡多商行 桑心卡店 店鋪賽 7人 冠軍：聖女貞德 富陽",
    "Level": "常規賽",
    "Players": 7,
    "Champion": 1
  },
  {
    "deck_id": "20250405-6",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405重慶賽樂斯卡牌桌遊 碧藍巡春賽 6人 1位 奧古斯特·馮·帕塞瓦爾 @fami--",
    "Level": "新春賽",
    "Players": 6,
    "Champion": 1
  },
  {
    "deck_id": "20250405-7",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405重慶賽樂斯卡牌桌遊 碧藍巡春賽 6人 2位 奧古斯特·馮·帕塞瓦爾 @三九反應",
    "Level": "新春賽",
    "Players": 13,
    "Champion": 0
  },
  {
    "deck_id": "20250405-8",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405 上海冒險者酒館 碧海巡春賽 16人 1位 奧古斯特·馮·帕塞瓦爾 破曉天",
    "Level": "新春賽",
    "Players": 16,
    "Champion": 1
  },
  {
    "deck_id": "20250405-9",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405 上海冒險者酒館 碧海巡春賽 16人 2位 奧古斯特·馮·帕塞瓦爾 @ccw可樂姬翅薯片 ",
    "Level": "新春賽",
    "Players": 16,
    "Champion": 0
  },
  {
    "deck_id": "20250405-10",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250405 上海冒險者酒館 碧海巡春賽 16人 3位 明石 紫羅蘭永世長存",
    "Level": "新春賽",
    "Players": 16,
    "Champion": 0
  },
  {
    "deck_id": "20250405-11",
    "L_name": "明石",
    "Format": "6.0",
    "Description": "20250405 鬥陣桌遊 店鋪賽 8人 冠軍：明石 尼酷",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250405-12",
    "L_name": "埃姆登",
    "Format": "6.0",
    "Description": "20250405 貓腳印 桃園店 店鋪賽 4人 冠軍：埃姆登 小虛",
    "Level": "常規賽",
    "Players": 4,
    "Champion": 1
  },
  {
    "deck_id": "20250405-13",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405 貓腳印-東門店 店家賽 8人 冠軍：奧古斯特·馮·帕塞瓦爾 建智",
    "Level": "常規賽",
    "Players": 8,
    "Champion": 1
  },
  {
    "deck_id": "20250405-14",
    "L_name": "射水魚",
    "Format": "6.0",
    "Description": "20250405 逛逛紙牌社-集換式卡牌專賣店 碧海尋春賽 20人 冠軍 : 射水魚 鈺堂",
    "Level": "新春賽",
    "Players": 20,
    "Champion": 1
  },
  {
    "deck_id": "20250405-15",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405 逛逛紙牌社-集換式卡牌專賣店 碧海尋春賽 20人 亞軍 : 奧古斯特·馮·帕塞瓦爾 卓",
    "Level": "新春賽",
    "Players": 20,
    "Champion": 0
  },
  {
    "deck_id": "20250405-16",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405 逛逛紙牌社-集換式卡牌專賣店 碧海尋春賽 20人 四強 : 奧古斯特·馮·帕塞瓦爾 韋峻",
    "Level": "新春賽",
    "Players": 20,
    "Champion": 0
  },
  {
    "deck_id": "20250405-17",
    "L_name": "奧古斯特·馮·帕塞瓦爾",
    "Format": "6.0",
    "Description": "20250405 逛逛紙牌社-集換式卡牌專賣店 碧海尋春賽 20人 四強 : 奧古斯特·馮·帕塞瓦爾 16夜",
    "Level": "新春賽",
    "Players": 20,
    "Champion": 0
  },
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
    "deck_id": "20250402-1",
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
    "Description": "20250302 CardMaster 標槍婚紗賽 20人 冠軍：	",
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