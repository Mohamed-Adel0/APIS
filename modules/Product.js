const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  title: String,
  price: String,
  image: String,
  description: String,
  username: String,
  email: String,
  passowrd: String,
  type : String
});


const BreakFast = mongoose.model("breakfast", productsSchema);
const AllProducts = mongoose.model("allproducts", productsSchema);
const Dishes = mongoose.model("dishes", productsSchema);
const Drinks = mongoose.model("drinks", productsSchema);
const Dessert = mongoose.model("desserts", productsSchema);

// Here APIS For Register & Login
const CreateLogin = mongoose.model("createlogin", productsSchema);

module.exports = { BreakFast, AllProducts, Dishes, Drinks, Dessert , CreateLogin };
