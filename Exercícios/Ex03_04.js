const prompt = require('prompt-sync')();

let mes = prompt('Digite o nome do mês:');

if (mes == 'Janeiro' || mes == 'Março' || mes == 'Maio' || mes == 'Julho' || mes == 'Agosto' || mes == 'Outubro' || mes == 'Dezembro') {
    console.log(`O mês de ${mes} tem 31 dias`);    
} else if (mes == 'Abril' || mes == 'Junho' || mes == 'Setembro' || mes == 'Novembro' ) {
    console.log(`O mês de ${mes} tem 30 dias`);    
} else if (mes == 'Fevereiro') {
    console.log('O mês de Fevereiro tem 28 ou 29 dias');    
} else {
    console.log('Esse mês não existe ☹');
}