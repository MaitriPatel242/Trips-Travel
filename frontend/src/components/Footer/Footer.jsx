import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Footer.css';
const quick__links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
];

const quick__links2 = [
  { path: '/gallery', display: 'Gallery' },
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <img src={logo} alt='Logo' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</p>
          <div className='social-links'>
            <Link to='#'><i className='ri-youtube-line'></i></Link>
            <Link to='#'><i className='ri-github-fill'></i></Link>
            <Link to='#'><i className='ri-facebook-circle-line'></i></Link>
            <Link to='#'><i className='ri-instagram-line'></i></Link>
          </div>
        </div>

        <div className='footer-links'>
          <div className='footer-section'>
            <h5 className='footer-title'>Discover</h5>
            <ul className='footer-quick-links'>
              {quick__links.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='footer-section'>
            <h5 className='footer-title'>Quick Links</h5>
            <ul className='footer-quick-links'>
              {quick__links2.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='footer-section'>
            <h5 className='footer-title'>Contact</h5>
            <ul className='footer-contact'>
              <li>
                <h6><i className='ri-map-pin-line'></i> Address:</h6>
                <p>Ahemdabad</p>
              </li>
              <li>
                <h6><i className='ri-mail-line'></i> Email:</h6>
                <p>abc@gmail.com</p>
              </li>
              <li>
                <h6><i className='ri-phone-fill'></i> Phone:</h6>
                <p>+91 123456789</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p className='copyright'>
          Copyright {year}, design and develop by USDADIYA PAVITRA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
