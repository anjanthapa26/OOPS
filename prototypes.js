function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;


//getSummary 

Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author}`;
    }
}

//get age 

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return ` ${this.title} is ${years} years old`;
}
// Instantiated an object
const book4 = new Book('Book one','anjan','2022');
const book5 = new Book('Book two','ram','2022');


console.log(book4);