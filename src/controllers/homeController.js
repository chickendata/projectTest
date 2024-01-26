const connection = require("../config/database");
const {
  getAllProduct,
  getProductById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUD");
const getHomePage = async (req, res) => {
  let results = await getAllProduct();
  return res.render("home.ejs", { listProduct: results });
};

const getIsLogIn = (req, res) => {
  res.render("homeLogIn.ejs");
};

const postCreateProduct = async (req, res) => {
  let nameProduct = req.body.nameProduct;
  let img = req.body.image;
  let price = req.body.price;
  let description = req.body.description;
  let dayCreate = req.body.dayCreate;
  let dayDeal = req.body.dayDeal;

  let [results, fields] = await connection.query(
    `INSERT INTO Product (nameProduct,image,price,description,dayCreate,dayDeal) VALUES (?,?,?,?,?,?)`,
    [nameProduct, img, price, description, dayCreate, dayDeal]
  );
  console.log(results);
  res.send("Create user success !!");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const productId = req.params.id;
  let product = await getProductById(productId);
  res.render("edit.ejs", { productEdit: product });
};

const postUpdateProduct = async (req, res) => {
  let productId = req.body.productId;
  let nameProduct = req.body.nameProduct;
  let image = req.body.image;
  let price = req.body.price;
  let description = req.body.description;
  let dayCreate = req.body.dayCreate;
  let dayDeal = req.body.dayDeal;
  console.log(
    "aaaaa",
    nameProduct,
    image,
    price,
    description,
    dayCreate,
    dayDeal
  );
  await updateUserById(
    nameProduct,
    image,
    price,
    description,
    dayCreate,
    dayDeal,
    productId
  );
  res.redirect("/api/v1/product/list");
};

const getDeleteProduct = async (req, res) => {
  const productId = req.params.id;
  let product = await getProductById(productId);

  res.render("delete.ejs", { productDelete: product });
};

const postHandleRemoveProduct = async (req, res) => {
  const id = req.body.productId;
  await deleteUserById(id);
  res.redirect("/api/v1/product/list");
};

const getSignIn = (req, res) => {
  res.render("signIn.ejs");
};

const postHandleSignInUser = async (req, res) => {
  let name = req.body.userName;
  let pw = req.body.password;
  let confirmPw = req.body.confirmPassword;
  if (pw == confirmPw && name !== "" && pw !== "") {
    let [results, fields] = await connection.query(
      `INSERT INTO login (name,pw) VALUES (?,?)`,
      [name, pw]
    );
    res.send("Sign Up Success!!!!");
  } else {
    res.send("Fill in missing information!");
  }
};

const getLogInUser = (req, res) => {
  res.render("logIn.ejs");
};

const postLogInUser = async (req, res) => {
  let userName = req.body.name;
  let pw = req.body.pw;
  if (userName && pw) {
    let [results, fields] = await connection.query(
      "select * from login where name = ?",
      [userName]
    );

    if (results[0].name === userName && results[0].pw === pw) {
      req.session.name = results[0].name;
      res.locals.name = req.session.name;
      res.redirect("/api/v1/product/list");
    } else {
      res.send("Incorrect name or password!");
    }
    res.end();
  } else {
    res.send("Nhập đầy đủ thông tin của bạn!");
    res.end();
  }
};
module.exports = {
  getIsLogIn,
  getHomePage,
  postCreateProduct,
  postUpdateProduct,
  getDeleteProduct,
  getCreatePage,
  getUpdatePage,
  getSignIn,
  getLogInUser,
  postHandleRemoveProduct,
  postHandleSignInUser,
  postLogInUser,
};
