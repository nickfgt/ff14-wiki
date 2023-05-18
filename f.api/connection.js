const mysql = require('mysql');
// const c = mysql.createConnection({
//     host:'127.0.0.1',
//     port:'3306',
//     user:'root',
//     password:'',
//     database:'tedu'
// })
const pool = mysql.createPool({
    host: "127.0.0.1",
    post: "3306",
    user: "root",
    password: "",
    database: "hantang",
    connectionLimit: 15,
    multipleStatements:true,
  });
module.exports=pool