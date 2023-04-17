const express = require('express')
const dbConnect = require('./mongodb');
const app = express()
app.use(express.json());
// Define a route handler for the GET /api/data route
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)
})

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    console.log(result)
    res.send({ name: "get your reuest" })
})


// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
