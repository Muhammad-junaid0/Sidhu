const dbConnect = require('./mongodb');

const deleteData = async () => {
    let collection = await dbConnect();
    //let result = await collection.deleteMany({ brand: 'micromax' }); to delete more than one row
    let result = await collection.deleteOne({ name: 'max 5' });
    if (result.deletedCount > 0) {
        console.warn("data is deleted");
    }
}

deleteData();
