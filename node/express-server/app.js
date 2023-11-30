const express = require('express');
const app = express();
const port = 3000

const getData = async()=>{ 
    return await fetch('./db.json')
                .then(res => res.json());
}

let db = getData();

app.get('/', (req, res) =>{
    res.send('Server Connect');
});

app.get('/posts', (req, res) => {
    res.send(db['posts']);
});

app.listen(3000, ()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});

