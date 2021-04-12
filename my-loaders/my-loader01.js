/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-04-12 10:40:43
 * @LastEditors: camus
 * @LastEditTime: 2021-04-12 14:13:14
 */

const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");

const schema = require("../hy-schema/loader01-schema.json");

// NormalLoader
// 异步Loader: this.async()
module.exports = function (content) {
  console.log(content, "哈哈哈, 这是我的loader01");

  // 获取传入的参数:
  const options = getOptions(this);
  console.log("传入的参数是:", options);

  validate(schema, options, {
    name: "hy-loader02",
  });

  const callback = this.async();

  setTimeout(() => {
    callback(null, content);
  }, 2000);
};

// 同步Loader
// module.exports = function(content) {
//   console.log(content, "哈哈哈, 这是我的loader01");
//   setTimeout(() => {
//     this.callback(null, content);
//   }, 2000);

//   // 同步的loader, 两种方法返回数据
//   // return content;
//   // this.callback(null, content);
// }

// PitchLoader
module.exports.pitch = function () {
  console.log("loader pitch 01");
};

// const { getOptions } = require("loader-utils");
// // 引入校验方法
// const { validate } = require("schema-utils");
// // 引入校验文件
// const schema = require("../my-schema/loader01-schema.json");

// module.exports = function (content) {
//   // 设置为异步loader
//   const callback = this.async();
//   // 获取参数
//   const options = getOptions(this);
//   // 使用校验方法校验
//   validate(schema, options);
//   setTimeout(() => {
//     console.log("我是异步loader", content, options);
//     callback(null, content);
//   }, 1000);
// };
