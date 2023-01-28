import React from "react";
import Logo from "../assets/img/foodvillalogo.png";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <div className="w-full md:w-auto">
  <img
    className="w-full text-center md:text-left"
    alt="logo"
    src={Logo}
  />
</div>
);

// Composing Comopnentss
export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const isOnline = useOnline();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-pink-50 shadow-lg mx-4 my-2">
      <Title/>
      <ul className="md:flex md:mt-0 mt-2">
        <Link className="spacing" to="/home">
          <li className="px-2">Home</li>
        </Link>
        <Link to="/home/about" className="spacing">
          <li className="px-2">About</li>
        </Link>
        <Link to="/home/contact" className="spacing">
          <li className="px-2">Contact</li>
        </Link>
        <Link to="/home" className="spacing">
          <li className="px-2">Cart</li>
        </Link>
        <Link to="/home/instamart" className="spacing">
          <li className="px-2">Instamart</li>
        </Link>
      </ul>
      
      <button
        className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md mt-2 md:mt-0 md:flex"
        onClick={() => {
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};


/* <h1>{isOnline ? "✅" : "🔴"}</h1> */