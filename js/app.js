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

// function sum(n1, n2) {
//     return n1 + n2;
// }
// let result = sum (5, 5);
// console.log(result);

// Controle de fluxos

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito.

let balance = 1000;

function withdraw(amount) {
    if (amount > balance) {
        console.log('Saldo insuficiente');
    } else if (amount > 700) {  
        console.log('Valor máximo por saque é de 700 reais');
    } else {
        balance = balance - amount;
    }
    
}

withdraw(701);
console.log(balance);

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando eu sacar 500 reais
// Então o valor do saque deve ser deduzido do meu saldo final, que passa a ser de 500 reais.



// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando eu faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve exibir uma mensagem de alerta informando que o valor é superior ao saldo.

// Cenaŕio 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo de saque por operação é de 700 reais
// Quando eu faço um saque de 701 reais
// Então não deve deduzir do meu saldo
// E deve exibir uma mensagem de alerta informando que o valor excede o limite por operação.