import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const navigate = useNavigate();
  const { sellerID } = useParams();
  const userID = localStorage.getItem("userID");
  const [date, setDate] = useState("");
  const book = () => {
    const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${token}`,
    };
    axios
      .post(
        "http://localhost:5000/appointment",
        {
          seller_id: sellerID,
          buyer_id: userID,
          date: date,
          state: "wait",
        },
        { headers }
      )
      .then((result) => {
        navigate(`/appointment/${userID}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div class="mb-3">
          <h3>To confirm the booking, please enter a date:</h3>
        </div>
        <form>
          <div class="mb-3">
            <input
              placeholder="Date"
              type="text"
              class="form-control"
              id="exampleInput1"
              aria-describedby="Help"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={book}>
            Confirm
          </button>
        </form>
      </div>
    </>
  );
};

export default Booking;
