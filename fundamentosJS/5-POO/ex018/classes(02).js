class Product{
    constructor(name,description,price){
        this.inStock = 0
        this.name = name
        this.description = description
        this.price = price
    }
    addToStock(stock){
        this.inStock += stock
        console.log(this.inStock)

    }
    calculateDiscount(desconto){
        this.price = this.price - this.price * desconto/100
        console.log(this.price)

    }
}
const sacoLixo = new Product("Saco","Para jogar lixo fora",110)

sacoLixo.addToStock(30)

sacoLixo.calculateDiscount(20)