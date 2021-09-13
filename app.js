// const { miVar } = require("./prueba");
// console.log(miVar);

const http = require("http");

const chalk = require('chalk');
const superb = require('superb');

console.log(chalk.blue('Hello, ' + superb.random() + ' npm!'));
console.log("You are " + superb.random() + "!");


const oreja = (request, response) => {
    response.writeHead(200,('Content-Type', 'text/plain'));
    response.end("Hola Mundo DAW!")
}

const app = http.createServer(oreja);

app.listen(8080);
console.log("Server running on 8080");