class Address{
    constructor(street,number,neighborhood,city,state){
        this.street = street
        this.city = city
        this.neighborhood = neighborhood
        this.number = number
        this.state = state
    }
    fullAddress(){
        return `${this.street}, ${this.number}, ${this.neighborhood}, ${this.city}, ${this.state}`
    }
}

module.exports = Address
