//Variáveis Compostas / Vetores / Arrays

//Variável simples, cabe apenas 1 dado por vez
let fruta = 'Maçã';
fruta = 'Banana';

//Variável composta, cabe mais de 1 dado
let frutas = ['Maçã', 'Banana', 'Abacaxi', 'Uva'];

console.log(frutas);
console.log(frutas[1]);

//Declarando uma lista vazia
let listaVazia = [];

//Declaração de uma lista de números
let numeros = [1, 2, 8, 5, 9];

//Declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Maria'];

//Declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];

//Declaração de uma lista com outras listas
let listaDeVetores = [['coca-cola', 'hot-dog'], [5.00, 10.00]] ;
console.log(listaDeVetores[0][1]);

console.log(frutas);
//Alterando o conteúdo de um item da lista
frutas[3] = 'Melancia';
console.log(frutas);

//Inserindo um novo item na lista
//frutas[4]= 'Laranja';
frutas.push('Laranja');  //utilizando o método push
frutas = [...frutas, 'Laranja']; //utilizando o operador spread

//Inserindo um novo item em posição específica
frutas.splice(2, 0, 'Morango');
//    2 - posição
//    0 - quantidade de itens a serem removidos

//Excluindo itens da lista
frutas.splice(3, 1);
//    3 - posição
//    1 - quantidade de itens a serem removidos
frutas.shift(); //remove o primeiro item da lista
frutas.pop(); //remove o ultimo item da lista

console.log(frutas);

frutas = ['Maçã', 'Banana',  'Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva']

console.log(frutas[4]); 
console.log(frutas.slice(2, 4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);

frutas.sort();
console.log(frutas);
frutas.reverse();
console.log(frutas);
















