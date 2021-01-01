const fun = require("./libs/ver2/index.js");
// const fun = require("./libs/ver1/index.js");
"use strict";
const words = require("../index.json");


// 通过原始数据生成需要的字典
fun.initWord(words);
// 找词
fun.init("纳纳斯腮红");





exports.initWord = fun.initWord;
exports.init = fun.init;