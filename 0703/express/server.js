const express = require('express')
const app = express();
const PORT = 8000;

//뷰 템플릿 설정
app.set("view engine", "ejs");
app.set("views", "./views"); //views라는 파일들을 views라는 폴더에 넣을때는 이 줄 생략 가능. default값 이기 때문.

//미들웨어 : 라우터(app.get) 위에 위치해야 함.
//정적파일 셋팅
app.use('/public', express.static(__dirname + '/public'));
//시간값 출력
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next(); //다음 페이지로 진행되게.
})



//라우터 : 분산시켜주는 것.
// "/"는 http://localhost:8000
app.get('/', (req, res) => {
    //send() 클라이언트에 응답 데이터를 보낼때
    res.send({name : "KDT 13기"});
});

// "/kdt"는 http://localhost:8000/kdt
app.get("/kdt", (req, res) => {
    //render() : 뷰 템플릿 랜더링, 템플릿 이름(test.ejs)과 랜더링 이름(test)을 동일해야 함.
    res.render("test", { age: 20 });
});


//라우터 추가
//구구단 "/gugu" http://localhost:8000/gugu
//leng : 변수
app.get("/gugu", (req, res) => {
    res.render('gugudan', { dan : 3, len : [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

// "/fruit" http://localhost:8000/fruit
app.get('/fruit', (req, res) => {
    res.render('fruit', 
        { fruit: [{ name : 'apple', kor : '사과' }, 
                    { name : 'banana', kor : '바나나'}, 
                    { name : 'grapes', kor : '포도'}, 
                    { name : 'peach', kor : '복숭아'}] })
});



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});