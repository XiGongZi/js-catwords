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
// let origin = ["纳斯", "腮红"];

/**
 * 思路：
 * 1. 将字符串一个个拆解并匹配字典，若第一个就未匹配到则丢掉换下一个。
 * 2. 当至少匹配到一个时，如果遇到不匹配项则停止匹配并将匹配到的关键词去词库查询是否存在。
 */
let fun = {
  // 关键词集合
  keywords: [],
  // 当前关键词
  keyword: '',
  // 字典
  keys: obj,
  // 词库
  words: strs,
  // 状态 1：可取下一个； 0：停止
  status: 1,
  len: 0, 
  judgeExist() {
    // 判断是否存在, 若存在则通过， 若不存在则设置状态为0
    /**
     * 如何判断存在？
     * 1. 获取字符长度
     * 2. 以长度作为深度对字典检索并获取最终值
     * 3. 以最终值判定是否存在 
     */
    let len = this.keyword.length;
    let nowStr = this.keyword.charAt(len - 1);
    console.log(`判断是否存在【${nowStr}】`);
    console.log(`当前关键词： 【${this.keyword}】`);
    if (!len) return;
    let obj = this.keys;
    for (let i = 0; i < len; i++) {
      obj = obj[this.keyword[i]];
    }
    if (!obj) {
      console.log(`不存在 【${nowStr}】 ,停止当前单词检测`);
      this.status = 0;
    } else {
      console.log(`存在 【${nowStr}】, 继续检测下一个字符`);
    }
    // if (!obj[this.keyword[len - 1]]) this.setData({status: 0});
  },
  setWords() {
    console.log(`判断单词 【${this.keyword}】 是否存在词库中`);
    // 若匹配为停止状态，则需要去判断当前词汇是否存在词库中，若存在则push到关键词集合中，若不存在则无视。执行后使状态恢复1
    if (this.words[this.keyword]) {
      console.log("存在此单词，识别成功！");
      this.keywords.push(this.keyword);
    } else {
      console.log("不存在此单词！");
    }
    this.keyword = "";
    this.status = 1;
  },
  subStr(data) {
    /**
     * 如何匹配？
     * 1. 取出一个，判断当前关键词长度，通过长度来取出字典对应的值
     * 2. 若无法取出则设置状态为0
     */
    data.split('').forEach(ele => {
      if (this.status === 0) this.setWords();
      // 关键词
      this.keyword = this.keyword + ele;
      
      this.judgeExist();
      
      console.log('---');
      // console.log(ele);
    });
  },
  init(data) {
    this.subStr(data+ ' ');
    console.log("拆分后的单词：", Array.from(new Set(this.keywords)));
  }
}

module.exports = fun;
// fun.init("纳斯腮红")