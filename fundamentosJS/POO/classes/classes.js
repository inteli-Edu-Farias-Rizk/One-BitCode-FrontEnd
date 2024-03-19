class Book{
    constructor(title){
        //instancias
        this.title = title
        this.node = 0;

    }

    publish(){
        this.node = 1;
    }
}
const eragon = new Book("Eragon")
eragon.publish()
console.log(eragon)