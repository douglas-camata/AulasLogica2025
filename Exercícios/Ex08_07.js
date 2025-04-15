function Soma(nr1, nr2) {
    console.log(nr1 + nr2);
}
function Subtrair(nr1, nr2) {
    console.log(nr1 - nr2);
}
function Multiplicar(nr1, nr2) {
    console.log(nr1 * nr2);
}
function Dividir(nr1, nr2) {
    console.log(nr1 / nr2);
}
function Calcular(nr1, nr2, op) {
    if (op == '+') {
        Soma(nr1, nr2);
    } else if (op == '-') {
        Subtrair(nr1, nr2);
    } else if (op == '*') {
        Multiplicar(nr1, nr2);
    } else if (op == '/') {
        Dividir(nr1, nr2);
    }
}

Calcular(10, 5, '+');
