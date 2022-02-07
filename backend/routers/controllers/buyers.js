const { model } = require("mongoose");
const database = require("./../../database/db");
const buyerModel = require("./../../database/models/buyerSchema");

// Create buyer
const createBuyer = (req, res) => {
  const { email, name, password } = req.body;
  const buyer = new buyerModel({
    email,
    name,
    password,
  });
  buyer
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// buyers list
const getAllBuyers = (req, res) => {
  buyerModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// Search buyer by name
const getBuyerByName = (req, res) => {
  const buyer = req.query.name;
  buyerModel
    .find({ name: buyer })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createBuyer,
  getAllBuyers,
  getBuyerByName,
};
