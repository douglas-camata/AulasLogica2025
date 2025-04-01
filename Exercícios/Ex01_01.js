const prompt = require('prompt-sync')();

//Entrada
let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));
//Processamento
let soma = num1 + num2;
//Saída
console.log(soma);
console.log(`A soma entre ${num1} e ${num2} é ${soma}`);

