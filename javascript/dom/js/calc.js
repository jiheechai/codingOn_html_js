// alert("testing");

function calc(){
    let v1 = document.getElementById("v1");
    let v2 = document.getElementById("v2");
    let op = document.getElementById("op");
    let res = document.getElementById("res");
    // console.log(v1, v2, op);

    // v1Val, v2Val, opVal => string(문자형)
    let v1Val = v1.value;
    let v2Val = v2.value;
    let opVal = op.value;
    // let resVal = res.value;    resVal은 작동x
    console.log(typeof(v1Val), typeof(v2Val), typeof(opVal));

    // 숫자(정수, 실수)로 형변환
    v1Val = Number(v1Val);
    v2Val = Number(v2Val);

    let result = 0; //계산 결과값
    switch(opVal){
        case '+':
            result = v1Val + v2Val;
            break;
        case '-':
            result = v1Val - v2Val;
            break;
        case '*':
            result = v1Val * v2Val;
            break;
        case '/':
            result = v1Val / v2Val;
            break;
    }

    // 계산된 결과(result) 결과 input에 출력
    res.value = result;
    console.log(result);
}

// 취소(초기화). 빈 문자열로 초기화한다.
function reset() {
    let v1 = document.getElementById("v1").value="";
    let v2 = document.getElementById("v2").value="";
    let op = document.getElementById("op").value="";
    let res = document.getElementById("res").value="";
}
