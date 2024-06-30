// CREACIÓN DE SERVIDOR BÁSICO

const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Método", req.method);
    console.log("Url", req.url);
    console.log("Headers", req.headers);
    res.end("Hola, server");
});

server.listen(3000);