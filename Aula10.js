//Estrutura de laço de repetição While
const prompt = require('prompt-sync')();

let resposta = 'S';

while (resposta == 'S') {
    console.log('Você está dentro do bloco');
    resposta = prompt('Deseja continuar? S/N')
}

console.log('FIM');


//Exemplo 2
let senhaSecreta = 'SENAI';
let senhaDigitada;

while (senhaSecreta == senhaDigitada) {
    console.log('Descubra a senha secreta');
    senhaDigitada = prompt('Qual é a senha? ')
}

console.log('FIM');

//Exemplo 3 - Executando um número determinado de vezes
let contador = 1;
while (contador <= 5) {
    console.log(`O contador está no nº ${contador}`);
    contador++; //contador = contador + 1;
}

//Exemplo 4
// Posso deixar meu laço executando sem uma condição específica, apenas
// com while (true) e encerrar o loop com o comando break
let total = 0;
let qtde = 0;

while (true) {
    let valor = Number(prompt('Digite o valor do produto (0 para encerrar): '));

    if (valor == 0) {
       break;
    } else {
        total = valor + total;
        qtde++;
    } 
}

console.log(`Você comprou no total ${qtde} produtos`);
console.log(`Valor total da compra R$ ${total.toFixed(2)}`);

for (let i = 0; i < 100; i++) {
    if (i == 20) {
        break;
    } else {
        console.log(i);
    }
}