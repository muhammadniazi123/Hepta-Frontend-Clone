import React, { useEffect } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Customer from '../customer/Customer';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div> <div className="contact-start">
  <div className="data">
    <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Contact</h1>
    <p data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out">
      A free template by <a href="#">Colorlib</a>. Download and share!
    </p>
  </div>
</div>
<div className="contact-container">
  <form className="contact-form">
    <div className='sub-group'>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
    </div>
    <div className="form-group">
      <label htmlFor="message">Write Message</label>
      <textarea id="message" name="message" cols="30" rows="8"></textarea>
    </div>
    <button type="submit" className="submit-button">Send Message</button>
  </form>
  <div className="contact-info">
    <h4><strong>ADDRESS:</strong></h4>
    <p>98 West 21th Street, Suite<br /> 721 New York NY 10016</p>
    <h4><strong>PHONE:</strong></h4>
    <p>(+1) 435 3533</p>
    <h4><strong>EMAIL:</strong></h4>
    <p>info@yourdomain.com</p>
  </div>
</div>
<div className='contact-container1'>
  <div className='container-data' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
    <h2>Happy Customers</h2>
  </div>
  <Customer />
</div>

    
    </div>
  );
}

export default Contact;
