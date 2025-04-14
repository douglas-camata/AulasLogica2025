function FormatarData(dia, mes, ano){
    let dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
}

let data = FormatarData(25, 12, 1987)
console.log(data);
console.log(FormatarData(14, 4, 2025));

