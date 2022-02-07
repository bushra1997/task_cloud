import "./App.css";
import Home from "./components/HomePage/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Sellers from "./components/ListOfSellers/Sellers";
import Notifications from "./components/Notifications/Notifications";
import BuyerSignUp from "./components/SignUp/BuyerSignUp";
import SellerSignUp from "./components/SignUp/SellerSignUp";
import Booking from "./components/Booking/Booking";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/appointments" element={<Notifications />} />
          <Route path="/create/buyer" element={<BuyerSignUp />} />
          <Route path="/create/seller" element={<SellerSignUp />} />
          <Route path="/booking/:sellerID" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
