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

    // Add a health check route in express
    app.get('/_health', (req, res) => {
        res.status(200).send('ok')
    });

    process.on
    (
        'uncaughtException',
        function (err)
        {
            console.log(err)
            //var stack = err.stack;
            //we could also notify the err/stack to support via email or other APIs
        }
    );

    app.get('/', function(req, res)
    {
        res.sendFile('index.html', {root:__dirname+'/build/'}); //'/dist/zphere-app'
    });

    app.get("/test", (req, res, next) => {
        res.json(["Test","ist","erfolgreich","yeah","Food"]);
    });


   /* //db on hochschul server
    const pool = mysql.createPool({
        host: "195.37.176.178",
        port: "20133",
        user: "BAPSportberichtPlattform",
        password: 'bflFo#Qi@0O~tq2z.;kVF+VX0;Ddi%^e',
        database: "BAP_Sportbericht_Plattform_DB"
    });*/

    //von Andy
    const pool = mysql.createPool({
        host: "192.168.110.143",
        port: "3306",
        user: "radiobremen",
        password: 'N%20daSi',
        database: "radiobremen"
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
    app.get('/beitrag/:beitragid', function (req, res) {
        const beitragid = req.params.beitragid;
        const sql = "SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b\n" +
            "JOIN sportart s ON b.sport = s.id_sportart\n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie\n"+
            "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
            "where id_beitrag = ?"
        pool.query(sql,beitragid, function (error, results, fields) {
            if (error) throw error;
            res.send(results);

        });
    });

    app.get('/person/:personid', function (req, res) {
        const personid = req.params.personid;
        const sql = 'SELECT * FROM person WHERE id_person=?;';
        pool.query(sql,personid, function (error, results, fields) {
            if (error) throw error;
            res.send(results);

        });
    });


    app.get('/beitragTopstory', function (req, res) {
        let sql;
        let  value = [];

        // mit filter tags (auf Seite explore)
        if(req.query.tags && req.query.tags.length>0) {
            sql = "SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b\n" +
                "JOIN sportart s ON b.sport = s.id_sportart\n" +
                "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie " +
                'JOIN beitrag_tag bt  ON bt.fk_beitrag_id = b.id_beitrag ' +
                "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
                "WHERE fk_tag_id IN (?) ORDER BY id_beitrag DESC LIMIT 1;";
            const tags = req.query.tags;
            value = [tags];
        } else {
            sql = "SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b\n" +
                "JOIN sportart s ON b.sport = s.id_sportart\n" +
                "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie " +
                "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
                "WHERE b.id_beitrag=1;"; //"ORDER BY id_beitrag DESC LIMIT 1;";
        }


        pool.query(sql, value,function (error, results, fields) {
            if (error) throw error;
            res.send(results);

        });
    });

app.get('/beitragTodaysSpecial', function (req, res) {
    let sql;
    let  value = [];

    // mit filter tags (auf Seite explore)
    if(req.query.tags && req.query.tags.length>0) {
        sql = "SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b\n" +
            "JOIN sportart s ON b.sport = s.id_sportart\n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie " +
            'JOIN beitrag_tag bt  ON bt.fk_beitrag_id = b.id_beitrag ' +
            "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
            "WHERE fk_tag_id IN (?) ORDER BY id_beitrag ASC LIMIT 1;";
        const tags = req.query.tags;
        value = [tags];
    } else {
        sql = "SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b\n" +
            "JOIN sportart s ON b.sport = s.id_sportart\n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie " +
            "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
            "WHERE b.id_beitrag=17;"; //"ORDER BY id_beitrag DESC LIMIT 1;";
    }


    pool.query(sql, value,function (error, results, fields) {
        if (error) throw error;
        res.send(results);

    });
});

    //beitragBySubsportart?subsportart=1&medientyp=Artikel
        app.get('/beitragBySubsportart', function (req, res) {
            const subsportart = req.query.subsportart;
            const medientyp = req.query.medientyp;
            const sql = "SELECT DISTINCT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b\n" +
                "JOIN sportart s ON b.sport = s.id_sportart\n" +
                "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie\n" +
                "JOIN beitrag_subsportart sb ON sb.fk_beitrag = b.id_beitrag " +
                "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
                "WHERE sb.fk_subsportart=? AND b.typ=?  ; ";
            const value = [subsportart, medientyp ];
            pool.query(sql, value,
                function (error, results, fields) {
                if (error) throw error;
                res.send(results);

            });
        });

//http://localhost:8080/beitragBySportart?sportart[]=2&sportart[]=3
app.get('/beitragBySportart', function (req, res) {
    const sportart = req.query.sportart;
    let sql;
    let  value = [];
    if(sportart && sportart.length>0) {
        sql = "SELECT DISTINCT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b\n" +
            "JOIN sportart s ON b.sport = s.id_sportart\n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie\n" +
            "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag WHERE b.sport IN (?);";
        value = [sportart];
    } else {
        sql = "SELECT DISTINCT b.*, s.sportart, k.kategorie,  m.fk_user_id as merkliste FROM beitrag b\n" +
            "JOIN sportart s ON b.sport = s.id_sportart\n" +
            "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie " +
            " LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag";
    }

    pool.query(sql, value,
        function (error, results, fields) {
            if (error) throw error;
            res.send(results);

        });
});

    //http://localhost:8080/beitragByTags?tags[]=10&tags[]=6
    app.get('/beitragByTags', function (req, res) {
        const tags = req.query.tags; //[6,4,10];
       // console.log(tags);
        const sql = 'SELECT DISTINCT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste' +
            ' FROM beitrag b JOIN sportart s ON b.sport = s.id_sportart ' +
            'JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie ' +
            'JOIN beitrag_tag bt  ON bt.fk_beitrag_id = b.id_beitrag ' +
            'LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag' +
            'WHERE fk_tag_id IN (?);';
        const value = [tags];
            pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    //http://localhost:8080/beitragByThemenbereich?themenbereich=6
    app.get('/beitragByThemenbereich', function (req, res) {
        const themenbereich = req.query.themenbereich;
      //  console.log(themenbereich);
        let sql;
        let value;
        //if einer der Beiträge enthält den Suchbegriff
        //http://localhost:8080/beitragByThemenbereich?themenbereich=2&suche=fit
        if(req.query.suche && req.query.suche.length>0) {
            const suche = '%' + req.query.suche.trim() + '%'; //[6,4,10];
            console.log(suche);
            sql = 'SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste  FROM beitrag b\n' +
                'JOIN sportart s ON b.sport = s.id_sportart\n' +
                'JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie\n' +
                'JOIN beitrag_themenbereich bt ON bt.fk_beitrag=b.id_beitrag\n' +
                'JOIN themenbereich t ON bt.fk_themenbereich=t.id_themenbereich\n' +
                'WHERE (b.text LIKE ? OR b.titel LIKE ? OR b.teaser LIKE ?)' +
                'LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n' +
                'AND t.id_themenbereich=?;';
            value = [suche, suche, suche, themenbereich];
        } else {
            sql = 'SELECT  b.*, bt.*, m.fk_user_id as merkliste  FROM beitrag b\n' +
                ' JOIN  beitrag_themenbereich bt ON b.id_beitrag = bt.fk_beitrag \n' +
                ' LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag ' +
                'WHERE bt.fk_themenbereich=?;';
            value = [themenbereich];
        }

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
    const sql =  "SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b \n" +
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

//http://localhost:8080/beitragSuche?suche=Roberto&medientyp=video
app.get('/beitragSuche', function (req, res) {
    const suche = '%'+req.query.suche.trim()+'%'; //[6,4,10];
    const medientyp = req.query.medientyp;
    console.log(suche);
    const sql =  "SELECT b.*, s.sportart, k.kategorie, m.fk_user_id as merkliste FROM beitrag b \n" +
        "JOIN sportart s ON b.sport = s.id_sportart \n" +
        "JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie " +
        "LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n" +
        "WHERE (b.text LIKE ? OR b.titel LIKE ? OR b.teaser LIKE ?)" +
        "AND typ=?;";
    const value = [suche, suche, suche, medientyp];
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
        let sql;
        let  value = [];

        // Person mit id x
        if(req.query.id_person && req.query.id_person.length>0) {
            sql = 'SELECT * FROM person WHERE id_person=?;';
            value = [req.query.id_person];
        //alle Personen mit abonniert-status (Favorit) // /person?abostatus=1
        } if(req.query.abostatus && req.query.abostatus.length>0) {
            sql = 'SELECT p.*, fk_user FROM radiobremen.person p\n' +
                'LEFT  JOIN user_folgt_person up ON up.fk_person = p.id_person ;';
        //alle Personen
        } else {
            sql = 'SELECT * FROM person;';
        }


        pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    ///personFavoritenByUser?id_person=1
    app.get('/personFavoritenByUser', function (req, res) {
        let sql;
        let  value = [];

        // Person mit id x
        if(req.query.id_person && req.query.id_person.length>0) {
            sql = 'SELECT * FROM person p\n' +
                'JOIN user_folgt_person up ON up.fk_person = p.id_person\n' +
                'WHERE up.fk_user=?;';
            value = [req.query.id_person];
            //alle Personen
        }


        pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });


    app.get('/beitragByPerson', function (req, res) {
        //http://localhost:8080/beitragByPerson?id_person=1

         const  sql = 'SELECT b.*,  s.sportart, k.kategorie, m.fk_user_id as merkliste  FROM person p\n' +
                'JOIN beitrag_person bp ON bp.fk_person = p.id_person\n' +
                'JOIN beitrag b ON b.id_beitrag = bp.fk_beitrag\n' +
                'JOIN sportart s ON b.sport = s.id_sportart \n' +
                'JOIN beitragskategorie k ON b.kategorie = k.id_beitragskategorie ' +
                ' LEFT JOIN merkliste m ON m.fk_beitrag_id = b.id_beitrag \n' +
                'WHERE p.id_person=? ;';
         const   value = [req.query.id_person];


        pool.query(sql, value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    app.get('/themenbereich', function (req, res) {
        let sql;
        let  value = [];
            //http://localhost:8080/themenbereich?suche=fit
        if(req.query.suche && req.query.suche.length>0)
        {  //einer der Beiträge enthält den Suchbegriff
            const suche = '%'+req.query.suche.trim()+'%'; //[6,4,10];
            console.log(suche);
            value = [suche, suche, suche];
            sql = 'SELECT DISTINCT t.* FROM themenbereich t\n' +
                'JOIN beitrag_themenbereich bt ON bt.fk_themenbereich = t.id_themenbereich\n' +
                'JOIN beitrag b ON bt.fk_beitrag = b.id_beitrag\n' +
                'WHERE b.text LIKE ? OR b.titel LIKE ? OR b.teaser LIKE ?;';
        } else {
            sql = 'SELECT * FROM themenbereich;';
        }

        pool.query(sql,value,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    //http://localhost:8080/themenbereichByTags?tags[]=10&tags[]=6
    app.get('/themenbereichByTags', function (req, res) {
        const tags = req.query.tags;
       // console.log(tags);
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

    app.post("/updateUser", function (request, response) {
        console.log('request body: ');
        console.dir(request.body);
        const sql = "UPDATE user SET vorname = ? , nachname=? , geburtsdatum=?, wohnort=? WHERE id_user=1;";
        const values = [request.body.userDaten.vorname, request.body.userDaten.nachname, request.body.userDaten.alter, request.body.userDaten.wohnort];
        pool.query( sql, values,
            function (error, results, fields) {
            if (error) throw error;
            response.send(results);
            });
    });
    app.delete('/removeUser/:id', function(req, res) {
        const sql = " DELETE FROM user_folgt_person WHERE fk_person = ?";
        pool.query(sql, req.params.id, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    });
    app.post('/addUser/:id', function(req, res) {
        const sql = " INSERT into user_folgt_person (fk_user, fk_person) VALUES (1, ? )" ;
        pool.query(sql, req.params.id, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    });

    app.get('/userData', function (req, res) {
        const sql = 'SELECT * FROM user WHERE id_user=1;';
        pool.query(sql,
            function (error, results, fields) {
                if (error) throw error;
                res.send(results);
            });
    });

    // http://localhost:8080/updateMerkliste?aktion=insert // bzw. aktion=delete
    app.post("/updateMerkliste", function (request, response) {
    let aktion = request.query.aktion;
    let sql;
    if(aktion=='delete'){
        sql = "DELETE FROM merkliste  WHERE fk_beitrag_id=? AND fk_user_id=?;";
    } else {
        sql = "INSERT IGNORE INTO merkliste (fk_beitrag_id, fk_user_id) VALUES (?,?);";
    }

    const values = [request.body.beitrag_id, request.body.user_id];
    pool.query( sql, values,
        function (error, results, fields) {
            if (error) throw error;
            response.send(results);
        });
});


