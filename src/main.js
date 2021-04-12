/*
 * @Description: 
 * @version: 
 * @Author: camus
 * @Date: 2021-04-12 10:40:43
 * @LastEditors: camus
 * @LastEditTime: 2021-04-12 10:42:33
 */
import code from "./doc.md";
import "./style.css";
import "highlight.js/styles/default.css";

console.log("Hello Loader");

const message = "Hello World";
console.log(message);

const foo = () => {
  console.log("foo");
}

foo();

document.body.innerHTML = code;
