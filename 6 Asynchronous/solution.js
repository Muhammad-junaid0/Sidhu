const { resolve } = require("path");
var a = 10, b = 0;
let waitingData = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(30);
        //b=30; we are doing this
    }, 2000)
})

waitingData.then((data) => {
    b = data;
    console.log(a + b);
})