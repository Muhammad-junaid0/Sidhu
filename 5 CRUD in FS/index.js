const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`;

//Writing to a file
//fs.writeFileSync(filePath, 'this is apple file');

//Reading from a file
// fs.readFile(filePath, 'utf-8', (err, item) => {
//     console.log(item);
// })

//appending from a file
// fs.appendFile(filePath, ' and file name is appe.txt', (err) => {
//     if (!err) console.log('file is updated');
// })

//renaming  a file
// fs.rename(filePath, `${dirPath}/banana.txt`, (err) => {
//     if (!err) console.log('file is renamed');
// })

//deleting a file
fs.unlinkSync(`${dirPath}/banana.txt`);