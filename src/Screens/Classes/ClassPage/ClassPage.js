import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './ClassPage.css'

const ClassPage = () => {
  const location = useLocation();
  const { id, title, teachers, tags } = location.state

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`http://localhost:8080/post/getbyclass/${id}`)
      const data = await response.json()
      setPosts(data.data)
    }
    getPosts()

  }, [])

  return (
    <div>
      <div className="class-header">
        <div className="title">{title}</div>
        <div className='teachers'>
          {teachers.map((teacher, index) => (
            <span key={index}>{teacher}</span>
          ))}
        </div>
        <div className='tags'>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="post-body">
        {posts == null &&
          <div>No posts yet</div>
        }
        {posts != null && (
          <>
          <h1>Posts</h1>
            <div className="posts">
              {Array.isArray(posts) && posts.map((post) => {
                return (
                  <Link to={'/post'} key={post.id} className="post"
                    state={{
                      id: post.id
                    }}
                  >
                    <h2>{post.name}</h2>
                    <div className="content">{post.content}</div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ClassPage;

