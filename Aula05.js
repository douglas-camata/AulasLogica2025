const prompt = require('prompt-sync')();

//Operações com variáveis
let nr1 = Number(prompt('Qual é o primeiro nº'));
let nr2 = Number(prompt('Qual é o segundo nº'));
let soma = nr1 + nr2;
console.log (`A soma entre ${nr1} e ${nr2} é ${soma}`);
let subtracao = nr1 - nr2;
console.log (`A subtração entre ${nr1} e ${nr2} é ${subtracao}`);
let multiplicacao = nr1 * nr2;
console.log (`A multiplicação entre ${nr1} e ${nr2} é ${multiplicacao}`);
let divisao = nr1 / nr2;
console.log (`A divisão entre ${nr1} e ${nr2} é ${divisao}`);
let exponenciacao = nr1 ** nr2;
console.log (`A exponenciação entre ${nr1} e ${nr2} é ${exponenciacao}`);

let valor = Number(prompt('Qual é o valor do celular?'));
let desconto = Number(prompt('Qual é o desconto?'));
valor = valor - desconto;
console.log(`Promoção Celular com R$ ${desconto} de desconto, por apenas R$ ${valor}`);

valor = Number(prompt('Qual é o valor do celular?'));
desconto = Number(prompt('Qual é o desconto em %?'));
valor = valor - (valor * desconto / 100);
console.log(`Promoção Celular com R$ ${desconto} de desconto, por apenas R$ ${valor}`);

//Reatribuição de valor da variável
var numero = 4 / 2;
numero = numero ** 2;
numero = numero * (50-20);
console.log('O valor é', numero);
console.log(`O valor é: ${numero}`);

//Calculando o dobro e a metade de um numero
let nr = Number(prompt('Qual número você deseja?'));
let dobro = nr * 2;
let metade = nr / 2;
console.log(`O nr é ${nr}, sua metade é ${metade} e o dobro ${dobro}`)

