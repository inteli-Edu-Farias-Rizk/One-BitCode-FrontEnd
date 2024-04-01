// Defines a function to add a new contact section to the page.
function addContact() {
    // Gets the section where contacts will be added by its ID.
    const contactSection = document.getElementById('contacts-list');
  
    // Creates an <h3> element and sets its text to "Contato".
    const h3 = document.createElement('h3');
    h3.innerText = "Contato";
  
    // Creates a <ul> element that will contain the contact details.
    const ul = document.createElement('ul');
  
    // Creates a list item for the name input field.
    const nameLi = document.createElement('li');
    nameLi.innerText = "Nome: ";
    // Creates an input field for entering the name and appends it to the list item.
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameLi.appendChild(nameInput);
    // Appends the list item to the <ul> and adds a line break.
    ul.appendChild(nameLi);
    ul.appendChild(document.createElement('br'));
  
    // Creates a list item for the phone input field.
    const phoneLi = document.createElement('li');
    phoneLi.innerText = "Telefone: ";
    // Creates an input field for entering the phone number and appends it to the list item.
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneLi.appendChild(phoneInput);
    // Appends the list item to the <ul> and adds a line break.
    ul.appendChild(phoneLi);
    ul.appendChild(document.createElement('br'));
  
    // Creates a list item for the address input field with a label.
    const addressLi = document.createElement('li');
    addressLi.innerHTML = '<label for="address">Endereço: </label>';
    // Creates an input field for entering the address and appends it to the list item.
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.id = 'address';
    addressLi.appendChild(addressInput);
    // Appends the list item to the <ul> and adds a line break.
    ul.appendChild(addressLi);
    ul.appendChild(document.createElement('br'));
  
    // Appends the <h3> header and the <ul> list of inputs to the contacts section.
    contactSection.append(h3, ul);
}

// Defines a function to remove the last added contact section from the page.
function removeContact() {
    // Gets the section where contacts are displayed by its ID.
    const contactSection = document.getElementById('contacts-list');
  
    // Retrieves all <h3> elements and <ul> elements on the page.
    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');
  
    // Removes the last <h3> element and the last <ul> element from the contact section.
    // This assumes that the last elements are the ones related to the last contact added.
    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);
}

