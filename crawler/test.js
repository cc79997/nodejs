const mysql2 = require('mysql2/promise');
require('dotenv').config();
// let dotenv = require('dotenv');
// dotenv.config();

(async () => {
    // create the connection to database
    const connection = await mysql2.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });

    // simple query
    let result = await connection.query('SELECT * FROM `stocks`');

    console.log(result[0])

    connection.end()
})()

