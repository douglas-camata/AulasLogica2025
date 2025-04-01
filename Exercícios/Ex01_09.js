const prompt = require('prompt-sync')();

let preco = Number(prompt('Qual é o preço do produto? '));
preco = preco - (preco * 0.05);  // preco * 5/100
console.log(`O novo preço é ${preco.toFixed(2)}`);
