//server.js
    const SERVER_PORT = 8080;

    var express = require('express');
    var path = require('path');
    var mysql = require('mysql');
    var cors = require('cors');

    var bodyParser = require('body-parser')
    var app = express();
    var index;
    app.use(cors());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())


    app.use(express.static(path.join(__dirname, '/build/'))); //'/dist/zphere-app'

    app.get('/', function(req, res)
    {
        res.sendFile('index.html', {root:__dirname+'/build/'}); //'/dist/zphere-app'
    });

    app.get("/test", (req, res, next) => {
        res.json(["Test","ist","erfolgreich","yeah","Food"]);
    });


    //db on hochschul server
    const pool = mysql.createPool({
        host: "195.37.176.178",
        port: "20133",
        user: "BAPSportberichtPlattform",
        password: 'bflFo#Qi@0O~tq2z.;kVF+VX0;Ddi%^e',
        database: "BAP_Sportbericht_Plattform_DB"
    });

 /*   // local dev db
    const pool = mysql.createPool({
        host: "localhost",
        port: "3306",
        user: "root",
        password: 'password',
        database: "zphere"
    }); */


    var server = app.listen(SERVER_PORT, function (){
        let host = server.address().address,
            port = server.address().port;

        console.log("Zphere Server app listening at http://%s:%s", host, port)
    });

    app.get('/beitrag', function (req, res) {

        const sql = "SELECT b.*, s.sportart, k.kategorie FROM beitrag b\n" +

            "JOIN sportart s ON b.sport = s.id_sportart\n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie;";
        pool.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.send(results);

        });
    });

    //http://localhost:8080/beitragByTags?tags[]=10&tags[]=6
    app.get('/beitragByTags', function (req, res) {
        const tags = req.query.tags; //[6,4,10];
        console.log(tags);
        const sql = 'SELECT DISTINCT b.*, s.sportart, k.kategorie FROM beitrag b JOIN sportart s ON b.sport = s.id_sportart JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie JOIN beitrag_tag bt  ON bt.fk_beitrag_id = b.id_beitrag WHERE fk_tag_id IN (?);';
        const value = [tags];
            pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

