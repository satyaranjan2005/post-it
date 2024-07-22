import React from 'react'
import './profile.css'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="cover" />
        <img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profilePic" />
      </div>
        <div className="profile-container">
          <div className="profile-user-info">
            <div className="profile-left">
              <a href="">
                <FacebookTwoToneIcon fontSize='large'/>
              </a>
              <a href="">
                <InstagramIcon fontSize='large' />
              </a>
              <a href="">
                <XIcon fontSize='large'/>
              </a>

              <a href="">
                <LinkedInIcon fontSize='large'/>
              </a>
            </div>
            <div className="profile-center">
              <span>Khushi Jain</span>
              <div className="center-info">
                <div className="info-item">
                <PlaceIcon/>
                <span>INDIA</span>
                </div>
                <div className="info-item">
                  <LanguageIcon/>
                  <span>Satya.dev</span>
                </div>
              </div>
              <button>follow</button>
            </div>
            <div className="profile-right">
              <EmailOutlinedIcon/>
              <MoreVertOutlinedIcon/>
            </div>
          </div>
          <Posts/>
        </div>
    </div>
  )
}

export default Profile
