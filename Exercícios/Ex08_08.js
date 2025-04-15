function SenhaAleatoria(qtdeCaracteres) {
    let listaCaracteres = 'zxcvbnmasdfghjklçqwertyuiop1234567890ZXCVBNMASDFGHJKLQWERTYUIOP!@#$%¨&*()_'
    let senha = '';

    for (let x = 1; x <= qtdeCaracteres; x++){
        let posSorteada = Math.floor(Math.random() * listaCaracteres.length)
        senha = senha + listaCaracteres[posSorteada];
    }

    return senha;
}
let senhaGerada = SenhaAleatoria(50);
console.log(senhaGerada);

