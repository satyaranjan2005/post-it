import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>Post IT</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className="nav-right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" />
          <span>Khushi Jain</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
