
// var mysql = require('mysql');
// var express = require('express');
// var app = express();
//
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "meetupapp",
//   password: "pass",
//   database: "meetupapp"
//
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE login (id INT AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(255), password VARCHAR(255))";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... nn");
// } else {
//     console.log("Error connecting database ... nn");
// }
// });
//
// app.post('/create', (req, res) => {
//   // Get sent data.
//   var user = req.body;
//   // Do a MySQL query.
//   var query = connection.query('INSERT INTO login SET ?', user, (err, result) => {
//     console.log(result)
//   });
//   res.end('Success');
// });
//
// app.listen(2000, () => {
//   console.log('Example app listening on port 3306!');
// });
