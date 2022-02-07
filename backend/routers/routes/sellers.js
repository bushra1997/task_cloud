const express = require("express");
const sellerRouter = express.Router();

const authentication = require("./../middlewares/auth");

// importing controllers
const {
  createSeller,
  getAllSellers,
  getSellerByName,
} = require("./../controllers/sellers");

sellerRouter.post("/create/seller", createSeller);
sellerRouter.get("/sellers", getAllSellers);
sellerRouter.get("/sellers/search", getSellerByName);

module.exports = sellerRouter;
