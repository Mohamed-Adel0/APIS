const Product = require("../modules/Product.js");
const ResponseMessage = require("../utilities/ResponseMessage.js");
const httpResponse = require("../utilities/HttpResponse.js");
// Here for Post Products
const AddAllProducts = async (req, res) => {
  try {
    let data = await req.body;
    let picture = req.file.filename;
    let newProduct = await new Product.AllProducts({
      title: data.title,
      price: data.price,
      image: picture,
      description: data.description,
    });
    newProduct.save();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      data,
      null,
      "Uploaded Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
const addBreakFast = async (req, res) => {
  try {
    let data = await req.body;
    let picture = req.file.filename;
    let newProduct = await new Product.BreakFast({
      title: data.title,
      price: data.price,
      image: picture,
      description: data.description,
    });
    newProduct.save();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      data,
      null,
      "Uploaded Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
const AddDishes = async (req, res) => {
  try {
    let data = await req.body;
    let picture = req.file.filename;
    let newProduct = await new Product.Dishes({
      title: data.title,
      price: data.price,
      image: picture,
      description: data.description,
    });
    newProduct.save();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      data,
      null,
      "Uploaded Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
const AddDrinks = async (req, res) => {
  try {
    let data = await req.body;
    let picture = req.file.filename;
    let newProduct = await new Product.Drinks({
      title: data.title,
      price: data.price,
      image: picture,
      description: data.description,
    });
    newProduct.save();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      data,
      null,
      "Uploaded Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
const AddDessert = async (req, res) => {
  try {
    let data = await req.body;
    let picture = req.file.filename;
    let newProduct = await new Product.Dessert({
      title: data.title,
      price: data.price,
      image: picture,
      description: data.description,
    });
    newProduct.save();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      data,
      null,
      "Uploaded Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
// Here for End Post Products
// ---------------------------------------------------------------------
// Here for Singal Products & Get Products
// Here For BreakFast
const GetAllProducts = async (req, res) => {
  try {
    let getData = await Product.AllProducts.find();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      getData,
      null,
      "All Products Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
const SingalAllProducts = async (req, res) => {
  try {
    let pid = await req.params.id;
    let product = await Product.AllProducts.findById(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      product,
      null,
      "SingalProducts Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
// ---------------------------------------------------------------------
// Here For BreakFast
const GetprodBreakFast = async (req, res) => {
  try {
    let getData = await Product.BreakFast.find();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      getData,
      null,
      "All Products Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
const SingalProdBreakFast = async (req, res) => {
  try {
    let pid = await req.params.id;
    let product = await Product.BreakFast.findById(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      product,
      null,
      "SingalProducts Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
// ---------------------------------------------------------------------
// Here For Drinks
const GetDrinks = async (req, res) => {
  try {
    let getData = await Product.Drinks.find();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      getData,
      null,
      "All Products Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
const SingalDrinks = async (req, res) => {
  try {
    let pid = await req.params.id;
    let product = await Product.Drinks.findById(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      product,
      null,
      "SingalProducts Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
// ---------------------------------------------------------------------
// Here For Dishes
const GetDishes = async (req, res) => {
  try {
    let getData = await Product.Dishes.find();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      getData,
      null,
      "All Products Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
const SingalDishes = async (req, res) => {
  try {
    let pid = await req.params.id;
    let product = await Product.Dishes.findById(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      product,
      null,
      "SingalProducts Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
// ---------------------------------------------------------------------
// Here For Dessert
const GetDessert = async (req, res) => {
  try {
    let getData = await Product.Dessert.find();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      getData,
      null,
      "All Products Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
const SingalDessert = async (req, res) => {
  try {
    let pid = await req.params.id;
    let product = await Product.Dessert.findById(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      product,
      null,
      "SingalProducts Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
// Here for End Singal Products & Get Products



// Here for Create Login Post & Get & Update & Delete
// here for post Data
const addRegister = async (req, res) => {
  try {
    let data = await req.body;
    let newProduct = await new Product.CreateLogin({
      username: data.username,
      email: data.email,
      passowrd: data.passowrd,
    });
    newProduct.save();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      data,
      null,
      "Uploaded Successfully" 
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again1"
    );
  }
};
// Here for Get data
const getlogin = async (req, res) => {
  try {
    let getCreate = await Product.CreateLogin.find();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      getCreate,
      null,
      "All Products Is Successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
module.exports = {
  addBreakFast,
  GetprodBreakFast,
  SingalProdBreakFast,
  AddAllProducts,
  AddDishes,
  AddDrinks,
  AddDessert,
  SingalAllProducts,
  GetAllProducts,
  SingalDrinks,
  GetDrinks,
  SingalDishes,
  GetDishes,
  GetDessert,
  SingalDessert,
  addRegister,
  getlogin
};
