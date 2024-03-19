function Book(title,author,pages,tags){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.tags = tags;
    this.published = false; //this means that for all books they will start as not published
    this.stock = 0; //this means that for all books they will start with 0 stock
    this.addOnStock = function addOnStock(quantity){
        this.stock += quantity;
    }
    this.save = function(){
    }
}
const author = "Christopher Paolini";
const tags = ["fantasy","adventure","dragons"];


const eragon = new Book("Eragon","Christopher Paolini",546,["fantasy","adventure","dragons"]);
