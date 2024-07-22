import React from 'react'
import './comments.css'

const Comments = () => {

    // temporary comments
    const comments = [
        {
            id:1,
            desc: "Lorem ipsum dolor sit amet consectetur",
            name: "Khushi Jain",
            userId: 1,
            profilePic: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:2,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum excepturi rem aspernatur eum quae sequi placeat. Officiis fugit, distinctio, doloremque quisquam ipsa sint voluptates illum quidem minima dolores repudiandae doloribus!",
            name: "Khushi Jain",
            userId: 2,
            profilePic: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
  return (
    <div className='comments'>
        <div className="write">
        <img src={comments[0].profilePic} alt="" />
        <input type="text" name="" id="" placeholder='write a comment'/>
        <button>send</button>
        </div>
      {comments.map(comment=>(
        <div className='comment'>
            <img src={comment.profilePic} alt="" />
            <div className="comment-info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='comment-date'>1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments
