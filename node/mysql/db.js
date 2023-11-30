const mysql = require('mysql');
const sql = require('./db/sql.js'); // sql 쿼리문이 작성되어 있는 파일
require('dotenv').config({ path : './db/mysql.env'}); // mysql 폴더에 있는 .env 파일을 찾아서 적용 

const pool = mysql.createPool({ // Pool 생성
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
})

const query = async (alias, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql[alias],values, (err, results) =>{
            if(err) {
                console.log(err);
                reject({ err });
            }else {
                resolve(results);
            }
        })
    })
}

module.exports = {
    query
};