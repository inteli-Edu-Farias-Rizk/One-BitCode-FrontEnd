function register(element){
    //ele pegou o elemento pai ou seja a section inteira 
    console.log(element)
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert(`O usuario ${username} resgistrado!`)
    }else{
        alert("As senhas não conferem!")
    }
    console.log(username,password,passwordConfirmation)
}