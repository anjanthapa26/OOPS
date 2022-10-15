// Object of protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    getAge: function() {
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}


//create Object 
const book1 = Object.create(bookProtos);
book1.title = 'Book one';
book1.author = 'anjan';
book1.year = '2012';
console.log(book1);
