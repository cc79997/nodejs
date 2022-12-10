
const fs = require('fs');

let p = new Promise((resolve, reject) => {
    fs.readFile('te3st.txt', 'utf-8', (err, data) => {
        if (err) {
            reject('發生錯誤了 '+ err)
        } else {
            resolve('成功'+ data)
        }
    })
});

console.log(p)

p.then((data) => {
    console.log('then => ', data, p)
}).catch((error) => {
    console.error('catch => ', error, p)
})