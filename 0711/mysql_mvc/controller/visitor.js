const visitorModel = require('../model/visitor');

//전체 방명록 조회
const allVisitor = async (req, res) => {
    const data = await visitorModel.allVisitor();
    console.log('cont', data);
    res.json({ result: data });
};
//get방명록 하나 조회
const getVisitor = async (req, res) => {
    console.log(req.params.id);
    const data = await visitorModel.getVisitor(req.params.id);
    console.log(data);
    res.json({ result: data });
};
//post방명록 하나 등록
const postVisitor = async(req, res) => {
    console.log(req.body);
    const {name, comment} = req.body;
    const data = await visitorModel.postVisitor(name, comment);
    const result = {
        result:true,
        id: data.insertId,
        name, 
        comment,
    };
    res.json(result);
};
//patch 방명록 하나 수정
const patchVisitor = async(req, res) => {
    console.log(req.body);
    const {id, name, comment} = req.body;
    const data = await visitorModel.patchVisitor(id, name, comment);
    if(data.affectedRows === 0) {
        res.json({ result:false });
    } else {
        res.json({ result:true });
    }
};
//delete 방명록 하나 삭제
const deleteVisitor = async(req, res) => {
    console.log(req.body);
    const data = await visitorModel.deleteVisitor(req.body.id);
    if(data.affectedRows === 0) {
        res.json({ result:false });
    } else {
        res.json({ result:true });
    }
}

module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };
