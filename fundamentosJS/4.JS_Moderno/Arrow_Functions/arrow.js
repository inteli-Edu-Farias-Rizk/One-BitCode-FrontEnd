// A arrow function é uma forma mais simples de escrever uma função em JavaScript. Ela é escrita com uma seta (=>) entre os parâmetros e o corpo da função. Por exemplo, a função abaixo: 
// It is a anonymous functions, that you dont have a name for the funtion

const func = (a, b) => {
  return a + b;
};
const sub = (a, b) => a - b;
console.log(func(1, 2));

console.log(sub(7, 2));

const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//vai filtrar os numeros pares
const even = numbers.filter(number => number % 2 === 0);
console.log(even)    