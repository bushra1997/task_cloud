const mongoose = require("mongoose");
require("dotenv").config();

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect(process.env.DB_URL, options).then(
    () => {
        console.log("DB connected");
    },
    (err) => {
        console.log(err);
    }
)