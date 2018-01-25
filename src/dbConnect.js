
var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
  host: "localhost:3306",
  user: "meetupapp",
  password: "pass",
  database: "meetupapp"

});

/*connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE login (id INT AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(255), password VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/


app.post('/users', (req, res) => {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  var query = connection.query('INSERT INTO users SET ?', user, (err, result) => {
    console.log(result)
  });
  res.end('Success');
});

app.listen(3306, () => {
  console.log('Example app listening on port 3306!');
});
