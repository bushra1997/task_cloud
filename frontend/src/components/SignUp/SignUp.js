import React from "react";
import { useNavigate, Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div className="container">
          <p>To sign up, please choose your category:</p>
          <br/>
          <Link to="/create/buyer"> Buyer </Link>
          <br/>
          <Link to="/create/seller"> Seller </Link>
      </div>
    </>
  );
};

export default SignUp;
