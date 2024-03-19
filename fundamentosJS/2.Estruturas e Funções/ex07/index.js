let lista = ["Matheus", "Gabriel", "Julia"];

alert(lista);

let escolha = parseInt(window.prompt("Digite 1 para adicionar um nome na lista, 2 para remover um nome da lista, 3 para ver a lista, 4 para sair"));

while (escolha !== 4) {
    if (escolha === 1) {
        let nome = window.prompt("Digite o nome que você quer adicionar");
        lista.push(nome);
    } else if (escolha === 2) {
        let indice = parseInt(window.prompt("Digite a posição que você quer remover"));
        if (indice > 0 && indice <= lista.length) {
            lista.splice(indice - 1, 1);
        } else {
            alert("Posição inválida");
        }
    } else if (escolha === 3) {
        alert(lista);
    } else {
        alert("Opção inválida");
    }

    escolha = parseInt(window.prompt("Digite 1 para adicionar um nome na lista, 2 para remover um nome da lista, 3 para ver a lista, 4 para sair"));
}

alert("Até mais!");


//Exercicio da pilha de cartas 

const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + cartaPuxada)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3");

