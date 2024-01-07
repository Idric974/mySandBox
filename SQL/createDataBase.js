const mysql = require('mysql');

var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '475HwuPVTf3eT56bG4hv',
    port: 3306,

});

db.connect(function (err) {

    if (err) throw err;

    console.log('Connecté à la base de données MySQL!');

    db.query('CREATE DATABASE myDataBase', function (err, result) {

        if (err) throw err;

        console.log('Base de données créée !', result);
    });
});

