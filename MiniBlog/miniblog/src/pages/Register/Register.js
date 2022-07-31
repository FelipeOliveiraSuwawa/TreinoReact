import styles from './Register.module.css';

import {useState, useEffect} from 'react'

const Register = () => {
  return (
    <div>
        <h1>Register to be able to post</h1>
        <p>Create your user and share your post!</p>
        <form>
          <label>
            <span>Name:</span>
            <input type="text" name="displayName" required placeholder="username" />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" required placeholder="user email" />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" name="password" required placeholder="Password" />
          </label>
          <label>
            <span>Confirm Password:</span>
            <input type="password" name="confirmpassword" required placeholder="Confirm your Password" />
          </label>
          <button className='btn'>Register</button>
        </form>
    </div>
  )
}

export default Register