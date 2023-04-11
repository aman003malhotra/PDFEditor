//import useState hook to create menu collapse state
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MenuC.css';
import authServices from "../services/auth-services";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaHistory } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { IoNewspaperOutline } from 'react-icons/io5'
import { GiPapers } from 'react-icons/gi'
import {IoIosPaper} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg';
import "react-pro-sidebar/dist/css/styles.css";



const MenuC = () => {
      const [menuCollapse, setMenuCollapse] = useState(false);
      const [username, setUsername] = useState('');
      const [activeLink, setActiveLink] = useState('');
      const location = useLocation();

      useEffect(() => {
        setActiveLink(location.pathname);
      }, [location]);
    
      
      const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };

      const handleLogout = () => {
        authServices.logout();
        window.location.href = '/login';
      }
      return (
        <>
          <div id="header">
            <ProSidebar collapsed={menuCollapse}>
              <SidebarHeader>
              <div className="logotext">
                <p>{menuCollapse ? "AIK" : "AI Koach"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? (
                  <FiArrowRightCircle/>
                ) : (
                  <FiArrowLeftCircle/>
                )}
              </div>
              </SidebarHeader>
              <SidebarContent>
                <Menu iconShape="square">
                <Link to="/">  <MenuItem className={activeLink === '/' ? 'active' : ''} icon={<FiHome />}>Home</MenuItem></Link>
                   <MenuItem className={activeLink === '/listpdf' ? 'active' : ''}  icon={<GiPapers />}><Link to="listpdf">My Papers </Link></MenuItem>
                  <MenuItem className={activeLink === '/addPdf' ? 'active' : ''} icon={<IoIosPaper />}><Link to="addPdf"> Evaluation </Link></MenuItem>
                  <MenuItem icon={<IoNewspaperOutline />}>Re-Evaluation</MenuItem>
                  <MenuItem icon={<HiOutlineDocumentReport />}><Link to="addnewpdf">Add New PDF</Link></MenuItem>
                  <MenuItem icon={<FaHistory />}>History</MenuItem>
                </Menu>
              </SidebarContent>
              <SidebarFooter>
                <Menu iconShape="square">
                  <MenuItem icon={<CgProfile />}>{authServices.getCurrentUser().username}</MenuItem>
                  <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </SidebarFooter>
            </ProSidebar>
          </div>
        </>
      );
    };

export default MenuC