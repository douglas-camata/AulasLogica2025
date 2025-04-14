const prompt = require('prompt-sync')();
//Iteração sobre nossos vetores (arrays / listas)

//Vetor         0         1         2        3
let frutas = ['Maçã', 'Banana', 'Abacaxi', 'Uva'];
//Para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    let frutaAtual = frutas[x];
    console.log(`A fruta da posição ${x} é ${frutaAtual}`);    
}
console.log('Fim');

//Iterando sobre uma lista usando o for of
let listaJogadores = ['Pelé', 'Maradona', 'Messi', 'Ronaldo'];
for (let jogador of listaJogadores) {
    console.log(`O jogador é ${jogador}`);
}

let listaNrs = [4, 5, 8, 3, 2];
let soma = 0;
for (let nr of listaNrs) {
    console.log(`O nº é ${nr}`);
    soma = nr + soma;
}
console.log(soma);

//Verificando se um elemento existe em um array usando includes()
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z' ];
let numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let letraParaVerificar = prompt('Digite uma letra: ');
if (vogais.includes(letraParaVerificar.toLowerCase())) {
    console.log(`A letra ${letraParaVerificar} é uma vogal`);
} else if (consoantes.includes(letraParaVerificar.toLowerCase())) {
    console.log(`A letra ${letraParaVerificar} é uma consoante`);
} else if (numeros.includes(letraParaVerificar)) {
    console.log(`${letraParaVerificar} é um número`);
} else {
    console.log(`${letraParaVerificar} não é uma letra nem número`);
}

//Obtendo a posição de um item em um array usando o for of e a função entries()
//        posição    0         1        2         3     
let listaFrutas = ['Maçã', 'Banana', 'Abacaxi', 'Uva'];
for (const [pos, fruta] of listaFrutas.entries()) {
    console.log(`A fruta da posição ${pos} é ${fruta}`);
}

//Separando uma string utilizando o split()
let produtos = 'Celular,Notebook,TV,Tablet,Monitor';
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);

//Strings são lista (vetores / arrays) de caracteres
//            01234
let escola = 'SENAI'; //['S', 'E', 'N', 'A', 'I']
console.log(escola[0]); //S
//Utilizando o for of exibir a palavra da seguinte forma
for (let letra of escola) {
    console.log(letra);
}







