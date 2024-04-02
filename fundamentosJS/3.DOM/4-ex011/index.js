function addPlayer(){
    const teamList = document.getElementById('team-list')
    const posicao = document.getElementById('position').value
    const nome = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm(`Deseja mesmo adicionar o ${nome} na posição ${posicao} com o numero ${number}`)

    if(confirmation){
        const ul = document.createElement('ul')
        const playerItem = document.createElement('li')
        playerItem.id = "Player-" + number
        playerItem.innerText = posicao+ ": " + nome + " (" + number + ")"
        ul.appendChild(playerItem)

        document.getElementById('position').value = ""
        document.getElementById('name').value = ""
        document.getElementById('number').value = ""
        teamList.appendChild(ul)

    }
}
function removePlayer(){
    const removeNumber = document.getElementById('numberToRemove').value
    const removePlayer = document.getElementById('Player-'+ removeNumber)
    const confirmation = confirm(`Deseja retirar o jogador com o numero ${removeNumber}`)
    if(confirmation){
        removePlayer.remove()
    }
    document.getElementById('numberToRemove').value = ''
    

}