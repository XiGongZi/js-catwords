const dictFun = require("./setdict");

/**
 * 思路：
 * 1. 将字符串一个个拆解并匹配字典，若第一个就未匹配到则丢掉换下一个。
 * 2. 当至少匹配到一个时，如果遇到不匹配项则停止匹配并将匹配到的关键词去词库查询是否存在。
 */
let pubData = {};
let pubBak = {
  // 循环次数
  cir: 0,
  // 目标字符串长度
  vipLen: "",
  // 目标字符串
  vip: "",
  // 当前下标
  indexNow: 0,
  // 最后一次成功的下标
  indexSuc: 0,
  // 关键词集合
  keywords: [],
  // 当前关键词
  keyword: '',
  // 字典
  keys: {},
  // 词库
  words: {},
  // 状态 1：可取下一个； 0：停止
  status: 1,
  len: 0
};

function judgeExist() {
  console.log("---");
  // 判断是否存在, 若存在则通过， 若不存在则设置状态为0
  /**
   * 如何判断存在？
   * 1. 获取字符长度
   * 2. 以长度作为深度对字典检索并获取最终值
   * 3. 以最终值判定是否存在 
   */
  let len = pubData.keyword.length;
  let nowStr = pubData.keyword.charAt(len - 1);
  console.log(`判断是否存在【${nowStr}】`);
  console.log(`当前关键词： 【${pubData.keyword}】`);
  if (!len) return;
  let obj = pubData.keys;
  for (let i = 0; i < len; i++) {
    obj = obj[pubData.keyword[i]];
  }
  console.log("当前深度：", len - 1);
  if (!obj) {
    console.log(`当前是字符第 ${pubData.indexNow} 个， 不存在 【${nowStr}】 ,停止当前单词检测`);
    console.log("---");
    return false;
  } else {
    console.log(`当前是字符第 ${pubData.indexNow} 个， 存在 【${nowStr}】, 继续检测下一个字符`);
    console.log("---");
    return true;
  }
};
function isInWords() {
  console.log("---");
  console.log(`判断单词 【${pubData.keyword}】 是否存在词库中`);
  // 若匹配为停止状态，则需要去判断当前词汇是否存在词库中，若存在则push到关键词集合中，若不存在则无视。执行后使状态恢复1
  if (pubData.words[pubData.keyword]) {
    console.log("存在此单词，识别成功！");
    pubData.keywords.push(pubData.keyword);
    pubData.keyword = "";
    console.log("---");
    return true;
  } else {
    pubData.keyword = "";
    console.log("---");
    console.log("不存在此单词！");
    return false;
  }
};
function judgeStop() {
  // 否符合停机条件
  /** true: 可以停机  false 不可停机
   * 停机条件：
   * 0. 当字符串本身长度为0
   * 1. 当当前取得的下标大于等于字符长度，且当前词汇不存在词库中，即可以判定停机
   */
  console.log("判断停机条件啦");
  console.log(pubData);
  let list0 = !pubData.vipLen;
  console.log("0", list0);
  if (list0) return true;
  // if (pubData.keyword === '~') return true;
  let list1 = pubData.indexNow > pubData.vipLen - 1;
  console.log("1", list1);
  if (list1) return true;
  
  let list2 = pubData.indexNow === pubData.vipLen - 1 && pubData.keyword && !pubData.words[pubData.keyword];
  console.log("2", list2);
  if (list2) return true;
  else return false;
};
function turing() {
  /**
   * 如何匹配？
   * 0. 判断是否符合停机条件，若符合则停机
   * 1. 获取当前应检测的下标,并设置
   * 3. 判断是否存在，
   *      若存在： 继续下一次检测, indexNow++
   *      若不存在： 检测当前捕获的词汇是否存在词库
   *          存在词库 push词库，indexNow++; indexSuc = indexNow
   *          不存在词库，indexNow = indexSuc + 1
   */
  console.log("--------->");
  console.log("当前循环次数： ", pubData.cir);
  const stop = judgeStop();
  if (stop) console.log("停机！");
  else console.log("停机个毛线，继续！");
  if ( stop ) return  Array.from(new Set(pubData.keywords));


    pubData.keyword = pubData.keyword + pubData.vip[pubData.indexNow];  
    
    console.log(pubData);

    const exist = judgeExist();

    if (exist) {
      pubData.indexNow++;
    } else {
      const res = isInWords();
      if (res) pubData.indexNow++ , pubData.indexSuc = pubData.indexNow;
      else pubData.indexNow = pubData.indexSuc + 1;
    }

    console.log("--------->");

    
    pubData.cir++;
    // pubData.indexNow++;

    return turing();
};
function init(data) {
  if (typeof data !== "string") return [];
  console.log("=================================================================================");
  pubData = JSON.parse(JSON.stringify(pubBak));
  
  // data = data + '~';

  pubData.vip = data;
  pubData.vipLen = data.length;
  
  let str = turing();
  console.log("拆分后的单词：", str);
  return str;
}

function initWord(data) {
  // 根据词库生成数组对象
  const res = dictFun.initWords(data);
  pubBak.words = res.words;
  pubBak.keys = res.dict;
};

module.exports = {
  init,
  initWord
};