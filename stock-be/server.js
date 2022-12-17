const express = require('express');
// 利用 express 這個框架建立一個 web app
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello World!')
});

app.listen(3001, ()=>{
    console.log('server is running at 3001')
})
