require('dotenv').config();
const mysql = require('mysql2/promise');
//mysql 연결
const getConn = async() => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATA,
    });
};

//쿼리문
const allVisitor = async () => {
    const conn = await getConn(); //mysql접속
    const query = 'SELECT * FROM visitor';
    const [row] = await conn.query(query);
    console.log("model: ", row);
    await conn.end();
    return row;
}

module.exports = { allVisitor };