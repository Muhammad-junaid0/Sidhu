const express = require("express");
require("./config");//db configuration in the confiq.js file
const Products = require("./product");//loading schema from product.js
const app = express();

app.use(express.json());

//for inserting data into the database
app.post("/create", async (req, resp) => {
    let data = new Products(req.body);
    let result = await data.save(); //because it will return promise
    resp.send(result);
});

//for getting data from database
app.get("/fetch", async (req, resp) => {
    let data = await Products.find(); //because it will return promise
    resp.send(data);
});

//for keyword searching 
app.get("/search/:key", async (req, resp) => {
    let data = await Products.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } },
                { "category": { $regex: req.params.key } }
            ]
        }
    ); //because it will return promise
    resp.send(data);
});

//for deleting data we can also specify the name of the specific field we want to delete 
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await Products.deleteOne(req.params); //because it will return promise
    resp.send(data);
});


//for updating the data
app.put("/update/:_id", async (req, resp) => {
    let data = await Products.updateOne(
        req.params,
        { $set: req.body }
    )
    resp.send(data);
});

app.listen(5000);
