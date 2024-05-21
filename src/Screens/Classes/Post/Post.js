import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import './Post.css'

const Post = () => {
  const location = useLocation();
  const { id } = location.state

  const [post, setPost] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:8080/post/getbyid/${id}`)
      const data = await response.json()
      setPost(data.data)
    }
    getPost()
  }, [])

  console.log(post)
  return (
    <div className="post-body">
      <h2>{post.name}</h2>
      <div className="content">{post.content}</div>
    </div>
  );
}

export default Post
