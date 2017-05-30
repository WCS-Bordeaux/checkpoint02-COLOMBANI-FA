let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let notes = require('../mocks/notes.json');
let users = require('../mocks/users.json');
const port = 9000;


app.use(express.static('../public'));


// À utiliser:
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

var jsonParser = bodyParser.json()

app.get('/users/', function (req, res) {
    res.header('Content-Type', 'application/json')
    res.json(users)
});

app.get('/notes/', function (req, res) {
    res.header('Content-Type', 'application/json')
    res.json(notes)
});

app.get('/notes/:id', function (req, res) {
    res.header('Content-Type', 'application/json')
    res.json(notes[req.params.id])
});

app.listen(port, function () {
    console.log("Adresse du serveur : http://localhost:" + port)
});