// Object property shorthand

const name = 'Mahan';
const userAge = 19;

const user = {
    name,
    age: userAge,
    location: 'Tehran'
};

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 10000,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating: rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

function transaction(type, { label, stock = 0 } = {}) {
    console.log(type, label, stock);
}

transaction('order', product);