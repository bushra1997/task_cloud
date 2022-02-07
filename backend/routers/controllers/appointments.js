const { model } = require("mongoose");
const database = require("./../../database/db");
const appointmentModel = require("./../../database/models/appointmentSchema");

// create appointment === booking
const createAppointment = (req, res) => {
  const { seller_id, buyer_id, date } = req.body;
  const appointment = new appointmentModel({
    seller_id,
    buyer_id,
    date,
    status : "wait",
  });
  appointment
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// appointments list
const getAllAppointments = (req, res) => {
  appointmentModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// filter appointments based on seller id
const getAppointmentBySellerID = (req, res) => {
  const id = req.params.seller_id;
  appointmentModel
    .find({ seller_id: id })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// get appointment by id
const getAppointmentByID = (req, res) => {
  const id = req.params._id;
  appointmentModel
    .find({ _id: id })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// delete appointment by id
const deleteAppointment = (req, res) => {
  const id = req.params._id;
  appointmentModel
    .deleteOne({ _id: id })
    .then((result) => {
      res.json("Deleted");
    })
    .catch((error) => {
      res.send(error);
    });
};
// update status of the appointment
const updateStatus =(req, res) =>{
  const id = req.params._id;
  appointmentModel.findOneAndUpdate({_id: id}, {status: "Approved"})
  .then((result)=>{
      res.json(result)
  })
  .catch((error)=>{
      res.send(error)
  })
}

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentBySellerID,
  getAppointmentByID,
  deleteAppointment,
  updateStatus,
};
