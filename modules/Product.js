const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  title: String,
  price: String,
  image: String,
  description: String,
});

const BreakFast = mongoose.model("breakfast", productsSchema);
const AllProducts = mongoose.model("allproducts", productsSchema);
const Dishes = mongoose.model("dishes", productsSchema);
const Drinks = mongoose.model("drinks", productsSchema);
const Dessert = mongoose.model("desserts", productsSchema);

module.exports = { BreakFast, AllProducts, Dishes, Drinks, Dessert };
