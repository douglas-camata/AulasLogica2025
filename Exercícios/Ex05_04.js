const prompt = require('prompt-sync')();

let inicio = Number(prompt('Digite o inicio: '));
let fim = Number(prompt('Digite o fim: '));
let passo = Number(prompt('Digite o passo: '));

for (let x = inicio; x <= fim; x+= passo) {
    console.log(x);    
}