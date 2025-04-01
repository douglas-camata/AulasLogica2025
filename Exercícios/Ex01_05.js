const prompt = require('prompt-sync')();

//Lendo o valor em metros
let metros = Number(prompt('Digite uma medida em metros: '));
//Convertendo em cm
let cm = metros * 100;
//Convertendo em mm
let mm = metros * 1000;
//Convertendo em km
let km = metros / 1000;
//Exibindo o valor
console.log(`${metros}m é ${cm}cm, ${mm}mm e ${km}km`);
//                5   m é   500cm,  5000mm e 0,005km
 

