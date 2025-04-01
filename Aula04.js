const prompt = require('prompt-sync')();

//Criando nossa primeira variável
//Uma variável serve para armazenar uma informação/valor
//O memória crie um espaço com o nome curso e receba o valor 'Desenvolvimento de Sistemas'
var curso = 'Desenvolvimento de Sistemas';

//Exibindo o conteúdo da variável
console.log('curso'); //Para imprimir uma variável, não se coloca entre ' '
console.log(curso);   //Jeito correto de usar uma variável
console.log('curso', curso);

//Criando e atribuindo valores a uma variável
var idade = 37; //inteira // integer
var temperatura = 24.5; //real // float
var nome = 'Douglas'; //string

console.log('Olá, ', nome, ' você tem ', idade, ' anos' )
console.log('está cursando ', curso, ' hoje faz ', temperatura, 'ºC');

console.log('Olá, ' + nome + ' você tem ' + idade + ' anos' )
console.log('está cursando ' + curso + ' hoje faz ' + temperatura + 'ºC');

//Template String
//utilizo a crase ` ` para criar uma string
//para colocar variáveis dentro da string, utilizo ${variável}
console.log(`Olá, ${nome} você tem ${idade} anos 
            está cursando ${curso} hoje faz ${temperatura}ºC`);

//Declarando uma variável lógica/boolean/boleano (true/false)
var podeDirigir = true;
var estaChovendo = false;

//Declarando uma variável nula
var escola;

//Exercício
// Nota1 inválido 

let cidade = 'Andradina'
var turma = '2ºB'
const ano = 2025

console.log(turma);
turma = '3ºB' //Reatribuindo o valor de uma variavel
console.log(turma);
//ano = 2026; //Não podemos reatribuir valor a uma constante

let _nome = 'Ayrton Senna';  //string
let _idade = 36;             //number
let _peso = 76.5;            //number
console.log(_nome, _idade, _peso);

//Mostrando no console quais são os tipos dos dados
console.log(typeof _nome, typeof _idade, typeof _peso );

//No prompt o computador espera o usuario digitar uma informação
//Sempre quando recebemos uma informação de entrada ela vem em STRING
_nome = prompt('Qual é o nome?');       //string
_idade = prompt('Qual é a idade?');     //string
_peso = prompt('Qual é a peso?');       //string
console.log(_nome, _idade, _peso);

console.log(typeof _nome, typeof _idade, typeof _peso );

//Criem 2 variaveis num1 e num2 e recebam as informações pelo prompt
let num1 = prompt('Digite o primeiro nº:');
let num2 = prompt('Digite o segundo nº:');
console.log (num1 + num2);

console.log(typeof num1);  //string
num1 = Number(num1);       //Convertendo a variavel do tipo string para Number
console.log(typeof num1);  //number

//Receber uma informação já convertendo seu tipo de dados
let nr1 = Number(prompt('Digite o primeiro nº:'));  //Number
let nr2 = Number(prompt('Digite o segundo nº:'));   //Number
console.log (nr1 + nr2);

//Convertando os dados de uma variável
nr1 = "100.14";           //string
nr1 = Number("100.14");   //convertendo String para Number
nr1 = parseInt("100.14"); //convertendo String para integer
nr1 = parseFloat("100");  //convertendo String para float 100.00
nr1 = String(100.14);     //convertendo um Number para String

_nome = prompt('Qual é o nome?');       //string
_idade = parseInt(prompt('Qual é a idade?'));     //int
_peso = parseFloat(prompt('Qual é a peso?'));       //float
console.log(_nome, _idade, _peso);

