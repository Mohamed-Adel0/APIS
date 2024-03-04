const express = require("express");
const Router = express.Router();
const prdcontroller = require("./../Controller/prodcutscontroller.js");
const multer = require("multer");
// Here for Upload Pictures
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../fullstack/src/Components/image"));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const upload = multer({ storage });
// Here for End Upload Pictures

// ---------------------------------------------------------------------

// Here for Start Post
Router.route("/allproducts").post(
  upload.single("image"),
  prdcontroller.AddAllProducts
);
Router.route("/breakfast").post(
  upload.single("image"),
  prdcontroller.addBreakFast
);
Router.route("/dishes").post(upload.single("image"), prdcontroller.AddDishes);
Router.route("/drinks").post(upload.single("image"), prdcontroller.AddDrinks);
Router.route("/dessert").post(upload.single("image"), prdcontroller.AddDessert);
// Here for End Start Post
// ---------------------------------------------------------------------

// Here for Get All Products & Singal Products

// Here For allProducts
Router.route("/allproducts").get(prdcontroller.GetAllProducts);
Router.route("/allproducts/:id").get(prdcontroller.SingalProdBreakFast);
// ---------------------------------------------------------------------
// Here For BreakFast
Router.route("/breakfast").get(prdcontroller.GetprodBreakFast);
Router.route("/breakfast/:id").get(prdcontroller.SingalProdBreakFast);
// ---------------------------------------------------------------------
// Here For Dishes
Router.route("/dishes").get(prdcontroller.GetDishes);
Router.route("/dishes/:id").get(prdcontroller.SingalDishes);
// Here for Get All Products & Singal Products
// ---------------------------------------------------------------------
// Here For Drinks
Router.route("/drinks").get(prdcontroller.GetDrinks);
Router.route("/drinks/:id").get(prdcontroller.SingalDrinks);
// ---------------------------------------------------------------------
// Here For SessertS
Router.route("/dessert").get(prdcontroller.GetDessert);
Router.route("/dessert/:id").get(prdcontroller.SingalDessert);
// ---------------------------------------------------------------------
// Here for End Get All Products & Singal Products
Router.route("/register").post(upload.single("image"),prdcontroller.addRegister);
// Here for get Data
Router.route("/login").get(prdcontroller.getlogin);

 

// -------------------------------------------------------------------
// Here Routes for Register & Login 

module.exports = Router;
