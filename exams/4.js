const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 实现一个 arithmetic 函数，可以进行时间和运算调度
 *
 * 需要实现以下功能：
 * arithmetic(initialValue) 为运算器设置初始值
 * plus(value) 记录加法运算
 * minus(value) 记录减法运算
 * wait(seconds) 记录等待时间
 * execute() 执行运算并打印计算过程以及最终结果
 *
 * --- 说明 ---
 *
 * - 本题需要自己实现测试用例
 * - 具体功能参考下列示例
 * - 下面示例中 `>` 表示在控制台中输出 (console.log)
 *
 * --- 示例 ---
 *
 * 示例一:
 * `arithmetic(1).execute();`
 * > init: 1, currentResult: 1
 * > result: 1
 *
 * 示例二:
 * `arithmetic(1).plus(3).wait(5).minus(2);`
 * 无输出
 *
 * 示例三:
 * `arithmetic(1).plus(3).wait(5).minus(2).execute();`
 * > init: 1, currentResult: 1
 * > plus: 3, currentResult: 4
 * 等待5s
 * > minus: 2, currentResult: 2
 * > result: 2
 *
 */

function arithmetic(initialValue) {}

/*******测试部分*******/
module.exports = function doTest() {};
