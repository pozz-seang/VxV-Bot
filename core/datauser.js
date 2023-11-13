
const fs = require("fs")
let jsonFile = require('jsonfile');

const user = []


const saveData = () => {
    jsonFile.writeFile('core/datauser.txt', user);
}

const readData = () => {
    const data = JSON.parse(fs.readFileSync("core/datauser.txt"));
    
    console.log(user);
}

// const jsonString = JSON.stringify(customer)fs.writeFile('./newCustomer.json', jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file')
//     }
// })





module.exports = {
    user,
    saveData,
    readData
}