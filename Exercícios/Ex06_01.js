let filmes = ['Velozes e Furiosos',
                'Interestelar',
                'Avatar',
                'Rapunzel',
                'Carros 2',
                'As longas tranças do rei Careca',
                'Transformers'];
console.log(filmes[0]);

console.log(filmes[4]);
//Alterando item da lista
filmes[6] = 'Avatar 2';
console.log(filmes);
//Inserindo no final da lista
filmes.push('Peppa Pig');
filmes = [...filmes, 'Shrek'];
console.log(filmes);
//Inserindo na posição 5
filmes.splice(5, 0, 'O Senhor dos Aneis');
console.log(filmes);
//Excluindo primeiro item da lista
filmes.shift();
filmes.splice(0, 1);
console.log(filmes);
//Excluindo último item da lista
filmes.splice(-1, 1);
filmes.pop();
console.log(filmes);
//Exibindo os 3 primeiros itens
console.log(filmes.slice(0, 3));
//Exibindo os 4 ultimos itens
console.log(filmes.slice(-4));
//Exibindo o tamanho da lista
console.log(filmes.length);
//Invertendo a ordem
filmes.reverse();

