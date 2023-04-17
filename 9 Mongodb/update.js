const dbConnect = require('./mongodb');

const updateData = async () => {
    let collection = await dbConnect();
    //let result = await collection.updateMany() for updating all the records
    let result = await collection.updateOne(
        { name: 'max 5' },
        { $set: { price: 450 } }
    );
    if (result.modifiedCount > 0) {
        console.warn("data is updated");
    }
}

updateData();
