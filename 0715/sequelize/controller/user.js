// const userModel = require('../model/user');
const { User } = require('../models');

//회원가입
const signup = async (req, res) => {
    // console.log('요청값:', req.body);
    const { userid, name, pw } = req.body;
    // const result = await userModel.signup(userid, name, pw);
    // res.json({ result: true });
    const result = await User.create({ userid, name, pw});
    console.log('signup : ', result);
    res.json({result : true, data : result.id});
};
//로그인
const login = async (req, res) => {
    console.log('요청값:', req.body);
    const { userid, pw } = req.body;
    // const result = await userModel.login(userid, pw);
    const result = await User.findOne({where : {userid, pw}});
    console.log('login', result);
    if(result == null) {
        res.json({result  : false, data:null});
    } else {
        res.json({result : true, id:result.id});
    }
    
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
    res.json({ result: true });
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
