# js模糊搜索

### 一、概述

通过js处理能够快速匹配拆解成对应的关键词

### 二、使用

0. import fun from "gzx-js-catWords";
1. 通过 `fun.initWord(words)` 方法 传入 `["word0", "word1"]` 这样的词库初始化字典;
2. `fun.init("your words")` 方法来获取筛选后的结果