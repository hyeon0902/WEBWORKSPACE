require('dotenv').config({ path : './db/mysql.env'}); // mysql 폴더에 있는 .env 파일을 찾아서 적용 
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb' //  최대 50메가
}));

app.listen(3000, ()=>{
    console.log('Server Start');
});


app.get('/customers', async(req, res) =>{ // 조회
    let list = await mysql.query('customerList');
    res.send(list);
});

app.get('/customers/:id', async(req, res) =>{ // 단건 조회
    let id = req.params.id;
    let info = await mysql.query('customerInfo',id);
    res.send(info);
});


app.post('/customers', async(req, res) => {  // 등록
    let data = req.body.param;
    let result = await mysql.query('customerInsert',data);
    res.send(result);
});

app.put('/customers/:id', async(req, res) => {  // 수정
    let datas = [req.body.param, req.params.id];
    let result = await mysql.query('customerUpdate',datas);
    res.send(result);
});

app.delete('/customers/:id', async(req, res) => { // 삭제
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});