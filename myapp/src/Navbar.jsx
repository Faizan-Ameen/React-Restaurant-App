import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
const Navbar = () => {
  const [activeHambergetMenu, setActivehamburgetMenu] = useState(false);
  return (
    <nav className="nav_main">
      <div className="logo">
        <h1>Cafe Lazania</h1>
      </div>
      <div className={activeHambergetMenu ? "nav_items active_hamberget": "nav_items"}>
        <NavLink to='/'  activeClassName="active"><span>Home</span></NavLink>
        <NavLink to='/about'  activeClassName="active"><span>About</span></NavLink>
        <NavLink to='/service'  activeClassName="active"><span>Services</span></NavLink>
        <NavLink to='/reviews'  activeClassName="active"><span>Reviews</span></NavLink>
        <NavLink to='/contact'  activeClassName="active"><span>Contact</span></NavLink>
      </div>
      <div className="socal_icons ">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
      <div className="hamburget_menu" onClick={() => setActivehamburgetMenu(!activeHambergetMenu)}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  )
}
export default Navbar;