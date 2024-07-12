require('dotenv').config();
const { query } = require('express');
const mysql = require('mysql2/promise');
//mysql연결
//방법1 : getConn
/**방법2 : createPool
 * 
*/
const getConn = async () => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYUSER,
        password: process.env.PASS,
        database: process.env.DATA,
    });
};

const userSignup = async(id, pw, name, gender, birthday, age) => {
    //회원정보의 id를 조회
    //if(id값이 존재한다면) {가입을 불가}
    //else {회원가입}
    
    const conn = await getConn(); //mysql접속
    const query = 'INSERT INTO user (id, pw, name, gender, birthday, age) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await conn.query(query, [id, pw, name, gender, birthday, age]);
    console.log('model signup', result);
    await conn.end();
    return result;
}

const userLogin = async(id, pw) => {
    const conn = await getConn();
    const query = 'SELECT * FROM user WHERE id = ? AND pw = ?';
    const [row] = await conn.query(query, [id, pw]);
    console.log('model login', row);
    await conn.end();
    return row;
}

module.exports = {userSignup, userLogin};