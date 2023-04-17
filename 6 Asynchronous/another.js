console.log("starting up")//Call Stack

setTimeout(() => {
    console.log("2 second wait")//Node API
}, 2000);

setTimeout(() => {
    console.log("0 second wait")//Node API  ->//Node API ->//Call Stack
}, 0);

console.log("finishing up")//Call Stack