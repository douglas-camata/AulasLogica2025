const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número: '));
let dobro = num * 2;
let triplo = num * 3;
let cubo = num ** 3;
console.log(`O nº ${num} tem o dobro ${dobro},
                 o triplo ${triplo} e o cubo ${cubo}`);
