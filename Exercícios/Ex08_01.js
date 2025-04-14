const prompt = require('prompt-sync')();

function Saudacao(){
    let nome = prompt('Digite o seu nome: ');
    console.log(`${nome}, tenha um bom dia`);
}

Saudacao();
Saudacao();
Saudacao();