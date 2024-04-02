class Property{
    constructor(area, price){
        this.area = area;
        this.price = price;
    }   
    getPrice(){
        return this.price / this.area
    }
}
class House extends Property{
    constructor(area,price,number){
        super(area,price)
        this.number = number
    }
    floor(){
        return `this.numer.slice ${this.number} ${this.area}`
    }
}
const land = new Property(200,50000)
const someHouse = new House(120,50000,13)

console.log(someHouse.floor())