// src/components/Footer/Footer.jsx
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Rooms</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Our Location</a></li>
            <li><a href="#">The Hosts</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Restaurant</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <h6>Address:</h6><p> 98 West 21th Street, Suite 721 New York NY 10016</p>
          <h6>Phone:</h6><p> (+1) 435 3533</p>
          <h6>Email:</h6><p> info@yourdomain.com</p>
        </div>
        <div className="footer-column">
          <h3>Subscribe</h3>
          <p>Sign up for our newsletter</p>
          <form action="#" className="footer-newsletter">
  
          <input type="email" className="form-control" placeholder="Your email..."/> 
          <button type="submit" className="btn fa fa-paper-plane" style={{ backgroundColor: 'hsl(0deg 0% 0% / 0%)' }}>
          </button> 
       
        </form>
        </div>
      </div>
      <div className=" footer-bottom">
        <p>Copyright © 2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
        <div className="footer-social">
          <a href="#"><i className="fa fa-facebook-f"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
