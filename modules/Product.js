const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String,
  username: String,
  email: String,
  passowrd: String,
  type : String,
  image: String,
});

const BookTableSchema = mongoose.Schema({
  date: String,
  phone: String,
  time: String,
  total: String,
  username: String,
  image: String,
});
const BreakFast = mongoose.model("breakfast", productsSchema);
const AllProducts = mongoose.model("allproducts", productsSchema);
const Dishes = mongoose.model("dishes", productsSchema);
const Drinks = mongoose.model("drinks", productsSchema);
const Dessert = mongoose.model("desserts", productsSchema);

// Here APIS For Register & Login
const CreateLogin = mongoose.model("createlogin", productsSchema);

// Here for BookTable post & Get
const BookTable = mongoose.model("booktable", BookTableSchema);

module.exports = { BreakFast, AllProducts, Dishes, Drinks, Dessert , CreateLogin ,BookTable };
