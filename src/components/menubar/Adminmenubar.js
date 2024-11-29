import "../menubar/Adminmenubar.css";
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { FaTachometerAlt , FaFileInvoiceDollar, FaUserFriends ,  FaGlobeAmericas} from "react-icons/fa";
import { MdFilterList } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import Logo from '../images/logo.png';

function Adminmenubar() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location]);
  
    const token = localStorage.getItem('token');
  
    if (!token || location.pathname === '/login') {
      return null; 
    }
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
    };


  return (
    <div>
       <div>
      <div className='header'>
        <img src={Logo} alt='logo' />
        <button onClick={handleLogout}><LuLogOut /> Logout</button>
      </div>
      <div className="side-menu">
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard"
              className={activeLink === '/dashboard' ? 'active' : ''}
              onClick={() => setActiveLink('/dashboard')}
            >
              <FaTachometerAlt  />
              <span className="link-text">Dashboard</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/Weight"
              className={activeLink === '/Weight' ? 'active' : ''}
              onClick={() => setActiveLink('/Weight')}
            >
              <FaGlobeAmericas />
              <span className="link-text">Region</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/FileUploadAndDataTable"
              className={activeLink === '/FileUploadAndDataTable' ? 'active' : ''}
              onClick={() => setActiveLink('/FileUploadAndDataTable')}
            >
              <FaFileInvoiceDollar />
              <span className="link-text">File Upload</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/ReportFilter"
              className={activeLink === '/ReportFilter' ? 'active' : ''}
              onClick={() => setActiveLink('/ReportFilter')}
            >
              <MdFilterList />
              <span className="link-text">Report And Filter</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/Otherclient"
              className={activeLink === '/Otherclient' ? 'active' : ''}
              onClick={() => setActiveLink('/Otherclient')}
            >
              <FaUserFriends   />
              <span className="link-text">Otherclient</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
    </div>
  );
}

export default Adminmenubar;
