// const { miVar } = require("./prueba");
// console.log(miVar);

const http = require("http");

const oreja = (request, response) => {
    response.writeHead(200,('Content-Type', 'text/plain'));
    response.end("Hola Mundo DAW!")
}

const app = http.createServer(oreja);

app.listen(8080);
console.log("Server running on 8080");