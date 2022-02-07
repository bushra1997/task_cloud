import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Notifications = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const userID = localStorage.getItem("userID");

  const token = localStorage.getItem("token");
  const headers = {
    authorization: `Bearer ${token}`,
  };

  const getAllAppointments = useEffect(() => {
    fetch(`http://localhost:5000/appointments`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const updateAppointmentStatus = (status, appointmentId) => {
    axios
      .put(
        `http://localhost:5000/appointments/${appointmentId}`,
        {
          status,
        },
        { headers }
      )
      .then((result) => {
        getAllAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAppointment = (appointmentId) => {
    axios
      .delete(`http://localhost:5000/appointments/${appointmentId}`, {
        headers,
      })
      .then((result) => {
        getAllAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="container">
          <h3>Notifications</h3>
          {items.map((item) => (
            <div class="alert alert-success" role="alert" key={item._id}>
              <p>Buyer name: {item.buyer_id}</p>
              <p>Date: {item.date}</p>
              <p>Status: {item.status}</p>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => deleteAppointment(item._id)}
                >
                  Reject
                </button>
                {item.status !== "Approved" ? (
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => updateAppointmentStatus("Approved", item._id)}
                  >
                    Accept
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Notifications;
