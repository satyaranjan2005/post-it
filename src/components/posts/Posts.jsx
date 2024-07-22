import React from 'react'
import './posts.css'
import Post from '../post/Post';

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Khushi jain",
      userId: 1,
      profilePic: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sapiente est dolores neque unde, omnis voluptates enim distinctio, explicabo fuga quos quisquam esse inventore consequatur consectetur ab rerum totam. Hic.",
      img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Khushi jain",
      userId: 2,
      profilePic: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sapiente est dolores neque unde, omnis voluptates enim distinctio, explicabo fuga quos quisquam esse inventore consequatur consectetur ab rerum totam. Hic.",
      img: "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className='posts'>
        {posts.map(post=>(
          <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts
