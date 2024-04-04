const button = document.getElementById('register-button')
function register(ev){

    const sectionElement = ev.currentTarget.parentNodex
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation){
        alert('O usuario' + username + 'registrado')
    }else{
        alert('As senhas não conferem!')
    }
        
}


//vai ficar esperando os elementos acontecerem 
button.addEventListener('click', register)

function removeListener(){
    //isso quer dizer que você quer remover um evento que seja do tipo click que tenha uma function do tipo register
    //ele basicamente tira o evento do botão
    button.removeEventListener('click', register)
    alert('Event Removed')
}

button.addEventListener('mouseover', function(ev) {
    console.log(ev.currentTarget)
})



