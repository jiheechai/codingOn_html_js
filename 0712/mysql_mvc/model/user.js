require('dotenv').config();
const { query } = require('express');
const mysql = require('mysql2/promise');

const getConn = async () => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYUSER,
        password: process.env.PASS,
        database: process.env.DATA,
    });
};

const userSignup = async(userid, name, pw) => {
    const conn = await getConn(); //mysql접속
    //회원정보의 id를 조회
    const flagQuery = 'SELECT userid from user_mvc';
    const [flagResult] = await conn.query(flagQuery);
    console.log("model 회원가입 flagResult : ", flagResult);
    console.log(flagResult.length);
    for(let i = 0; i < flagResult.length; i++) {    
        //if(id값이 존재한다면) {가입을 불가}
        if(userid === flagResult[i].userid) {
            await conn.end();
            return null;
        }
    }
    //else {회원가입}
    const query = 'INSERT INTO user_mvc (userid, name, pw) VALUES (?, ?, ?)';
    const [result] = await conn.query(query, [userid, name, pw]);
    console.log('model signup', result);
    await conn.end();
    return result;
}

const userLogin = async(userid, pw) => {
    const conn = await getConn();
    const query = 'SELECT * FROM user_mvc WHERE userid = ? AND pw = ?';
    const [row] = await conn.query(query, [userid, pw]);
    console.log('model login', row);
    await conn.end();
    return row;
}

const userInfo = async(id) => {
    const conn = await getConn();
    const query = 'SELECT * FROM user_mvc WHERE id = ?';
    const [row] = await conn.query(query, [id]);
    console.log('model info :', row);
    await conn.end();
    return row;
}

const userUpdate = async(name, pw, userid) => {
    const conn = await getConn();
    const query = 'UPDATE user_mvc SET name = ?, pw = ? WHERE userid = ?';
    const [result] = await conn.query(query, [name, pw, userid]);
    console.log('model update :', result);
    await conn.end();
    return result;
}

const userDelete = async (id) => {
    const conn = await getConn();
    const query = 'DELETE FROM user_mvc WHERE id = ?'
    const [result] = await conn.query(query, [id]);
    console.log('model delete :', result);
    await conn.end();
    return result;
}

const userAll = async() => {
    const conn = await getConn();
    const query = 'SELECT id, userid, name FROM user_mvc';
    const [row] = await conn.query(query);
    console.log('model all: ', row);
    await conn.end();
    return row;
}
module.exports = {userSignup, userLogin, userInfo, userUpdate, userDelete, userAll};