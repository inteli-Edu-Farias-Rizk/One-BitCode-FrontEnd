escolha = parseInt(prompt("1 - Área do triangulo"/n + "2 - Área do quadrado" + /n "3 - Área do retângulo" + /n + "4 - Área do círculo" /n + "5 - Sair"));

function AreaTriangulo(base,altura){
    return base*altura/2;
}
function AreaQuadrado(lado){
    return lado*lado;
}
function AreaRetangulo(base,altura){
    return base*altura;
}
function AreaCirculo(raio){
    return 3.14*raio*raio;
}

while (escolha != 5){
    if (escolha == 1){
        base = parseInt(prompt("Base do triangulo: "));
        altura = parseInt(prompt("Altura do triangulo: "));
        alert("Área do triangulo: " + AreaTriangulo(base,altura));
    }else if (escolha == 2){
        lado = parseInt(prompt("Lado do quadrado: "));
        alert("Área do quadrado: " + AreaQuadrado(lado));
    }else if (escolha == 3){
        base = parseInt(prompt("Base do retangulo: "));
        altura = parseInt(prompt("Altura do retangulo: "));
        alert("Área do retangulo: " + AreaRetangulo(base,altura));
    }else if (escolha == 4){
        raio = parseInt(prompt("Raio do círculo: "));
        alert("Área do círculo: " + AreaCirculo(raio));
    }
    escolha = parseInt(prompt("1 - Área do triangulo"/n + "2 - Área do quadrado" + /n "3 - Área do retângulo" + /n + "4 - Área do círculo" /n + "5 - Sair"));
}
alert("Saindo...");