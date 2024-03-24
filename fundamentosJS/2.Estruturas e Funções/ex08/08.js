lista = [];
escolha = 0;


while(escolha != 3){
    escolha = parseInt(prompt("1 -- Mostrar a quantidade de imoveis na lista\n2 -- Adicionar imovel na lista\n3 -- Sair\n 4--Mostre todos os imoveis na lista"));
    if (escolha == 1){
        alert("A lista possui " + lista.length + " imoveis");
    }else if (escolha == 2){
        imovel = []
        imovel.push(prompt("Nome do propietário"));
        imovel.push(parseInt((prompt("Quantidade de banheiros: "))));
        imovel.push(parseInt((prompt("Quantidade de quartos: "))));
        imovel.push(parseInt((prompt("Tem garagem? 1 - Sim, 2 - Não: "))));
        lista.push(imovel);
    }else if (escolha == 3){
        alert("Saindo...");
    }else if (escolha == 4){
        for(let i = 0;i<lista.length;i++){
            alert("Propietário: " + lista[i][0] + "\nBanheiros: " + lista[i][1] + "\nQuartos: " + lista[i][2] + "\nGaragem: " + lista[i][3]);
        }
    }
}