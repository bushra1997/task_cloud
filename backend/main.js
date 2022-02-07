const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const app = express();
app.use(express.json());
app.use(cors());


const sellerRouter = require("./routers/routes/sellers");
app.use("/", sellerRouter);

const buyerRouter = require("./routers/routes/buyers")
app.use("/", buyerRouter)

const loginRouter = require("./routers/routes/login")
app.use("/", loginRouter)

const appointmentRouter = require("./routers/routes/appointments")
app.use("/", appointmentRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
