const prompt = require('prompt-sync')();

let reais = Number(prompt('Quanto você tem na carteira em R$: '));
let dolares = reais / 5.78;
console.log(`Você tem R$ ${reais} convertendo têm $${dolares.toFixed(2)}`);
