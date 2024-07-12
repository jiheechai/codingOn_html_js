const userModel = require('../model/user');

//post signup 회원가입
const userSignup = async(req, res) => {
    const { id , pw, name, gender, birthday, age} = req.body;
    const data = await userModel.userSignup(id, pw, name, gender, birthday, age);
    console.log('data', data);

    const result = {
        result: true,
        id,
        pw,
        name,
        gender,
        birthday,
        age,
    };
    res.json(result);
}

//POST /login  로그인
const userLogin = async(req, res) => {
    const {id,pw} = req.body;
    const data = await userModel.userLogin(id, pw);

    if(data.length > 0) {
        res.json({result : true, message: "로그인 성공", id : data[0].id});
    }
    else {
        res.json({result: false, message: "로그인 실패", id : null});
    }
}
//GET /info 회원정보
const userInfo = async(req, res) => {
    // const 
}
//PATCH /update 회원수정

//DELETE /delete 회원삭제

//GET /all 회원전체정보

module.exports = { userSignup, userLogin };