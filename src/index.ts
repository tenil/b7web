import * as Matematica from './Matematica';
import validator from 'validator';

let n1: number = 11;
let n2: number = 2;

console.log(`Aritimétia sobre os números: ${n1} e ${n2}`);
console.log(`Soma: ${Matematica.somar(n1, n2)}`);
console.log(`Subtração: ${Matematica.subtrair(n1, n2)}`);
console.log(`Multiplicação: ${Matematica.multiplicar(n1, n2)}`);
console.log(`Divisão: ${Matematica.dividir(n1, n2)}`);

console.log( validator.isEmail('roberto@tenil.com.br'));
