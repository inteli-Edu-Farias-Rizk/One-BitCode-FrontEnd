
function createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.htmlFor = htmlFor; // Corrected property name to htmlFor
    label.innerText = text;
    return label;
}

function createInput(id, value, name, type = 'text') {
    const input = document.createElement('input');
    input.value = value;
    input.id = id;
    input.name = name;
    input.type = type;
    return input;
}
const sub = document.getElementById('sub')
const form = document.getElementById("newTechnology"); // Corrected to match HTML
const newTecBtn = document.getElementById('addTecBtn'); // Use this to attach event listener
const stackInputs = document.getElementById('newInputs'); // Corrected ID to match HTML
let inputRows = 0;

newTecBtn.addEventListener('click', function(ev) { // Corrected variable name
    ev.preventDefault();
    const newRow = document.createElement('li');
    const rowIndex = inputRows++;
    newRow.id = 'row-' + rowIndex;
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome:', 'techName-' + rowIndex);
    const techNameInput = createInput('techName-' + rowIndex, '', 'techName');

    const expLabel = createLabel('Experiência:', '');

    const expRadio1 = createInput('expRadio-' + rowIndex + '-1', '0-2', 'techExp-' + rowIndex, 'radio');
    const expLabel1 = createLabel('0-2 anos', 'expRadio-' + rowIndex + '-1');

    const expRadio2 = createInput('expRadio-' + rowIndex + '-2', '3-4', 'techExp-' + rowIndex, 'radio');
    const expLabel2 = createLabel('3-4 anos', 'expRadio-' + rowIndex + '-2');

    const expRadio3 = createInput('expRadio-' + rowIndex + '-3', '5+', 'techExp-' + rowIndex, 'radio');
    const expLabel3 = createLabel('5+ anos', 'expRadio-' + rowIndex + '-3');

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click',function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3,removeRowBtn);

    stackInputs.appendChild(newRow); // Changed from append to appendChild for consistency
});
let developers = []
sub.addEventListener('click',function(ev){
    ev.preventDefault();
    const fullnameInput = document.getElementById('name')
    //vai criar uma node list com todos os inputRows que tem o className como inputRow
    const inputRows = document.querySelectorAll('.inputRow')
    let technologies = []
    inputRows.forEach(function(row){ 
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#'+ row.id + ' input[type="radio"]:checked').value
        technologies.push({name: techName, exp: techExp})
    })
    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fullnameInput.value = ''
    inputRows.forEach(function(row){
        row.remove()
    })

    
    console.log(developers)
})

