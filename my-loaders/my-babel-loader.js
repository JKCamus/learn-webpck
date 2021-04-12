/*
 * @Description: 
 * @version: 
 * @Author: camus
 * @Date: 2021-04-12 10:40:43
 * @LastEditors: camus
 * @LastEditTime: 2021-04-12 10:43:09
 */

const babel = require("@babel/core");
const { getOptions } = require("loader-utils");

module.exports = function(content) {
  // 0.设置为异步的loader
  const callback = this.async();

  // 1.获取传入的参数
  const options = getOptions(this);

  // 2.对源代码进行转换
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code)
    }
  })
}