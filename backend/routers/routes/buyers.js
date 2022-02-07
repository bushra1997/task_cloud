const express = require("express");
const buyerRouter = express.Router();

const authentication = require("./../middlewares/auth");

// importing controllers
const {
    createBuyer,
    getAllBuyers,
    getBuyerByName,
} = require("./../controllers/buyers");

buyerRouter.post("/create/buyer", createBuyer);
buyerRouter.get("/buyers", getAllBuyers);
buyerRouter.get("/buyers/search", getBuyerByName);

module.exports = buyerRouter;
