let lista = ["Matheus", "Gabriel","Julia"];

alert(lista);   

escolha = parseInt(window.prompt("Digite 1 para adicionar um nome na lista, 2 para remover um nome da lista, 3 para ver a lista, 4 para sair"));
while(escolha != 4){
    if (escolha == 1) {
        let nome = window.prompt("Digite o nome que você quer adicionar")
        lista.push(nome)
    } else if (escolha == 2) {
        let nome = parseInt(window.prompt("Digite a posição que você quer remover"))
        lista.pop(nome)
    } else if (escolha == 3) {
        alert(lista)
    } else if (escolha == 4) {
        alert("Até mais!")
    } else {
        alert("Opção inválida")
    }
    escolha = parseInt(window.prompt("Digite 1 para adicionar um nome na lista, 2 para remover um nome da lista, 3 para ver a lista, 4 para sair"));
}
