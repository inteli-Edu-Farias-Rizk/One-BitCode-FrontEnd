function show(){
    const contactList = document.getElementById("contact-list")
    console.log("contactList")
    //its going to create a list of the elements that has the name li
    const listElements = document.getElementsByTagName("li")
    console.log(listElements)

    const contactInputs = document.getElementsByName('contact-input')
    console.log(contactInputs)
    //You obtain the elemenst by using the same mechanincs that are used on the Css 
    // # = for the id 
    // > inner elements
    const contacts = document.querySelectorAll('#contact-input > li > label ')
    console.log(contacts)


    //Element - basically only consider HTML objects not for example: A piece of text, more specific 
    //NodeList - consider every type, since comments to texts so is less specific 
    //HTML collection - 
}
