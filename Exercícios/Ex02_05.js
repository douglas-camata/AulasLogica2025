const prompt = require('prompt-sync')();

let ano = Number(prompt('Digite o ano de nascimento: '));
let idade = 2025 - ano; 

if (idade >= 18) {
    console.log(`Você tem ${idade} é maior de idade`);
} else {
    console.log(`Você tem ${idade} é menor de idade`);
}