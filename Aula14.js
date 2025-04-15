function Linha() {
    console.log(' - * - * - * - * - * - * - * - ');
}

//Funcão sem parâmetros e sem retorno
function Cabecalho() {
    Linha();
    console.log('     SESI / SENAI');
    Linha();
}
Cabecalho();

//Função com parâmetro e sem retorno
function CabecalhoEscola(nomeEscola) {
    Linha();
    console.log(nomeEscola);
    Linha();
}

CabecalhoEscola('USP');
CabecalhoEscola('SESI');

function Soma(nr1, nr2) {
    let resultado = nr1 + nr2;
    console.log(resultado);
}

Soma(5, 8);
Soma(1232312, 90094975);

//Função com parâmetros e retorno
function Media(n1, n2) {
    let resultado = (n1 + n2) / 2;
    return resultado;
}

let valor = Media(5, 8);

const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const segredo = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C',];
function criptografar(texto) {
    let resultado = '';
    for (let letra of texto) {
        let posicao = alfabeto.indexOf(letra);
        resultado += segredo[posicao];
    }
    return resultado;
}
function descriptografar(texto) {
    let resultado = '';
    for (let letra of texto) {
        let posicao = segredo.indexOf(letra);
        resultado += alfabeto[posicao];
    }
    return resultado;
}


let palavra = 'SENAI';
let palavraCriptografada = criptografar(palavra);
console.log(`A palavra ${palavra} criptografada é ${palavraCriptografada}`);

let palavraDescriptografada = descriptografar(palavraCriptografada)
console.log(palavraDescriptografada);



function Dobro (n1, n2){
    console.log(n1 + n2);
}




