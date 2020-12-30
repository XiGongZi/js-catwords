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
    let arr = [];
    data.forEach(ele => {
      arr.push({[ele]: 1});
    });
    return arr;
  },
  setdict(data) {

  },
  initWords(data) {
    let words = this.setwords(data);
    let dict = this.setdict(data);
    // console.log(data);
    return {words}
  }
};
module.exports = fun;