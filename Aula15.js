//Escopo de variáveis
//Variável global pode ser acessada em qualquer lugar
//Variável local só pode ser acessada dentro do bloco 

//Utilizando variáveis local
function NomeEscola(){
    let escola = 'SESI';
    console.log(`Valor dentro da função: ${escola}`);  
}

let escola = 'SENAI';
console.log(`Valor fora da função: ${escola}`);
NomeEscola();
console.log(`Valor após a função: ${escola}`);

//Utilizando variáveis global
var escola2 = 'SENAI';

function NomeEscola2(){
    escola2 = 'SESI';
    console.log(`Valor dentro da função: ${escola2}`);  
}

console.log(`Valor fora da função: ${escola2}`);
NomeEscola2();
console.log(`Valor após a função: ${escola2}`);


//Documentado funções usando o JSDoc
/** 
 * Soma de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} - Soma dos dois números
*/
function Soma(a, b) {
    return a + b;
}
Soma(2,4);







