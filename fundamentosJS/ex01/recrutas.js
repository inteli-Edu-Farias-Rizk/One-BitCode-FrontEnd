let nome = prompt('Qual seu nome?');
let anoAtual = prompt('Em que ano estamos?');
let sobrenome = prompt('Qual seu sobrenome?');
let campo = prompt('Qual campo de estudo voçê deseja cursar?');
let anoNascimento = prompt('Em que ano você nasceu?');


let idade = anoAtual - anoNascimento;

console.log(`Olá, ${nome} ${sobrenome}! Você tem ${idade} anos e deseja estudar ${campo}.`);