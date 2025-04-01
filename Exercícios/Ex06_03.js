const prompt = require('prompt-sync')();

let comidas = [];
for (let x = 1; x <= 6 ; x++){
    let comida = prompt('Digite uma comida: ');
    comidas.push(comida);
}

console.log(comidas[0]);

console.log(comidas[4]);
//Alterando item da lista
comidas[6] = 'Avatar 2';
console.log(comidas);
//Inserindo no final da lista
comidas.push('Peppa Pig');
comidas = [...comidas, 'Shrek'];
console.log(comidas);
//Inserindo na posição 5
comidas.splice(5, 0, 'O Senhor dos Aneis');
console.log(comidas);
//Excluindo primeiro item da lista
comidas.shift();
comidas.splice(0, 1);
console.log(comidas);
//Excluindo último item da lista
comidas.splice(-1, 1);
comidas.pop();
console.log(comidas);
//Exibindo os 3 primeiros itens
console.log(comidas.slice(0, 3));
//Exibindo os 4 ultimos itens
console.log(comidas.slice(-4));
//Exibindo o tamanho da lista
console.log(comidas.length);
//Invertendo a ordem
comidas.reverse();

