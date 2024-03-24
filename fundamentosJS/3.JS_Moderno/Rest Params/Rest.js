//This is a way to pass as much parameters you want for the function, because ...number is an array

// o rest param always need to be the param

function sum(...number){
    return number.reduce((acc,num) => acc + num ,0)
}

const result = sum(1,3,4,5)
console.log(result)