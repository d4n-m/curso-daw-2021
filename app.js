// const { miVar } = require("./prueba");
// console.log(miVar);

const http = require("http");

const chalk = require('chalk');
console.log(chalk.blue('Hello, npm!'));
console.log(chalk.red('Hello World!'));

const oreja = (request, response) => {
    response.writeHead(200,('Content-Type', 'text/plain'));
    response.end("Hola Mundo DAW!")
}

const app = http.createServer(oreja);

app.listen(8080);
console.log("Server running on 8080");