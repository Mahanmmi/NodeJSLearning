setTimeout(() => {
    console.log('Two seconds are up')
}, 2000);

const names = ['Mahan', 'Mostafa', 'Bahar'];
const shortNames = names.filter(name => {
    return name.length <= 5;
});

console.log(shortNames);

function geocode(address, myCallback) {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
        myCallback(address, data)
    }, 2000)
}

geocode("Wow", (address, data) => {
    console.log(address, data)
});


function add(a, b, func) {
    setTimeout(() => { func(a + b) }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})