import React from 'react'
import {NavLink} from 'react-router-dom';
 const Footer = () => {
  return (
        <footer>
            <div className="social_icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="menu-btns">
                <NavLink to = '/'><span>Home</span></NavLink>
                <NavLink to = '/about'><span>About</span></NavLink>
                <NavLink to = '/service'><span>Services</span></NavLink>
                <NavLink to = '/reviews'><span>Reviews</span></NavLink>
                <NavLink to = '/contact'><span>Contact</span></NavLink>
            </div>
        </footer>
  )
}

export default Footer;