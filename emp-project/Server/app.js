const express = require('express');
require('dotenv').config({ path : 'db/mysql.env'})
const mysql = require("./db.js");
const app = express();

app.use(express.json({
    limit : '50mb'
}))

app.listen(3000, ()=>{
    console.log('서버 실행,고고씽 http://localhost:3000');
})

app.get("/emps", async (req, res) => {  // 전체조회
    const list = await mysql.query('employeesList');
    console.log(list);
    res.send(list);
})

app.get("/emps/:id", async(req, res) =>{  // 단건조회
    let id = req.params.id;
    let list = await mysql.query('employeesInfo', id);
    res.send(list);
})

app.post("/emps", async(req, res) =>{  // emp 등록
    console.log(req.body)
    const result = await mysql.query('empInsert', req.body.param);
    res.send(result);
})

app.post("/deptemp", async(req, res) =>{  // deptemp 등록
    console.log(req.body)
    const result = await mysql.query('deptempInsert', req.body.param);
    res.send(result);
})

app.post("/salary", async(req, res) =>{ // salary 등록
    console.log(req.body)
    const result = await mysql.query('salaryInsert', req.body.param);
    res.send(result);
})

app.put('/emps', async(req, res) =>{  // 사원 수정
    const result = await mysql.query('employeesUpdate', req.body.param);
    res.send(result);
})

app.delete('/emps', async(req, res)=>{ // 사원 삭제
    const result = await mysql.query('employeesDelete', req.body.param);
    res.send(result);
})