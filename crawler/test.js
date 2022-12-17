const mysql2 = require('mysql2/promise');

(async () => {
    // create the connection to database
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'stock_mfee31'
    });

    // simple query
    let result = await connection.query('SELECT * FROM `stocks`');

    console.log(result[0])

    connection.end()
})()

