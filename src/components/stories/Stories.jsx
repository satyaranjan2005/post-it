import React, { useContext } from "react";
import "./Stories.css";
import { AuthContext } from "../../context/auth";

const Stories = () => {

  const {currentUser} = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "Khushi Jain",
      img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Khushi Jain",
      img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Khushi Jain",
      img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Khushi Jain",
      img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
