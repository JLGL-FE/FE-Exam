const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 给定一串区间段序列，判断这些区间之间是否有重叠
 *
 * --- 说明 ---
 *
 * - 区间段序列格式为二维数组，形如[[S1, E1], [S2, E2], [S3, E3], ...]
 * - 区间段均为闭区间(即区间包含Si和Ei)，元素类型为int，输入数据保证Si <= Ei
 * - 如果区间段有重叠，返回true，否则返回false
 */

function checkCoincidence(intervalList) {}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.strictEqual(checkCoincidence([]), false);
    assert.strictEqual(checkCoincidence([[1, 1]]), false);
    assert.strictEqual(checkCoincidence([[1, 2], [3, 5]]), false);
    assert.strictEqual(checkCoincidence([[1, 3], [3, 5]]), true);
    return '通过';
  } catch (err) {
    return '不通过';
  }
};
