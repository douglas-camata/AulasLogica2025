const prompt = require('prompt-sync')();

let velocidade = Number(prompt('Digite a velocidade do carro'))

if (velocidade > 80 ){
    let valorMulta = (velocidade - 80) * 7;
    console.log(`Você foi multado, valor da multa R$ ${valorMulta}`);    
} else {
    console.log('Você não foi multado');       
}