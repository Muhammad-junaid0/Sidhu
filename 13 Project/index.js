//Write a program that takes a user's input and generates a password for them. The program should ask the user how long they want their password to be and what types of characters they want to include (uppercase letters, lowercase letters, numbers, and/or special characters).

//Once the user has provided their input, the program should generate a password that meets the user's requirements and print it to the console.

//Bonus points if you can also provide an option for the user to save their password to a file!
const express = require("express")
require("./db/config");
const User = require("./db/User");
const app = express();
app.use(express.json());
app.post("/", async (req, resp) => {
    let data = new User(req.body);
    let result = await data.save();
    resp.send(result);
});

app.listen(5000);