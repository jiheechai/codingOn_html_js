//하나의 모듈 파일에 여러개의 모듈 만들기
//방법1 : 함수 정의 -> export 한번
// function add(x, y){
//     return x + y;
// }
// function subtract(x, y){
//     return x - y;
// }
// function multiply(x, y){
//     return x * y;
// }

//화살표 함수에서는 한줄로 쓸때, { return }은 생략 가능하다.
/*  const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;*/

//여러개의 모듈을 사용할 때는 중괄호를 사용해 객체를 만든다.
//function키워드로 함수를 만들면 module.exports의 위치는 상관 없이 어디든 사용 가능. 호이스팅
//화살표 함수로 작성했을 때는 module.exports는 항상 화살표 함수 아래에 위치해야 함.

// module.exports = {add, subtract, multiply};






// 방법2 : 함수 정의와 export를 동시에. export갯수 = 함수 갯수
// module.exports.add = function(x, y){
//     return x + y;
// }
// module.exports.subtract = (x, y) => {
//     return x - y;
// }
// module.exports.multiply = (x, y) => {
//     return x * y
// }
//방법2의 생략버전 module뺌.
exports.add = (x, y) => x + y;
exports.subtract = (x, y) => x - y;
exports.multiply = (x, y) => x * y;