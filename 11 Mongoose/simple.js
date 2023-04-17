const mongoose = require('mongoose');
const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({ name: "juni", price: 0000 })
    let result = await data.save();
    console.log(result);
}
main();