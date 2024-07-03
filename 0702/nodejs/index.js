//module1.js
const connect1 = require('./module1');
const result = connect1();
console.log(result);

//module2.js
const calculator = require('./module2'); //.js(확장자) 생략 가능
console.log(calculator.add(1, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(5, 8));

//module2.js 객체구조분해할당
const { add, subtract, multiply } = require('./module2');
console.log(add(5, 6));
console.log(subtract(10, 2));
console.log(multiply(6, 7));