//하나의 모듈 파일에 하나의 모듈 만들기 (common js)
const a = 10;
const b = 20;

function connect() {
    return a + b;
}

//connect 함수를 내보낸다.
module.exports = connect;
