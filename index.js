const fun = require("./src/libs/index.js");
const words = require("./index.json");

// 通过原始数据生成需要的字典
fun.initWord(words);
// 找词
fun.init("纳斯腮红");