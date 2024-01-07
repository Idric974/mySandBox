const mysql = require('mysql');

var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '475HwuPVTf3eT56bG4hv',
    port: 3306,
    database: 'mydatabase',
});

db.connect(function (err) {
    if (err) throw err;
    //
    console.log('Connexion à la base de donnée réussie');



    let sql = 'DROP TABLE users';
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table suprimées', result);
    });
});
