const prompt = require('prompt-sync')();

let vendas = Number(prompt('Quanto o vendedor vendeu?'));

if (vendas > 5000) {
    let comissao = vendas * 0.05;
    console.log(`A comissão do vendedor será de R$ ${comissao}`);    
} else {
    let comissao = vendas * 0.03;
    console.log(`A comissão do vendedor será de R$ ${comissao}`);
}