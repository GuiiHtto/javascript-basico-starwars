console.log('Olá, Javascript!');

let userName = 'Guilherme Henrique';

document.getElementById('userName').innerHTML = userName;

// Variáveis

// let name = 'Master Yoda';
// let age =  900;
// let isJedi = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isJedi);

// Operadores matemáticos

// let n1 = 7;
// let n2 = 2.5;

// console.log(typeof n1);
// console.log(typeof n2);

// let total = n1 / n2;
// console.log(total);

// Operadores de comparação

// let v1 = 5;
// let v2 = '5';

// let result = v1 !== v2;
// console.log(result);

// Funções

// function sum(n1, n2) {
//     console.log (n1 + n2);
// }
// sum(10, 100);

// function boasVindas(name) {
//     alert(name + ', seja bem vindo (a)')
// }

// boasVindas('Guilherme');

function sum(n1, n2) {
    return n1 + n2;
}
let result = sum (5, 5);
console.log(result);