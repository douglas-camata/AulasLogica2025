const prompt = require('prompt-sync')();

let anoAtual = Number(prompt('Digite o ano atual: '));
let anoNascimento = Number(prompt('Digite o ano de nascimento: '));

let idade = anoAtual - anoNascimento;

if (idade <= 10) {
    console.log('Vocês ainda é criança');
} else {
    if (idade > 10 && idade <= 17) {   
        console.log('Vocês é adolescente');
    } else if (idade >= 18 && idade <= 60) {
        console.log('Vocês é adulto');
    } else {
        console.log('Vocês é idoso');
    }
}