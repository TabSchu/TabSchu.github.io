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

    app.get('/beitrag/newest', function (req, res) {

        const sql = "SELECT b.*, s.sportart, k.kategorie FROM beitrag b\n" +
            "JOIN sportart s ON b.sport = s.id_sportart\n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie \n" +
            "WHERE b.id_beitrag=1;"; //"ORDER BY id_beitrag DESC LIMIT 1;";
        pool.query(sql, function (error, results, fields) {
            if (error) throw error;
            res.send(results);

        });
    });

    //beitragBySubsportart?subsportart=1&medientyp=Artikel
        app.get('/beitragBySubsportart', function (req, res) {
            const subsportart = req.query.subsportart;
            const medientyp = req.query.medientyp;
            const sql = "SELECT DISTINCT b.*, s.sportart, k.kategorie FROM beitrag b\n" +
                "JOIN sportart s ON b.sport = s.id_sportart\n" +
                "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie\n" +
                "JOIN beitrag_subsportart sb ON sb.fk_beitrag = b.id_beitrag\n" +
                "WHERE sb.fk_subsportart=? AND b.typ=?  ; ";
            const value = [subsportart, medientyp ];
            pool.query(sql, value,
                function (error, results, fields) {
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

    //http://localhost:8080/beitragByThemenbereich?themenbereich=6
    app.get('/beitragByThemenbereich', function (req, res) {
        const themenbereich = req.query.themenbereich; //[6,4,10];
        console.log(themenbereich);
        const sql = 'SELECT * FROM BAP_Sportbericht_Plattform_DB.beitrag b\n' +
            'JOIN  BAP_Sportbericht_Plattform_DB.beitrag_themenbereich bt \n' +
            'ON b.id_beitrag = bt.fk_beitrag\n' +
            'WHERE bt.fk_themenbereich=?;';
        const value = [themenbereich];
        pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

//http://localhost:8080/beitragFromMerklisteByUserID?user_id=1
app.get('/beitragFromMerklisteByUserID', function (req, res) {
    const fk_user_id = req.query.user_id; //[6,4,10];
    console.log(fk_user_id);
    const sql =  "SELECT b.*, s.sportart, k.kategorie FROM beitrag b \n" +
            "JOIN sportart s ON b.sport = s.id_sportart \n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie \n" +
            "JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
            "WHERE m.fk_user_id=? ORDER BY date_added DESC;";
    const value = [fk_user_id];
    pool.query(sql, value,
        function (error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
});



    //
    app.get('/subsportart', function (req, res) {
        const sql = 'SELECT * FROM sub_sportart;';
        pool.query(sql,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    app.get('/person', function (req, res) {
        // TODO: filter param fk_person_group
        const fk_person_group = 1;
        const sql = 'SELECT * FROM person WHERE fk_person_group = ?;';
        const value = [fk_person_group];
        pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    app.get('/themenbereich', function (req, res) {
        const sql = 'SELECT * FROM themenbereich;';
        pool.query(sql,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    //http://localhost:8080/themenbereichByTags?tags[]=10&tags[]=6
    app.get('/themenbereichByTags', function (req, res) {
        const tags = req.query.tags;
        console.log(tags);
        let sql;
        let  value = [];

        if(tags && tags.length>0){
             sql = 'SELECT DISTINCT t.* FROM themenbereich t \n' +
                'JOIN themenbereich_tag  tt ON t.id_themenbereich = tt.fk_themenbereich_id \n' +
                'WHERE fk_tag_id IN (?) ;';
             value = [tags];
        }else{
             sql = 'SELECT DISTINCT * FROM themenbereich ;';

        }
        pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

