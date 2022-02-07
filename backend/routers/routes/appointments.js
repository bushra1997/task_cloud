const express = require("express");
const appointmentRouter = express.Router();

const authentication = require("../middlewares/auth");

// importing controllers
const {
  createAppointment,
  getAppointmentBySellerID,
  getAllAppointments,
  getAppointmentByID,
  deleteAppointment,
  updateStatus,
} = require("../controllers/appointments");

appointmentRouter.post("/booking/:seller_id", createAppointment);
appointmentRouter.get("/appointments", getAllAppointments);
appointmentRouter.get("/appointments/:_id", getAppointmentByID);
appointmentRouter.get("/appointments/:seller_id", getAppointmentBySellerID);
appointmentRouter.delete("/appointments/:_id", deleteAppointment);
appointmentRouter.put("/appointments/:_id", updateStatus);


module.exports = appointmentRouter;
