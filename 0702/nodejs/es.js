//module3.js
// import connect from './module3.js' //여기서는 .js생략 불가능
// const result = connect();
// console.log(result);


//module4.js
//여러가지 모듈 방법1, 방법2
// import {add, subtract, multiply} from './module4.js'
// console.log(add(5, 6));
// console.log(subtract(10, 2));
// console.log(multiply(6, 7));

//방법3(한번에 내보내기)
import calculator from './module4.js';
console.log(calculator.add(1, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(5, 8));