//하나의 모듈 가져오기
// import connect from "./es6Module1.js";
// const result = connect();
// console.log(result);

//여러가지모듈 방법1, 방법2 로 가져오기(동일함)
import { add, subtract, multiply } from './es6Module2.js';
console.log(add(5, 6));
console.log(subtract(10, 2));
console.log(multiply(6, 7));

//여러가지모듈 방법3
// import calculator from "./es6Module2.js";
// console.log(calculator.add(1, 3));
// console.log(calculator.subtract(6, 3));
// console.log(calculator.multiply(5, 8));

///////////주의/////////////
/**
 * es6 사용시 package.json에 "type": "module" 필수!
 */
