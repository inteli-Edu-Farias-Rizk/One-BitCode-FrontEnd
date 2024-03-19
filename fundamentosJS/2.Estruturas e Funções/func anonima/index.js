
// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
  return a + b
}
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
const operacao = somar
console.log(operacao(4, 5))


// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a, b) {
    return a - b
  }
//elas são atribuidas a variáveis como se fossem valores 
  console.log(subtrair(36, 13))