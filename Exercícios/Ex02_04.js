const prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite o número: '));

if (n1 >= 0) {
    console.log(`${n1} é positivo`);
} else {
    console.log(`${n1} é negativo`);
}
