# 关于此程序是如何运作的

### 一、准备工作
1. 输入需要取出的词汇数组
2. 生成对应的字典

### 二、运行
1. 遍历目标字符串
2. 当第一个字在字典深度x捕获时，确认捕获，将当前字合并到当前关键词中，并将深度设为x+1，继续

3. 当第二个字在字典深度x+1捕获时，重复2
4. 当第二个字在字典深度x+1未捕获，并去检测当前捕获的完整词汇是否在词库中

5. 当存在时，将当前捕获词汇添加到目标数组里，清空当前捕获词汇，将深度重置0，等一系列重置，返回2
6. 当不存在时，清空当前捕获词汇，将深度重置0，等一系列重置，返回2