//Estruturas condicionais aninhadas
//Switch case
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVIP = true;

if (valorCompra >= 100 ) {
    if (clienteVIP == true) {
        console.log(`Você ganhou R$ ${valorCompra * 10 / 100}`);        
    } else {
        let desconto = valorCompra * 5 / 100;
        console.log(`Você ganhou R$ ${desconto} de desconto`);
    }
} else {
    let restante = 100 - valorCompra;
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}

let idade = Number(prompt('Qual é a sua idade? ')); //17

if (idade < 16) {
    console.log('Não pode votar');
} else {
    if (idade >= 18 && idade <= 70 ) {
        console.log('Voto obrigatório');        
    } else {
        console.log('Voto facultativo');            
    }
}


//Switch case é uma alternativa ao if else
let n1 = Number(prompt('Digite um nº: '));
let n2 = Number(prompt('Digite outro nº: '));
let op = prompt('Digite o operador (+ - / * **): ');
switch (op) {
    case '1':                   //if (op == '+')
        console.log(n1 + n2);
        break;
    case '-':                   //else if (op == '-')
        console.log(n1 - n2);
        break;
    case '/':                   //else if (op == '/')
        console.log(n1 / n2);
        break;    
    case '*':                   //else if (op == '*')
        console.log(n1 * n2);    
        break;
    case '**':                  //else if (op == '**')
        console.log(n1 ** n2);    
        break;
    default:                    //else
        console.log('Operador inválido');
}







