require('dotenv').config({ path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}))

app.listen(3000, ()=>{
    console.log('서버 실행');
})

app.get('/', (req,res)=>{
    res.sendFile('/dist/index.html');
})

app.get('/users', async(req, res) => {
    let list = await mysql.query('userList');
    res.send(list);
})

app.get('/users/:id', async(req, res) => {
    let id = req.params.id;
    let list = await mysql.query('userInfo', id);
    res.send(list);
})

app.post('/users', async(req, res) => {
    let data = req.body.param;
    let insert = await mysql.query('userAdd', data);
    res.send(insert);
})

app.put('/users/:id', async(req, res) =>{
    let datas = [req.body.param, req.params.id];
    let modify = await mysql.query('userModify', datas);
    res.send(modify);
})

app.delete('/users/:id', async(req, res) => {
    let id = req.params.id;
    let result = await mysql.query('userDelete', id);
    res.send(result);
});