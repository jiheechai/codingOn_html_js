/*
    if(조건식 1) {
        조건식1이 true이면 실행.
        } else if(조건식 2) {
        조건식2가 true이면 실행.
        } else {
        조건식 1,2가 모두 false이면 실행
        }
*/
// alert("testing...");

// 나이에 따른 구분
let age = prompt("나이를 입력하세요.");
let charge = 0;
if (age >= 20) {
    // 20세 이상 일반인 : 3000원
    charge = 3000;
    document.write("20세 이상 일반인은 3000원 입니다.<br>");
} else if(age >= 14) {
    // 중, 고등학생 : 2500원
    // age >= 14 && age <= 19
    charge = 2500;
    document.write("14세 이상 19세 이하 중,고등학생은 2500원 입니다.<br>");
} else if(age >= 8) {
    // 초등학생 : 2000원
    // age >= 8 && age <= 13
    charge = 2500;
    charge = 2000;
    document.write("8세 이상 13세 이하 초등학생은 2000원 입니다.<br>");
} else {
    // 미취학 아동 : 1000원
    // age <= 7
    charge = 2500;
    charge = 1000;
    document.write("7세 이하 미취학아동은 1000원 입니다.<br>");
}
document.write("<br>나이 : " + age + ", 가격 : <span class='access'>" + charge + "원</span> 입니다.");