import React from "react";
import "./leftbar.css";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';

import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="menu-user">
            <img
              src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
            />
            <span>Khushi Jain</span>
          </div>
          <div className="item">
            <PeopleAltOutlinedIcon/>
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsOutlinedIcon/>
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontOutlinedIcon/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <SmartDisplayOutlinedIcon/>
            <span>Watch</span>
          </div>
          <div className="item">
            <WatchLaterOutlinedIcon/>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <EventAvailableOutlinedIcon/>
            <span>Events</span>
            </div>
          <div className="item">
            <SportsEsportsOutlinedIcon/>
            <span>Gaming</span>
            </div>
          <div className="item">
            <CollectionsOutlinedIcon/>
            <span>Gallery</span>
            </div>
          <div className="item">
            <VideocamOutlinedIcon/>
            <span>Videos</span>
            </div>
          <div className="item">
            <MailOutlineOutlinedIcon/>
            <span>Message</span>
            </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <CurrencyRupeeOutlinedIcon/>
            <span>Fundraise</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon/>
            <span>Tuitorial</span>
          </div>
          <div className="item">
            <ShopOutlinedIcon/>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
