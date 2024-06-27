// alert("test")
// date 객체 생성 -today
//
let today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();
let day2 = "";
switch (day1) {
    case 0:
        day2 = "일요일";
        break;
    case 1:
        day2 = "월요일";
        break;
    case 2:
        day2 = "화요일";
        break;
    case 3:
        day2 = "수요일";
        break;
    case 4:
        day2 = "목요일";
        break;
    case 5:
        day2 = "금요일";
        break;
    case 6:
        day2 = "토요일";
        break;
}
// display 변수 선언
let displayDate = document.getElementById("today");
// innerHTML 속성은 태그와 글자를 저장할 수 있음.
displayDate.innerHTML = `<h3>${year}년 ${month}월 ${date}일 ${day2}</h3>`;
let clock = function () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // 오전, 오후로 분기하기
    hours = (hours < 10) ? "0" + hours : hours;
    hours = (hours > 12) ? "오후" + hours-12 :hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let displayTime = document.getElementById("clock");
    displayTime.innerHTML = `<h3>${hours} : ${minutes} : ${seconds}</h3>`;
}
setInterval(clock, 1000);