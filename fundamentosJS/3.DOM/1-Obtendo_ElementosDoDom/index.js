function show(){

    
    function show() {
        // Obter um elemento único a partir do seu id
        const contactList = document.getElementById("contact-list")
        console.log(contactList)
      }
      function show() {
        // ...
      
        // Obter vários elementos (HTMLCollection) a partir de um nome de tag
        const liElements = document.getElementsByTagName("li")
        console.log(liElements)
      }

      function show() {
        // ...
      
        // Obter vários elementos (HTMLCollection) a partir de uma classe
        const contactInputs = document.getElementsByClassName("contact-input")
        console.log(contactInputs)
      }



    //You obtain the elemenst by using the same mechanincs that are used on the Css 
    // # = for the id 
    // > inner elements
    //Retorna uma nodeList
    const contacts = document.querySelectorAll('#contact-input > li > label ')
    console.log(contacts)


    //Element - basically only consider HTML objects not for example: A piece of text, more specific 
    //NodeList - consider every type, since comments to texts so is less specific 
    //HTML collection - 




    function show() {
        // ...
      
        // Obter vários elementos (NodeList) a partir do atributo name
        const contact1 = document.getElementsByName("contact1")
        console.log(contact1)
      }

      function show() {
        // ...
      
        // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
        const contact = document.querySelector("#contact-list > li > label")
        console.log(contact)
        console.log(contact.textContent)
      }
}
