const prompt = require('prompt-sync')();

let diaSemana = prompt('Digite o dia da semana: ');

switch (diaSemana) {
    case '1':  //if (diaSemana == 1)
        console.log('Domingo');
        break;
    case '2':
        console.log('Segunda-feira');
        break;
    case '3':
        console.log('Terça-feira');
        break;
    case '4':
        console.log('Quarta-feira');
        break;
    case '5':
        console.log('Quinta-feira');
        break;
    case '6':
        console.log('Sexta-feira');
        break;
    case '7':   
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
}

console.log('FIM');
