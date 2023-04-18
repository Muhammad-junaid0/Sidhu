const express = require("express");
const EventEmitter = require("events");
const app = express();

const event = new EventEmitter();

var count = 0;

event.on("APIcount", () => {
    console.log("total count of API hit is ", count);
});
app.get("/", (req, resp) => {
    resp.send("/api called");
    count++;
    event.emit("APIcount");
});

app.get("/search", (req, resp) => {
    resp.send("/search api called");
    count++;
    event.emit("APIcount");
});

app.listen(5000);