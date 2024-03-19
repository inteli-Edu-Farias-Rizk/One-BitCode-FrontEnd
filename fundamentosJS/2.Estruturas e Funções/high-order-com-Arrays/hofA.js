const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]
//Primeiro metodo MAP
const nomes = personagens.map(function(personagem) {
    return personagem.nome
});// ["Thrall", "Garrosh", "Varok", "Uther", "Jaina", "Tyrande", "Muradin"] vai pegar os nomes e jogar em uma array

console.log(nomes)

//Segundo metodo FILTER
const orcs = personagens.filter(function(perso) {
    return perso.raca === "Orc"
});

//vai retornar um array com os personagens que são orcs,  o return é como se fosse um if que retorna true ou false, se for true ele adiciona o personagem na array, se for false ele não adiciona

// [{nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"}, {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"}, {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"}] vai pegar os orcs e jogar em uma array

console.log(orcs)

//reduce
const totalNiveis = personagens.reduce(function(acumulador, personagem) {
    return acumulador + personagem.nivel
}, 0)//o acumulador vai iniciar como 0  // 234 vai somar todos os niveis

console.log(totalNiveis)

const racas = personagens.reduce(function(acumulador, personagem) {  //personagem é um objeto acumulador é um objeto raca é um parametro do objeto personagem
    if (acumulador[personagem["raca"]]) {
        acumulador[personagem.raca].push(personagem)
    }else {
        acumulador[personagem.raca] = [personagem]
    }
    return acumulador
},{})
console.log(racas)


// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
    return a.nivel - b.nivel
  })


//Vai pegar uma copia e ordenar na ordem certa.
personagens.slice().sort(function (a, b) {
return a.nivel - b.nivel
})
