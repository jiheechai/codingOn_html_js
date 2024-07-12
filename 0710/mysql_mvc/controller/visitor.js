const visitorModel = require('../model/visitor');

//전체 방명록 조회
const allVisitor = async(req, res) => {
    const data = await visitorModel.allVisitor();
    console.log("controller: ", data);
};

//방명록 하나 조회
const getVisitor = async(req, res) => {
    console.log(req.params.id);
    const data = await visitorModel.getVisitor(req.params.id);
    console.log(data);
    res.json({result:data});
};

module.exports = { allVisitor, getVisitor };