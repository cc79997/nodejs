// 1. 安裝 npm i axios
// 2. 引用 require
// 3. 去讀官方文件

const axios = require('axios');
const fs = require('fs/promises');
const moment = require('moment');

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211

(async () => {
    try {
        let stockNo = await fs.readFile('stock.txt', 'utf-8')
        let date = moment().format('YYYYMMDD')
        
        const response = await axios.get(`http://54.71.133.152:3000/stocks`, {
            params: {
                stockNo,
                date
            }
        })
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
})() 
