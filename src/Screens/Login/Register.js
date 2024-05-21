import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import './Register.css';

const createUser = () => {
  const username = document.getElementById('username').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const isTeacher = document.getElementById('isteacher').checked

  fetch('http://localhost:8080/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: username,
      email: email,
      password: password,
      isTeacher: isTeacher
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        Store.addNotification({
          title: 'Error',
          message: data.error,
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          dismiss: {
            duration: 2000,
            onScreen: true
          }
        })
        return
      }else{
        Store.addNotification({
          title: 'Success',
          message: data.message,
          type: 'success',
          insert: 'top',
          container: 'top-right',
          dismiss: {
            duration: 2000,
            onScreen: true
          }
        })

      }
    })
    .catch(error => {
      console.error('Error:', error)
    })
}

const Register = () => {
  return (
    <div className="register">

      <div className='register-form'>
        <label htmlFor='username'>Nome</label>
        <input type='text' id='username' />
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
        <div className='isTeacher'>
          <input type='checkbox' id='isteacher' />
          <label htmlFor='isteacher'>Teacher</label>
        </div>
        <button onClick={createUser}>Register</button>
      </div>
    </div>
  );
}

export default Register;
