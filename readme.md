# js筛选分词

### 一、概述

通过js处理能够匹配拆解成对应的关键词

### 二、使用
0. npm i js-catwords -S;
1. import catWords from "js-catwords";
2. 通过 
   ```javascript
    catWords.initWord(words);
   ```
    方法 传入 `["word0", "word1"]` 这样的词库初始化字典;
3. 
   
   ```javascript
    catWords.init("your words");
   ```
    方法来获取筛选后的结果

### 三、举例
##### 初始词库：

```json
["纳斯", "腮红"]
```

##### 输入文本
`
纳纳斯2腮红2
`

##### 输出数组

```json

["纳斯", "腮红"]
```

### 三、测试

   npm run test