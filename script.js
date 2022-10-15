// const s = 'hello';
// console.log(typeof s);

// const s1 = new String('Hello');
// console.log(typeof s1)

// console.log(window);

// console.log(navigator.getGamepads());


//Object literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2014',
    getSummary: function() {
        return `${this.title} was written by ${this.author}`;
    }
}

console.log(Object.values(book1));
console.log(Object.keys(book1));