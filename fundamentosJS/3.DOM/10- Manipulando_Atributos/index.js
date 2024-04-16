const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',function(){
    console.log(input.value)
    //this will fill the input with the information given
    input.value = "Olá mundo"

    console.log(input.value)
    //this will get the value of the attribute value of the input
    console.log(input.getAttribute('value'))
})
document.getElementById('type').addEventListener('click', function(){
    //se o input type for diferente dde radio vai transformar para radio, se já for radio vai ser transformado para texto 
    input.type = input.type !== 'radio' ? 'radio' : 'text'

    // input.setAttribute('type','radio')
})

document.getElementById('placeholder').addEventListener('click',function(){
    input.placeholder = 'type something...'
})

document.getElementById('disable').addEventListener('click',function(){
    //this will disable the input
    input.setAttribute('disabled', !input.disabled)
})

//this is a type of data tjat works just like a variable
document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    console.log('O valor do atributo data-something é: ' + data)
})



    

