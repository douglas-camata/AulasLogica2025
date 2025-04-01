const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número: '));
let antecessor = num - 1;
let sucessor = num + 1;
console.log(`O nº ${num} tem o antecessor ${antecessor}
                e o sucessor ${sucessor}`);
