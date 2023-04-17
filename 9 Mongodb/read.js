const dbConnect = require('./mongodb');

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })
// console.warn(dbConnect);

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    //for searching a particular item in a collection
    //data = await data.find({ name: 'nord' }).toArray();
    console.warn(data);
}
main();