const person = {
    name: "jake",
    age: 25,
    job: "Farmer"
}

// faz a mesma coisa
const name = person.name;
// faz a mesma coisa
const {job,age} = person

console.log(name, job, age)

const parente = ["Mario", "Val"]
//basicaly the desestruturation of an array is going to give a name for an especific index of the array
// such as the exemple that the index 0 of the array is going to be called father and the index 1 is going to be called mother
//after the equal sign is the array that you want to desestruturate
const [father, mother] = parente

