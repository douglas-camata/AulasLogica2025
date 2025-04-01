const prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite o número: '));

if (n1 % 2 == 0) {
    console.log(`${n1} é par`);
} else {
    console.log(`${n1} é ímpar`);
}
