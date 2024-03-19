function dividir (num){
    console.log(num)
    if (num%2 == 0){
        dividir(num/2)
    }
    else{
        return num
    }

}
dividir(16)

// basicamente a função recursiva é uma forma de repetição, onde a função chama a si mesma, pegando o parametro e fazndo tal ação, e fazendo nesse caso dividindo por 2, até que o resultado seja impar, e então retorna o valor.
let cont = 1
function fatorial (numm){
    if (numm == 0){
        return 1
    }else{
        return numm * fatorial(numm-1)

    }
}
console.log(fatorial(5))
