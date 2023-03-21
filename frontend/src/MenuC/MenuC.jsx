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
import { FiHome, FiLogOut } from "react-icons/fi";
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { IoNewspaperOutline } from 'react-icons/io5'
import { GiPapers } from 'react-icons/gi'
import {IoIosPaper} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg';
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";



const MenuC = () => {
  
        //create initial menuCollapse state using useState hook
        const [menuCollapse, setMenuCollapse] = useState(false);
        const [username, setUsername] = useState('');
        const [activeLink, setActiveLink] = useState('');
        const location = useLocation();

        useEffect(() => {
          setActiveLink(location.pathname);
        }, [location]);
        //create a custom function that will change menucollapse state from false to true and true to false
      // const menuIconClick = () => {
      //   //condition checking to change state from true to false and vice versa
      //   menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      // };

      const handleLogout = () => {
        authServices.logout();
        window.location.href = '/login';
      }
      // setUsername(authServices.getCurrentUser().username);
      return (
        <>
          <div id="header">
              {/* collapsed props to change menu size using menucollapse state */}
            <ProSidebar >
              <SidebarHeader>
              <div className="logotext">
                  {/* small and big change using menucollapse state */}
                  <p>PDF Editor Pro</p>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <Menu iconShape="square">
                <Link to="/">  <MenuItem className={activeLink === '/' ? 'active' : ''} icon={<FiHome />}>Home</MenuItem></Link>
                   <MenuItem className={activeLink === '/listpdf' ? 'active' : ''}  icon={<GiPapers />}><Link to="listpdf">My Papers </Link></MenuItem>
                  <MenuItem className={activeLink === '/addPdf' ? 'active' : ''} icon={<IoIosPaper />}><Link to="addPdf"> Evaluation </Link></MenuItem>
                  <MenuItem icon={<IoNewspaperOutline />}>Re-Evaluation</MenuItem>
                  <MenuItem icon={<HiOutlineDocumentReport />}>Reports</MenuItem>
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