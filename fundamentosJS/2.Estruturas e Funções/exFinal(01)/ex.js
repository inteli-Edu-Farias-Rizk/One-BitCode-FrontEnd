//vai ser uma lista com as vagas em que terão vários canditatos para um mesma vaga 
let vagas = []
let escolha;
while (escolha != 0) {
    // alert("Vagas disponíveis:");
    // vagas.forEach(function (elemento, indice) {
    //     alert("Vaga " + (indice + 1) + ": " + elemento.nome);
    // });
    
    alert("Escolha uma opção"/n +
    "1 - Listar Vagas Disponíveis"/n+
    "2 - Cadastrar Vaga"/n+
    "3 - Visualizar uma vaga"/n+
    "4- Inscrever um novo candidato"/n+
    "5- excluir uma vaga"/n+
    "0- Sair"
    )
    escolha = prompt("Escolha uma opção: ")

    if (escolha == 1){
    //quero que crie uma função que itere sobre a lista e imprima o indice dela e o nome da vaga
    function listarVagas() {
        vagas.forEach(function (elemento, indice) {
            console.log("Índice: " + indice + ", Vaga: " + elemento.nome);
        });
    }
    vagas.listarVagas()
    }else if (escolha == 2){
        dic = {};
        dic["nome"] = prompt("Digite o nome da vaga")
        dic["descricao"] = prompt("Digite a descrição da vaga")
        dic["dataLimite"] = Number(prompt("Digite a data limite da vaga"))

        vagas.push(dic)

        alert(dic["nome"] +" cadastrada com sucesso")
    }else if(escolha == 3){
        indice = Number(prompt("Digite o indice da vaga que deseja visualizar"))
        console.log(vagas[indice])
    }else if (escolha == 4){
        indice = Number(prompt("Digite o indice da vaga que deseja inscrever um candidato"))
        candidato = prompt("Digite o nome do candidato")
        vagas[indice].vagas['nome'].push(candidato)
    }else if (escolha == 5){
        indice = Number(prompt("Digite o indice da vaga que deseja excluir"))
        vagas.splice(indice, 1)
    }
}