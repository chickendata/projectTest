const express = require("express");
const router = express.Router();
const {
  getIsLogIn,
  getHomePage,
  postCreateProduct,
  postUpdateProduct,
  getCreatePage,
  getUpdatePage,
  getDeleteProduct,
  getSignIn,
  getLogInUser,
  postHandleRemoveProduct,
  postHandleSignInUser,
  postLogInUser,
} = require("../controllers/homeController");

router.get("/", getIsLogIn);
router.get("/api/v1/product/list", getHomePage);
router.get("/create", getCreatePage);
router.get("/api/v1/product/update/:id", getUpdatePage);
router.get("/api/v1/product/delete/:id", getDeleteProduct);
router.get("/register", getSignIn);
router.get("/logIn", getLogInUser);
router.post("/login-success", postLogInUser);
router.post("/create-product", postCreateProduct);
router.post("/update-product", postUpdateProduct);
router.post("/delete-product", postHandleRemoveProduct);
router.post("/signIn-user", postHandleSignInUser);
module.exports = router;
