function addPlayer(){
    const roster = document.getElementById('Roster')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')
    //adicionando na tela as listas 
    const positionLi = document.createElement('li')
    positionLi.innerText = "Position: "
    const positionInput = document.getElementsByName('posicao').value
    positionLi.appendChild(positionInput)
    ul.appendChild(positionLi)

    //adicionando o nome 
    const nomeLi = document.createElement('li')
    nomeLi.innerText('Name:' )
    const nameInput = document.getElementsByName('name').value
    nomeLi.appendChild(nameInput)
    ul.appendChild(nomeLi)

    //addding the number 
    const numberLi = document.createElement('li')
    numberLi.innerText('Number:' )
    const numberInput = document.getElementsByName('number').value
    numberLi.appendChild(numberInput)
    ul.appendChild(nomeLi)

    roster.append(h3,ul)
}