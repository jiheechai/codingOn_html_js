//하나의 모듈 파일에 하나의 모듈 만들기 (es6)
const a = 10;
const b = 20;

function connect() {
    return a + b;
}

//여기가 변경
//export 내보낼게 단 한개일때만 default를 쓴다.
export default connect;