//Estrutura condicional composta e encadeada
//Operadores Lógicos
// && - e
// || - ou   
// ! - não

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // False pq 2 condição é F
console.log(a > 1 && b < 2); // False pq apenas 1 condição é V
console.log(a > 1 && b < 4); // True pq 2 condição é V
console.log(a > 1 && b < 4 && c > 4); //True todas condição V
console.log(a > 1 && b < 4 && c > 5); //False

console.log(a > 2 || b < 2); // False Nenhuma condição é V
console.log(a > 1 || b < 2); // True Pelo menos 1 V
console.log(a > 1 || b < 4); // True pelo menos 1 V
console.log(a > 1 || b < 4 || c > 4); //True
console.log(a > 1 && b < 4 || c > 6); //True

let altura = Number(prompt('Digite sua altura:'));
let peso = Number(prompt('Digite seu peso:'));
let imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log('Você está abaixo do peso ideal');
} else if (imc > 18.5 && imc < 24.5) {
    console.log('Você está no peso ideal');    
} else if (imc > 25 && imc < 29.9 ) {
    console.log('Você está de sobrepreso');
} else if (imc > 30) {
    console.log('Obesidade');
}


let lado1 = Number(prompt('Digite o lado1:'));
let lado2 = Number(prompt('Digite o lado2:'));
let lado3 = Number(prompt('Digite o lado3:'));

if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1  ) {
    console.log('Seu triângulo é um equilátero');    
} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1  ) {
    console.log('Seu triângulo é um escaleno');    
//} else if ((lado1 == lado2 & lado2 != lado3 & lado3 !=lado1) || (lado2 == lado3 && lado1 != lado2 && lado3 != lado1) || (lado3 == lado1 && lado1 != lado2 && lado2 != lado3))
} else {
    console.log('Seu triângulo é um isósceles');    
}

let vendas = Number(prompt('Digite o valor vendido:'));
let horas = Number(prompt('Digite as horas trabalhadas:'));
if (vendas > 5000 || horas > 40){
    console.log('Tem direito ao bonus');    
}


let letra = prompt('Digite uma letra:');
if (letra == 'a' || letra == 'e' || letra == 'i' ||  letra == 'o' || letra == 'u'){
    console.log(`${letra} é uma vogal`);
} else {
    console.log(`${letra} é uma consoante`);
}