const Product = require("../modules/Product.js");
const ResponseMessage = require("../utilities/ResponseMessage.js");
const httpResponse = require("../utilities/HttpResponse.js");
const bcrypt = require("bcrypt");
const auth = require("../modules/Authenticator.js");
const CreateToken = require("../utilities/CreateToken.js");
// ---------------------------------Here For Add Products Only -------------------------------------------

// Here for Post Products
const AddAllProducts = async (req, res) => {
  try {
    let data = await req.body;
    let token = req.body.token;
    let picture = req.file.filename;
    if (token) {
      let tokendata = auth(token);
      if (tokendata.type == "Admin") {
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
          { data },
          null,
          "Sent Successfully"
        );
      } else {
        httpResponse(
          res,
          200,
          ResponseMessage.FAIL,
          null,
          "Please Login as Admin"
        );
      }
    } else {
      httpResponse(res, 200, ResponseMessage.FAIL, null, "Token invalid");
    }
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Please Login as Admin"
    );
  }
  res.end();
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
      "Sent Successfully"
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
    console.log(err);
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
      "Sent Successfully"
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
      "Sent Successfully"
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
const AddBookTable = async (req, res) => {
  try {
    let data = await req.body;
    let newProduct = await new Product.BookTable({
      date: data.date,
      phone: data.phone,
      time: data.time,
      total: data.total,
      type: data.type,
      username: data.username,
    });
    newProduct.save();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      data,
      null,
      "Sent Successfully"
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

// ---------------------------------Here For Get & Singal Product's Only -------------------------------------------

// ---------------------------------------------------------------------
// Here for Singal Products & Get Products
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

// Here For Book A Table
const GetBookTable = async (req, res) => {
  try {
    let getData = await Product.BookTable.find();
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      getData,
      null,
      "All Information Displayed"
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
const SingalBookTable = async (req, res) => {
  try {
    let pid = await req.params.id;
    let product = await Product.BookTable.findById(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      product,
      null,
      "Single Item targeted"
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
// Here for End Singal Products & Get Products For Book A Table

// ---------------------------------Here For Login & Register Only -------------------------------------------

// Here for Create Login Post & Get & Update & Delete
// here for post Data
const addRegister = async (req, res) => {
  try {
    const data = await req.body;
    const validator = await Product.CreateLogin.find({ email: data.email });
    if (validator.length == 0) {
      const hash = await bcrypt.hash(data.passowrd, 5);
      const newProduct = await new Product.CreateLogin({
        username: data.username,
        email: data.email,
        passowrd: hash,
        type: data.type,
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
    } else {
      httpResponse(
        res,
        200,
        ResponseMessage.FAIL,
        null,
        "email is already registered"
      );
    }
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
    // console.log(err)
  }
};
// Here for Get data
const getlogin = async (req, res) => {
  try {
    let userdata = await req.body;
    let user = await Product.CreateLogin.find({ email: userdata.email });
    if (user.length == 1) {
      let PassowrdCheck = await bcrypt.compare(
        userdata.passowrd,
        user[0].passowrd
      );
      if (PassowrdCheck) {
        let token = CreateToken(user[0].username, user[0].email, user[0].type);
        httpResponse(
          res,
          200,
          ResponseMessage.SUCCESS,
          [{ token, type: user[0].type  , username: user[0].username }],
          null,
          "Login SuccessFully"
        );
      } else {
        httpResponse(res, 200, ResponseMessage.FAIL, null, "Passowrd Wrong");
      }
    } else {
      httpResponse(
        res,
        200,
        ResponseMessage.FAIL,
        null,
        "Email is not Encrypted"
      );
    }
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Data Not Working"
    );
  }
};
// ---------------------------------Here For Delete & Update's Only -------------------------------------------
// Here for Delete Product
const DeleteAllProducts = async (req, res) => {
  try {
    const pid = req.params.id;
    const deleteProd = await Product.AllProducts.findByIdAndDelete(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      deleteProd,
      null,
      "Product deleted successfully"
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
const UpdateAllProducts = async (req, res) => {
  try {
    const pid = req.params.id;
    const UpdateProd = await Product.AllProducts.findByIdAndUpdate(
      pid,
      req.body,
      { new: true, runValidators: true }
    );
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      UpdateProd,
      null,
      "Product updated successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't update product, please try again"
    );
  }
};
// Here for End Delete Product

// Here for Update & Delete for BreakFast
const DeleteBreakFast = async (req, res) => {
  try {
    const pid = req.params.id;
    const deleteProd = await Product.BreakFast.findByIdAndDelete(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      deleteProd,
      null,
      "Product deleted successfully"
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
const UpdateBreakFast = async (req, res) => {
  try {
    const pid = req.params.id;
    const UpdateProd = await Product.BreakFast.findByIdAndUpdate(
      pid,
      req.body,
      { new: true, runValidators: true }
    );
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      UpdateProd,
      null,
      "Product updated successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't update product, please try again"
    );
  }
};
// Here for End Update & Delete for BreakFast

// Here for Update & Delete for Drinks
const DeleteDrinks = async (req, res) => {
  try {
    const pid = req.params.id;
    const deleteProd = await Product.Drinks.findByIdAndDelete(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      deleteProd,
      null,
      "Product deleted successfully"
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
const UpdateDrinks = async (req, res) => {
  try {
    const pid = req.params.id;
    const UpdateProd = await Product.Drinks.findByIdAndUpdate(pid, req.body, {
      new: true,
      runValidators: true,
    });
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      UpdateProd,
      null,
      "Product updated successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't update product, please try again"
    );
  }
};
// Here for End Update & Delete for Drinks
// Here for Update & Delete for Dishes
const DeleteDishes = async (req, res) => {
  try {
    const pid = req.params.id;
    const deleteProd = await Product.Dishes.findByIdAndDelete(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      deleteProd,
      null,
      "Product deleted successfully"
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
const UpdateDishes = async (req, res) => {
  try {
    const pid = req.params.id;
    const UpdateProd = await Product.Dishes.findByIdAndUpdate(pid, req.body, {
      new: true,
      runValidators: true,
    });
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      UpdateProd,
      null,
      "Product updated successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't update product, please try again"
    );
  }
};
// Here for End Update & Delete for Dishes
// Here for Update & Delete for Dishes
const DeleteDesserts = async (req, res) => {
  try {
    const pid = req.params.id;
    const deleteProd = await Product.Dessert.findByIdAndDelete(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      deleteProd,
      null,
      "Product deleted successfully"
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
const UpdateDesserts = async (req, res) => {
  try {
    const pid = req.params.id;
    const UpdateProd = await Product.Dessert.findByIdAndUpdate(pid, req.body, {
      new: true,
      runValidators: true,
    });
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      UpdateProd,
      null,
      "Product updated successfully"
    );
  } catch (err) {
    httpResponse(
      res,
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't update product, please try again"
    );
  }
};
// Here for End Update & Delete for Dishes

// Here for  Delete for Book A TABLE
const DeleteBookTable = async (req, res) => {
  try {
    const pid = req.params.id;
    const deleteProd = await Product.BookTable.findByIdAndDelete(pid);
    httpResponse(
      res,
      200,
      ResponseMessage.SUCCESS,
      deleteProd,
      null,
      "Done Delete The Informaton"
    );
  } catch (err) {
    // b3d el ftar hb2a akmal a3del 3alla el alarms elly btatl3 fe Notice abl ma a3ml upload ly backend
    httpResponse(
      // we 3awz at2ked mn el 7aga elly 3amlha ly book table mstahdef el 3nsr bta3 Product.booktable sa7 walla la2
      res, // we 3awz atk2d bardo mn en el rules bta3t el data sa7 walla la2 zy username , phone , date ,we 3'erha
      400,
      ResponseMessage.ERROR,
      null,
      err,
      "Couldn't Upload, Please Try again"
    );
  }
};
// Here for End & Delete for Book A TABLE

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
  getlogin,
  DeleteAllProducts,
  UpdateAllProducts,
  DeleteBreakFast,
  UpdateBreakFast,
  UpdateDishes,
  DeleteDishes,
  UpdateDrinks,
  DeleteDrinks,
  UpdateDesserts,
  DeleteDesserts,
  AddBookTable,
  DeleteBookTable,
  SingalBookTable,
  GetBookTable,
};
