import React from 'react';
import Logo from '../assets/img/foodvillalogo.png'
import {Link, useNavigate} from 'react-router-dom'
import useOnline from '../utils/useOnline';

const Title = () => (
  <a href="/">
    <img
      className="logo"
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
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link className="spacing" to="/home"><li>Home</li></Link>
          <Link to="/home/about" className="spacing"><li>About</li></Link>
          <Link to= "/home/contact" className="spacing"><li>Contact</li></Link>
          <Link to="/home" className="spacing"><li>Cart</li></Link>
          <Link to="/home/instamart" className="spacing"><li>Instamart</li></Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
    <button className='logout-btn' onClick={() => {navigate('/')}}>Logout</button>
    </div>
  );
};
