var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "meetupapp",
  password: "pass",
  database: "meetupapp"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE login (id INT AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(255), password VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
