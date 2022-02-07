const database = require("./../../database/db");
const sellerModel = require("./../../database/models/sellerSchema");
const buyerModel = require("./../../database/models/buyerSchema");

const login = (req, res) => {
  let { email, password, role } = req.body;
  if (role.toLowerCase() == "buyer") {
    buyerModel
      .findOne({ email })
      .then((result) => {
        if (!result) return res.status(401).json("Email not exist");

        if (result.password == password) return res.status(200).json("Success");

        res.status(401).json("Incorrect password");
      })
      .catch((err) => {
        res.send(err);
      });
  } else if (role.toLowerCase() == "seller") {
    sellerModel
      .findOne({ email })
      .then((result) => {
        if (!result) return res.status(401).json("Email not exist");

        if (result.password == password) return res.status(200).json("Success");

        res.status(401).json("Incorrect password");
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.send("Please enter your role");
  }
};

module.exports = { login };
