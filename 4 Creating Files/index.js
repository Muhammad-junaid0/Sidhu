const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');//the files directory should be in the same directory
for (i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple text file");
    fs.writeFileSync(`${dirPath}/ello${i}.txt`, `a simple text${i} file`);
}

fs.readdir(dirPath, (err, files) => {
    files.forEach((item) => {
        console.warn(item);
    })
})

