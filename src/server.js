const express = require("express");
const server = express();

server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});


/**
 * Configurar caminhos da aplicação
 * 
 * Página Inicial
 */
server.get("/", ( req, res ) => {
    return res.render("index.html");
});

server.get("/create-point", ( req, res ) => {
    return res.render("create-point.html");
});

server.get("/search-results", ( req, res ) => {
    return res.render("search-results.html");
});



/**
 * Ligar o servidor
 */
server.listen(3000);