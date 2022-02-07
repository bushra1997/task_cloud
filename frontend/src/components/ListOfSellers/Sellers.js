import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sellers = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const booking = (sellerID) => {
    navigate(`/booking/${sellerID}`);
  };
  
  useEffect(() => {
    fetch("http://localhost:5000/sellers")
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="container">
          <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              Search
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <br />
          {items
            .filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <div class="alert alert-success" role="alert" key={item._id}>
                <p>Seller name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Location: {item.location}</p>
                <button type="button" class="btn btn-light" onClick={() => booking(item._id)}>
                  Book an appointment
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }
};

export default Sellers;
