// Constructor

function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author}`;
    }
}


// Instantiated an object
const book1 = new Book('Book one','anjan','2022');
const book2 = new Book('Book two','ram','2022');

console.log(book1.getSummary());
console.log(book1);