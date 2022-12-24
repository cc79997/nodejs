const express = require('express');
// 利用 express 這個框架建立一個 web app
const app = express();

// 設定 express 處理靜態檔案
// -> express 內建 -> 不需要安裝任何東西
// localhost:3001/
// app.use(express.static('./static'));
// localhost:3001/2048/
app.use('/2048', express.static('./2048'));

// app.[Method]
// get post put patch delete option head
// 中間件
app.use((req, res, next) => {
    console.log('中間件A');
    req.dt=new Date().toISOString()
    next();
});
app.use((req, res, next) => {
    console.log('中間件B');
    next();
});

// 路由中間件
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/a', (req, res)=>{
    // 一些直可以從前面的中間件傳遞過來
    console.log(req.dt)
    res.send('a網頁的respons')
})

app.listen(3001, () => {
    console.log('server is running at 3001');
});
