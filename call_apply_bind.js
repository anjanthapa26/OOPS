
function Store(product,quantity,id) {
    this.product = product;
    this.quantity = quantity;
    this.id = id;
}

const s1 = new Store('apple',2,4);

function calculate(val) {
    console.log(val);
}

const a = [1,2,3,4];
// call method
calculate.call(s1,a);



// apply method
calculate.apply(s1,a);


// bind method

const binder = calculate.bind(s1,a);
