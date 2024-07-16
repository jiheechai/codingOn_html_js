const { Post } = require('../models');
const { Op } = require('sequelize');

//전체글 조회
const all = async (req, res) => {
    const result = await Post.findAll({
        //attributes : 원하는 컬럼 조회
        attributes : ['id', 'title', 'content', 'createdAt'],
        //Op.lte(이하), Op.gte(이상), Op.gt(초과), Op.lt(미만)
        // where : {id: { [Op.lte] : 3 } },

        //Op.or(또는), Op.ne(같지 않음), Op.in(배열 요소중 하나), Op.notIn(배열요소와 모두 다름)
        // where : {id : { [Op.in] : [1, 3]}},
        // where : { [Op.or]: [{id:4}, {title:'안녕하세요'}]},

        //orderby
        order : [['id', 'desc']],
        // limit : 2, //최대 2개 출력
        // offset : 2 //3개 제거하고 출력
    });
    

    //console.log(res);
    res.json({ result : true, data : result });
}
//글 하나 생성
const write = async (req, res) => {
    const { title, content } = req.body;
    //mysql : insert into posts (title, content) values (title, content)
    const result = await Post.create({ title, content });
    console.log('write : ', result);
    res.json({result : true, data : result.id});
};

//글 하나 조회
const one = async(req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({where : { id:req.params.id }});
    console.log('one', result);
    res.json({result:true, data : result});
};

//글 하나 수정
const updateFunc = async(req, res) => {
    //req.body.id, req.body.title, req.body.content
    const {id, title, content} = req.body;
    //update : ({수정할 값}, {where : {어떤것을}})
    const result = await Post.update({title, content}, {where : {id}});
    console.log('update : ', result);
    res.json({result : true});
}

//글 하나 삭제
const deleteFunc = async(req, res) => {
    const result = await Post.destroy({ where : {id : req.body.id} });
    console.log("delete : ", result);
    if(result == 1) {
        res.json({result : true});
    } else {
        res.json({result : false});
    }
    
}

module.exports = { all, write, one, updateFunc, deleteFunc };