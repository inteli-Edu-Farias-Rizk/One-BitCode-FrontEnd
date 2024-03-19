let pessoa = {
    nome: 'Rafel',
    idade: 18,
    dizerOla(){
        console("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.")
    }
}
pessoa.dizerOla()