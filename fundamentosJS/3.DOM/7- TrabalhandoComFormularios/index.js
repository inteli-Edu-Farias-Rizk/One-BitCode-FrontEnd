const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    //vai prevenir o comportamento padrão
    ev.preventDefault()

    const name= document.querySelector('input[name = "name"]').value
    const address= document.querySelector('input[name = "address"]').value
    const breadType = document.querySelector("select[name='breadType']").value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name = "observations"]').value
    //o checkbox pode ter mais de um valor
    let salad =''
    //it gives a nodeList
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += ' - ' + item.value + "\n"
        console.log({name,address,breadType,main,salad,observations})
    })
})