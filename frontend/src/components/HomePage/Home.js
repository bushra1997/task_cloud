import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="container">
        <h1>Welcome to my app</h1>
        <p>
          This application is used to facilitate finding service providers to
          book an appointments with them.
        </p>
        <p>To start your journey, please login</p>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};
export default Home;
