const express = require("express")
const app = express()
const morgan = require("morgan")
const mysql = require('mysql')

app.use(express.json())
app.use(morgan("dev"))

//making a connection to mysql db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zaudia795',
    //default connection db
    database: 'myPortfolio'
});
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Database Connection Established Succeffully');
});

//portfolio page get request with where clause to filter categories
app.get('/GetProjects/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    let SQL = `Select * FROM projects WHERE category like '%${req.params.id}'`;
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});



//server port
app.listen(4000, () => {
    console.log("The server is running on 4000")
})