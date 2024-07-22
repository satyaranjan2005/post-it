import React, { useState } from "react";
import './post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const Post = ({ post }) => {

  const [commentOpen, setCommentOpen] = useState(false);
  //temporay
  const liked = false;
  return (
    <div className="post">
      <div className="post-container">
        <div className="post-user">
          <div className="post-userinfo">
            <img src={post.profilePic} alt="" />
            <div className="post-details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="post-item">
          {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
          12 likes
          </div>
          <div className="post-item" onClick={()=>setCommentOpen(!commentOpen)} >
            <TextsmsOutlinedIcon/>
            12 comments
          </div>
          <div className="post-item">
            <ShareOutlinedIcon/>
            share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
