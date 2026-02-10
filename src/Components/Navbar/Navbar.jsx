// src/Components/Navbar/Navbar.jsx
import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  // Get functions and state from context
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Shopper Logo" />
          <p>SHOPPER</p>
        </div>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")}>
            <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
            {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setMenu("mens")}>
            <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
            {menu === "mens" && <hr />}
          </li>
          <li onClick={() => setMenu("womens")}>
            <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
            {menu === "womens" && <hr />}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>

        {/* Login & Cart */}
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'>
            <img src={cart_icon} alt="Cart Icon" />
          </Link>
          {/* Cart count badge */}
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
