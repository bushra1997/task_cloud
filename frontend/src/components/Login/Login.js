import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const userID = localStorage.getItem("userID");


  const login = () => {
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
        role,
      })
      .then((result) => {
        if (role.toLowerCase() === "seller") {
          navigate(`/appointments/${userID}`);
        }
        else if (role.toLowerCase() === "buyer") {
          navigate("/sellers");
        } else {
          return "Error";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
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
          <div class="mb-3">
            <label for="role" class="form-label">
              Role
            </label>
            <input
              placeholder="Buyer or Seller"
              type="text"
              class="form-control"
              id="role"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={login}>
            Login
          </button>
        </form>
        <br />
        <p>Don't have an account?</p>
        <Link to="/signup"> Sign up </Link>
      </div>
    </>
  );
};

export default Login;
