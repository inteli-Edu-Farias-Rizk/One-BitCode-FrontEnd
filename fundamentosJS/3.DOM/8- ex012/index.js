const newTec = document.getElementById('newTecnology')

newTec.addEventListener('click', function(ev){
    //vai prevenir o comportamento padrão
    ev.preventDefault();
    const form = document.getElementById('newsInputs');
    const ul = document.createElement('ul');
    const nomeTec = document.createElement('li');
    nomeTec.innerText = 'Nome da Tec: ';
    
    const inputNomeTec = document.createElement('input');
    inputNomeTec.id = 'nomeDaTec';
    inputNomeTec.type = 'text';
    nomeTec.append(inputNomeTec);
    ul.append(nomeTec);
    
    // Adicionando um formulário do tipo radio
    const xp = document.createElement('li');
    xp.innerText = 'Anos de Xp: ';

    const inputXp1 = document.createElement('input');
    inputXp1.type = 'radio';
    inputXp1.id = 'xp1'; // ID atualizado para ser único
    inputXp1.name = 'xpRange'; // Adicionado nome para agrupar os radios
    inputXp1.value = '0-2';

    const labelXp1 = document.createElement('label');
    labelXp1.setAttribute('for', 'xp1');
    labelXp1.innerText = '0-2';

    const inputXp2 = document.createElement('input');
    inputXp2.type = 'radio';
    inputXp2.id = 'xp2'; // ID atualizado para ser único
    inputXp2.name = 'xpRange'; // Mesmo nome para agrupar
    inputXp2.value = '3-4';

    const labelXp2 = document.createElement('label');
    labelXp2.setAttribute('for', 'xp2');
    labelXp2.innerText = '3-4';

    const inputXp3 = document.createElement('input');
    inputXp3.type = 'radio';
    inputXp3.id = 'xp3'; // ID atualizado para ser único
    inputXp3.name = 'xpRange'; // Mesmo nome para agrupar
    inputXp3.value = '5+';

    const labelXp3 = document.createElement('label');
    labelXp3.setAttribute('for', 'xp3');
    labelXp3.innerText = '5+';
    
    // Append os inputs e labels ao item da lista
    xp.append(inputXp1, labelXp1, inputXp2, labelXp2, inputXp3, labelXp3);
    ul.append(xp);

    const remove = document.createElement('button')
    

    form.append(ul);
});
