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

    //! Créer un utilisateur.

    let sql =
        'CREATE TABLE users (id int auto_increment, firstName TEXT, lastName TEXT, email TEXT, phone TEXT, msg TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, primary key(id))';
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table gestion_airs créé : ', result);
    });

    //! ---------------------------------------------

});