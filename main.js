var express = require('express');
var app = express();

var sqlite3 = require('sqlite3').verbose();
app.get('/',function(res,req){
    var file = "/home/fit/dbsql/bookdb";
    var db = new sqlite3.Database(file);
    db.all("SELECT bookname,bookid FROM booktb", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.bookname, row.bookid);
        })
	});	
    db.close();
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
