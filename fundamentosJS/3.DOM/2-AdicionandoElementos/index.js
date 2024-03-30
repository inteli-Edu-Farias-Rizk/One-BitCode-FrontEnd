function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')

    newLi.className = 'list-item'   
    newLi.innerText = 'Novo input'  

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    //Create the element new input, and put it on the NEWLi
    //then append the new li into the ul(that already exists)

    //gonna make appear on the screen
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}   