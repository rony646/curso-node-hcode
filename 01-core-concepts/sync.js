const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5))
console.log("Antes da leitura")

const dados = fs.readFileSync("file.txt");

console.log("Executando o console apos o arquivo ok!");
console.log((process.hrtime()[0]/60).toFixed(5))
