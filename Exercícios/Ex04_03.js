const prompt = require('prompt-sync')();

let QtdePares = 0;
let QtdeImpares = 0;
let SomaPares = 0;
let SomaImpares = 0;

while (true) {
    let num = Number(prompt('Digite um número [0 para encerrar]: '));

    if (num == 0) {
        break;
    }
    if (num % 2 == 0) { //par
        QtdePares++;     // QtdePares = QtdePares + 1
        SomaPares = SomaPares + num;    //SomaPares += num
    } else {
        QtdeImpares++;
        SomaImpares = SomaImpares + num;
    }
}
console.log(`Você digitou ${QtdePares} nº pares, somadas resultou em ${SomaPares}`);
console.log(`Você digitou ${QtdeImpares} nº ímpares, somadas resultou em ${SomaImpares}`);
