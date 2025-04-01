const prompt = require('prompt-sync')();

let largura = Number(prompt('Qual é a largura em metros? '));
let altura = Number(prompt('Qual é a altura em metros? '));
let area = largura * altura;
let rendimento = 2;
let litros = area / rendimento;
console.log(`Para pintar ${area}m² você precisa de ${litros}litros de tinta`);
