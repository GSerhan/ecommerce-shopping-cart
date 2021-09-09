const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const data = require("./src/data.json");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Order = mongoose.model(
    "order", 
    new mongoose.Schema({ 
    _id: {
        type: String,
        default: shortid.generate
    },
    email: String,
    name: String,
    address: String,
    total: String,
    cartItems: [{
        _id: String, 
        title: String, 
        price: Number,
        count: Number,
    }],
    timestamps: true
})
);

const Product = mongoose.model(
        "products", 
        new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String],
    })
);

app.post("/api/orders", async(req, res) => {
    if(!req.body.name ||
      !req.body.email ||
      !req.body.adress ||
      !req.body.total ||
      !req.body.cartItems) {
          return res.send({message: "Data is required."});
      }
      const order = await Order(req.body).save();
      res.send(order);
})

app.get("/api/products", async (req, res) => {
    // const products = await Product.find({});
    const products = data;
    res.send(products);
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));