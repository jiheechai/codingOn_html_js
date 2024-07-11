//하나의 모듈 파일에 여러개의 모듈 만들기(common js)
//방법1

function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;
// const multiply = (x, y) => x * y; //화살표함수는 한줄로 쓸때 {return} 생략가능

//function 키워드를 사용할때는 module.exports의 위치가 상관없지만
//화살표 함수로 작성했을때는 module.exports는 항상 화살표 함수 아래에 위치해야함
module.exports = { add, subtract, multiply };

/*
//방법2
module.exports.add = function (x, y) {
    return x + y;
};
module.exports.subtract = function (x, y) {
    return x - y;
};
module.exports.multiply = function (x, y) {
    return x * y;
};
*/

//방법2의 생략버전
// exports.add = function (x, y) {
//     return x + y;
// };
// exports.subtract = function (x, y) {
//     return x - y;
// };
// exports.multiply = function (x, y) {
//     return x * y;
// };
