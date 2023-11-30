// 전체조회
fetch('http://localhost:3000/posts')
.then(res => res.json())
.then(data => console.log('list', data))
.catch(err => console.log(err));

// 단건조회
fetch('http://localhost:3000/posts/1')
.then(res => res.json())
.then(data => console.log('info', data))
.catch(err => console.log(err));

// 등록
// fetch('http://localhost:3000/posts',{
//     method : 'post',
//     headers : {
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({
//         userId : 2,
//         id : 4,
//         title : 'Have A Nice Day!',
//         body : 'et iusto sed quo iure\n' +
//         'voluptatem occaecati omnis eligendi aut a'
//     })
// })
// .then(res => res.json())
// .then(result => console.log('insert', result));

// 수정
// fetch('http://localhost:3000/posts/4',{
//     method : 'put',
//     headers : {
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({
//         userId : 3,
//         title : 'Hello, world!',
//         body : 'et iusto sed quo iure\n' +
//         'voluptatem occaecati omnis eligendi aut a'
//     })
// })
// .then(res => res.json())
// .then(result => console.log('update', result));

// 삭제
fetch('http://localhost:3000/posts/4',{ method: "DELETE" })
.then(res => res.json())
.then(result => console.log('delete', result));