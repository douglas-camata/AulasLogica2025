const prompt = require('prompt-sync')();

let km = Number(prompt('Quantos km você percorreu? '));
let dias = Number(prompt('Quantos dias ficou com o carro? '));

let valorTotal = (km * 0.15) + (dias * 60);

console.log(`Você pagará R$${valorTotal}`);
