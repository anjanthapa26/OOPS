class Book {
    constructor(title,author,year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return ` ${this.title} was written by ${this.author}`;
    }
}


// Instantiate object 
const book1 = new Book('Book1','anjan',2022);
console.log(book1);