import React from 'react';
import Logo from '../assets/img/foodvillalogo.png'
import {Link} from 'react-router-dom'
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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link className="spacing" to="/"><li>Home</li></Link>
          <Link to="/about" className="spacing"><li>About</li></Link>
          <Link to= "/contact" className="spacing"><li>Contact</li></Link>
          <Link to="/" className="spacing"><li>Cart</li></Link>
        </ul>
      </div>
      {isLoggedIn ? (<button onClick={() => {setIsLoggedIn(false)}}>Login</button>):(<button onClick={() => {setIsLoggedIn(true)}}>Logout</button>)}
    </div>
  );
};
