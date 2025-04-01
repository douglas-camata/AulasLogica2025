const prompt = require('prompt-sync')();

let somaIdadeM = 0;
let qtdeM = 0;
let somaIdadeF = 0;
let qtdeF = 0;

for (let x = 1; x <= 10; x++) {
    let idade = Number(prompt('Digite sua idade: '));
    let sexo = prompt('Digite seu sexo: (M/F) ');

    if (sexo == 'M') {
        qtdeM++;
        somaIdadeM = somaIdadeM + idade;
    } else if (sexo == 'F') {
        qtdeF++;
        somaIdadeF = somaIdadeF + idade;
    }
}

console.log(`A média dos sexo M é de ${somaIdadeM / qtdeM}`)
console.log(`A média dos sexo F é de ${somaIdadeF / qtdeF}`)
console.log(`A média dos grupo é de ${(somaIdadeF + somaIdadeM) / 10}`)
