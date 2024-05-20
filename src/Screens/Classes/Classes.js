import { useEffect, useState } from 'react';
import Class from '../../Components/Class/Class';
import './Classes.css';

const Classes = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const getClasses = async () => {
      const response = await fetch('http://localhost:8080/class/getall')
      const data = await response.json()
      setClasses(data)
    }
    getClasses()
  }, [])

  return (
    <div className="class-body">
    <h1>Classes</h1>
      <div className="classes">
        {classes.map((classItem) => {
            return <Class key={classItem.id} title={classItem.name} teachers={classItem.teachers} tags={classItem.tags} id={classItem.id} />
        })}
      </div>
    </div>
  );
}

export default Classes;
