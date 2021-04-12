/*
 * @Description: 
 * @version: 
 * @Author: camus
 * @Date: 2021-04-12 10:40:43
 * @LastEditors: camus
 * @LastEditTime: 2021-04-12 10:42:46
 */
module.exports = function(content) {
  console.log(content, "哈哈哈, 这是我的loader03");
  return content;
} 

module.exports.pitch = function() {
  console.log("loader pitch 03");
}
