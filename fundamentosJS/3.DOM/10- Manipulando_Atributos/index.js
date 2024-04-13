const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',function(){
    console.log(input.value)
    //this will fill the input with the information given
    input.value = "Olá mundo"

    console.log(input.value)
    //this will get the value of the attribute value  of the input
    console.log(input.getAttribute('value'))

    document.getElementById('type').addEventListener('click', function(){
        //se o input type for diferente dde radio vai transformar para radio, se já for radio vai ser transformado para texto 
        input.type = input.type !== 'radio' ? 'radio' : 'text'
    })


})