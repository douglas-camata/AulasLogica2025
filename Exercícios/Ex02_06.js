const prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite o 1º número '));
let n2 = Number(prompt('Digite o 2º número '));

if (n1 == n2) {
    console.log(`${n1} é igual a ${n2} `);
} else {
    console.log(`${n1} é diferente de ${n2} `);
}
