const database = require("./../../database/db");
const sellerModel = require("./../../database/models/sellerSchema");

// Create seller
const createSeller = (req, res) => {
  const { email, name, location, password } = req.body;
  const seller = new sellerModel({
    email, // same as email: email
    name,
    location,
    password,
  });
  seller
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// sellers list
const getAllSellers = (req, res) => {
  sellerModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// Search seller by name
const getSellerByName = (req, res) => {
  const seller = req.query.name;
  sellerModel
    .find({ name: seller })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createSeller,
  getAllSellers,
  getSellerByName,
};
