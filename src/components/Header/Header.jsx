import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
    },
    {
      name: 'Hotels',
      slug: '/hotel',
    },
    {
      name: 'About-Us',
      slug: '/about-us',
    },
    {
      name: 'Gallery',
      slug: '/gallery',
    },
    {
      name: 'News',
      slug: '/news',
    },
    {
      name: 'Contact',
      slug: '/contact',
    },
  ];

  return (
    <div className="header-site">
      <div className="header">
        <div className="headercontent">
          <p>Hepta</p>
          <div>
            <div id="nav-icon1" className={`${isOpen ? 'open fixed' : ''}`} onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`offscreen-menu ${isOpen ? 'show' : ''}`}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.slug} 
                      style={item.slug === '#home' ? { color: '#65c0ba' } : {}}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
