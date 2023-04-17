const { MongoClient } = require('mongodb')
//another syntax
// const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'e-comm'
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('products');
}

module.exports = dbConnect;
