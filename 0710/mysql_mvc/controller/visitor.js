const visitorModel = require('../model/visitor');

//전체 방명록 조회
const allVisitor = async(req, res) => {
    const data = await visitorModel.allVisitor();
    console.log("controller: ", data);
};

module.exports = { allVisitor };