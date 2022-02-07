import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BuyerSignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const createBuyer = () => {
    const data = {
      name,
      email,
      password,
    };
    if (!data) {
      setError("Please fill required data");
      return;
    }
    axios
      .post(`http://localhost:5000/create/buyer`, data)
      .then((result) => {
        setError(null);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={createBuyer}>
          Submit
        </button>
      </form>
      <div>{error}</div>
    </div>
  );
};

export default BuyerSignUp;
