let towns = ["Ponterra", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"]

console.log(towns)
//it will separate the items from the list, and show it separately
console.log(...towns)

//will show one letter separately from the string IZLUDE
console.log(...towns[1])
//this does not work cause the transformations that you do on one array you going to do on the other one
let townsCopyFake = towns

townsCopyFake.pop()
townsCopyFake.pop()


console.log(townsCopyFake)


//this is the right way to do a copy of a list 
const townsClone = [...towns]

townsClone.push('Alderban')

//this is way to clone a object, from a existing list
const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = "Olá"

console.log(townsObj,townsObjClone)





