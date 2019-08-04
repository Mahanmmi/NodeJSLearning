const fs = require('fs');

// const book = {
//     title: "PatashKho'Aargar",
//     author: "Armaan Arian"
// };

// let myBookStr = JSON.stringify(book);
// console.log(myBookStr);
// console.log(JSON.parse(myBookStr).title)
// fs.writeFileSync('1-json.json', myBookStr)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.author);

const data = JSON.parse(fs.readFileSync('1-json.json').toString())
data.name = 'Mahan'
data.age = 19
fs.writeFileSync('1-json.json', JSON.stringify(data))