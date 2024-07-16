// const userModel = require('../model/user');
const { User } = require('../models');

//회원가입
const signup = async (req, res) => {
    // console.log('요청값:', req.body);
    const { userid, name, pw } = req.body;
    // const result = await userModel.signup(userid, name, pw);
    // res.json({ result: true });

    //존재 여부 확인
    const find = await User.findOne({where : {userid}});
    if(find) {
        res.json({result : false, message : "이미 존재하는 회원"});
    } else {
        const result = await User.create({ userid, name, pw});
        console.log('signup : ', result);
        res.json({result : true, data : result.id});
    }
};

//로그인
const login = async (req, res) => {
    console.log('요청값:', req.body);
    const { userid, pw } = req.body;
    // const result = await userModel.login(userid, pw);

    //회원 존재 여부
    const find = await User.findOne({where : {userid}});
    // console.log('login', result);
    console.log(find);

    if(find) {
        if(find.pw === pw){
            res.json({result : true, data : find, message : "로그인 성공", id:find.id})
        } else {
            res.json({result : false, data : null, message : "비밀번호가 틀렸습니다."});
        }
    } else {
        res.json({result : false, data : null, message : "회원이 아닙니다."});
    }
    
    // const result = await User.findOne({where : {pw}});
    
    // if(result == null) {
    //     res.json({result  : false, message : "비밀번호가 맞지 않습니다."});
    // } else {
    //     res.json({result : true, id:result.id});
    // }
    
};
//회원정보 한명 조회
const info = async (req, res) => {
    console.log('요청값', req.params.id);
    // const result = await userModel.info(req.params.id);
    const result = await User.findOne({where : {id:req.params.id}});
    res.json({result:true, info:result});
};
//회원정보 수정
const update = async (req, res) => {
    console.log('요청값', req.body);
    const { id, name, pw } = req.body;
    // const result = await userModel.update(id, name, pw);
    const result = await User.update({name, pw}, {where : {id}})
    console.log('update : ', result);
    res.json({ result: true});
};
//회원정보 삭제
const deleteFunc = async (req, res) => {
    console.log('요청값', req.body);
    // const result = await userModel.deleteFunc(req.body.id);
    const result = await User.destroy({where:{id : req.body.id}});
    console.log("result: ", result);
    res.json({id : result});
};
//회원 전체 정보
const all = async (req, res) => {
    //const result = await userModel.all();
    const result = await User.findAll();
    console.log(result);
    res.json({ result });
};

module.exports = { signup, login, info, update, deleteFunc, all };
