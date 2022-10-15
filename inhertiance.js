function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;


//getSummary 

Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author}`;
    }
}

//Inherit prototype

Magazine.prototype = Object.create(Book.prototype);


//magazine constructor

function Magazine(title,author,year,month) {
    Book.call(this,title,author,year);
    this.month = month;
}

// use magazine constructor

Magazine.prototype.constructor = Magazine;
// Instantiated magazine object

const mag1 = new Magazine('magone','anjan','2022','feb');
console.log(mag1);