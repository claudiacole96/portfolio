const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require("mysql");

app.use(express.json());
app.use(morgan("dev"));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zaudia795',
    database: 'quote4quote'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL db connection established succeffully')
});

app.get('/getQuote', (req, res) => {
    let SQL = `SELECT * FROM quotes WHERE flagged LIKE '%0' ORDER BY RAND() LIMIT 1`;
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.send(result);
    });
});

app.get('/refreshQuote/:id', (req, res) => {
    let SQL = `SELECT * FROM quotes WHERE id LIKE '%${req.params.id}'`;
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.send(result);
    });
});

app.post('/addQuote/:value', (req, res) => {
    let SQL = `INSERT INTO quotes (quoteText) VALUES ("${req.params.value}") `;
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

app.put('/flagQuote/:id', (req, res) => {
    let postVariables = req.body;
    let SQL = `UPDATE quotes SET flagged = '1' where id = ${req.params.id}`;
    db.query(SQL, postVariables, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

app.put('/likeQuote/:id', (req, res) => {
    let SQL = `UPDATE quotes SET likes = likes + 1 WHERE id = ${req.params.id}`;
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

app.put('/unlikeQuote/:id', (req, res) => {
    let SQL = `UPDATE quotes SET likes = likes - 1 WHERE id = ${req.params.id}`;
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

app.listen(4000, () => {
    console.log('the server is running on 4000');
});