import styles from './Register.module.css';

import {useState, useEffect} from 'react'

const Register = () => {

    const [displayName,setDisplayName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (e)=>{
      e.preventDefault()

      setError("");

       const user = {
        displayName,
        email,
        password
       }

       if(password !== confirmPassword){
         setError("Passwords must match");
         return
       }

       console.log(user)

    }

  return (
    <div className={styles.register}>
        <h1>Register to be able to post</h1>
        <p>Create your user and share your post!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <input type="text" name="displayName" required placeholder="username" value={displayName} onChange={(e)=> setDisplayName(e.target.value)} />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" required placeholder="user email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" name="password" required placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          </label>
          <label>
            <span>Confirm Password:</span>
            <input type="password" name="confirmPassword" required placeholder="Confirm your Password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
          </label>
          <button className='btn'>Register</button>
          {error &&  <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register