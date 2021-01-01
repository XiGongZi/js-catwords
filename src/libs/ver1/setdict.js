// 字典
let obj = {
  "纳": {
    "斯": 0,
    "伊": 0
  },
  "腮": {
    "红": 0,
    "绿": 0
  }
}
// 词库
let strs = {
  "纳斯": 1,
  "腮红": 1
};
// 原始数据
let origin = ["纳斯", "腮红"];


let fun = {
  setwords(data) {
    let arr = {};
    data.forEach(ele => {
      arr[ele] = 1;
    });
    return arr;
  },
  setdict(wordList) {
    const result = {};
    for (let i = 0, len = wordList.length; i < len; ++i) {
      let map = result;
      const word = wordList[i];
      for (let j = 0; j < word.length; ++j) {
        const ch = word.charAt(j).toLowerCase();
        if (map[ch]) {
          map = map[ch];
          if (map.empty) {
            break;
          }
        } else {
          if (map.empty) {
            delete map.empty;
          }
          map[ch] = {
            empty: true,
          };
          map = map[ch];
        }
      }
    }
    let res = JSON.stringify(result);
    res = res.split('{"empty":true}').join("0");
    return JSON.parse(res);
  },
  initWords(data) {
    let words = this.setwords(data);
    let dict = this.setdict(data);
    // console.log(data);
    return {words, dict}
  }
};
module.exports = fun;