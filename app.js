// console.log("i'm here.");

// const http = require('http');

// http.createServer(function(req, res){
//     res.end("Hello World!");
// }).listen(8000);

const express = require('express');
const app = express();

const port = 8000;

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});
// app.get('/criarTabela', function(req, res){
//     res.sendFile(__dirname + "/src/criarTabela.html");
// });
// app.get('/inserirLinha', function(req, res){
//     res.sendFile(__dirname + "/src/inserirLinha.html");
// });


app.listen(port);

