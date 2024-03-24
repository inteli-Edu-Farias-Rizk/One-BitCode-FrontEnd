const Address = require('./Address')
const Person = require('./Person')
const addr = new Address('Rua das flores', 123, 'Centro', 'São Paulo', 'SP')

const jon = new Person ("Jon Doe", addr)

console.log(jon)

console.log(jon.addres.fullAddress()) //Rua das flores, 123, Centro, São Paulo, SP