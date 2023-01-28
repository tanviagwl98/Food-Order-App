import React from 'react';
import Logo from '../assets/img/foodvillalogo.png'
import {Link, useNavigate} from 'react-router-dom'
import useOnline from '../utils/useOnline';

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src={Logo}
    />
  </a>
);

// Composing Comopnentss
export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const isOnline = useOnline();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-400 md:bg-yellow-200">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link className="spacing" to="/home"><li className="px-2">Home</li></Link>
          <Link to="/home/about" className="spacing"><li className="px-2">About</li></Link>
          <Link to= "/home/contact" className="spacing"><li className="px-2">Contact</li></Link>
          <Link to="/home" className="spacing"><li className="px-2">Cart</li></Link>
          <Link to="/home/instamart" className="spacing"><li className="px-2">Instamart</li></Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <button className='bg-purple-900 hover:bg-gray-500 text-white rounded-md m-2 p-2 h-14 align-middle my-8' onClick={() => {navigate('/')}}>Logout</button>
    </div>
  );
};
