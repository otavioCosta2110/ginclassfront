import React from 'react';
import { Link } from 'react-router-dom';
import './Class.css';

const Class = ({id, title, teachers, tags}) => {
  return (
    <Link to={'/classpage'} className="class"
      state={{
        id,
        title,
        teachers,
        tags
      }}
    >
    
      <h2>{title}</h2>
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
    </Link>
  );
}

export default Class;

