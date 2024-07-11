require('dotenv').config();
const mysql = require('mysql2/promise');
//mysql연결
const getConn = async () => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYUSER,
        password: process.env.PASS,
        database: process.env.DATA,
    });
};

//쿼리문
const allVisitor = async () => {
    const conn = await getConn(); //mysql접속
    const query = 'SELECT * FROM visitor';
    const [row] = await conn.query(query);
    console.log('model', row);
    await conn.end();
    return row;
};

const getVisitor = async (id) => {
    const conn = await getConn();
    //방법1
    /**
     * 단점
     * 1. sql 인젝션 공격에 취약
     * 2. 문자열 특수문자가 포함될 경우 오류가 발생될 수도 있음
     * 보안하는 방법 prepared statement
     * => SELECT * FROM visitor WHERE id = ?
     */
    // const query = `SELECT * FROM visitor WHERE id = ${id}`;
    // const [row] = await conn.query(query);
    const query = 'SELECT * FROM visitor WHERE id = ?';
    const [row] = await conn.query(query, [id]);


    console.log('model', row);
    await conn.end();
    return row;
};

const postVisitor = async(name, comment) => {
    const conn = await getConn();
    const query = 'insert into visitor (name, comment) values (?, ?)';
    const [result] = await conn.query(query, [name, comment]);
    console.log('model', result);
    await conn.end();
    return result;
};

const patchVisitor = async(id, name, comment) => {
    const conn = await getConn();
    const query = 'update visitor set name=?, comment=? where id=?' 
    const [result] = await conn.query(query, [name, comment, id]);
    console.log('result: ', result);
    await conn.end();
    return result;
};

const deleteVisitor = async(id) => {
    const conn = await getConn();
    const query = 'delete from visitor where id = ?';
    const [result] = await conn.query(query, [id]);
    console.log('result: ', result);
    await conn.end();
    return result;
};

module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };
