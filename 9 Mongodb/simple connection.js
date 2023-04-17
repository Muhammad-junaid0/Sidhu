const { MongoClient } = require('mongodb')
//another syntax
// const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'e-comm'
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)
}

getData();

