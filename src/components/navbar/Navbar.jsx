import React, { useContext } from 'react'
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
import { AuthContext } from '../../context/auth';


const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

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
          <img src={currentUser.profilePic}/>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
