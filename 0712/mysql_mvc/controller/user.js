const userModel = require('../model/user');

//post signup 회원가입
const userSignup = async(req, res) => {
    const {userid, name, pw} = req.body;
    const data = await userModel.userSignup(userid, name, pw);
    console.log('data', data);

    if(data == null) {
        res.json({result : false, message : "사용중인 id입니다."});
    } else {
        res.json({result : true, message : "회원가입성공!"});
    }
}   

//POST /login  로그인
const userLogin = async(req, res) => {
    const {userid, pw} = req.body;
    const data = await userModel.userLogin(userid, pw);

    if(data.length > 0) {
        res.json({result : true, message: "로그인 성공", id : data[0].id});
    }
    else {
        res.json({result: false, message: "로그인 실패", id : null});
    }
}
//GET /info 회원정보
const userInfo = async(req, res) => {
    const id = req.params.id;
    const data = await userModel.userInfo(id);

    if(data.length > 0) {
        res.json({result : true, message : "회원 정보 조회 성공", info : data});
    } else {
        res.json({result : false, message : "회원 정보 조회 실패"});
    }
}
//PATCH /update 회원수정
const userUpdate = async(req, res) => {
    const {name, pw, id} = req.body;
    const data = await userModel.userUpdate(name, pw, id);

    if(data.affectedRows != 0) {
        res.json({result : true, message : "수정 성공"});
    } else {
        res.json({result : false, message : "수정 실패"})
    }
}
//DELETE /api/user/delete 회원삭제
const userDelete = async(req, res) => {
    const {id} = req.body;
    const data = await userModel.userDelete(id);

    if(data.affectedRows != 0) {
        res.json({result : true, message : "삭제 성공"});
    } else {
        res.json({result : false, message : "삭제 실패"})
    }
}
//GET /all 회원전체정보
const userAll = async(req, res) => {
    const data = await userModel.userAll();
    res.json(data);
}

module.exports = { userSignup, userLogin, userInfo, userUpdate, userDelete, userAll };