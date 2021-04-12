/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-04-12 10:40:43
 * @LastEditors: camus
 * @LastEditTime: 2021-04-12 14:13:07
 */
// 引入marked方法，将markdown文件转换为字符串
const marked = require("marked");
// 高亮代码方法
const hljs = require("highlight.js");

module.exports = function (content) {
  //marked.setOptions配置转换的时候为代码添加对应的高亮样式类
  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value;
    },
  });
  // 可以通过html-loader对普通字符串进行转换，也可以自己转成js字符串
  const htmlContent = marked(content);
  // 手动转换为js字符串
  const innerContent = "`" + htmlContent + "`";
  const moduleCode = `var code=${innerContent}; export default code;`;
  return moduleCode;
};
