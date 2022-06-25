import React from 'react'
import './Formm.css'
import { useState } from 'react'

const Form = () => {

        const [name,setName] = useState();
        const [email,setEmail] = useState();

        const handleName = (e)=>{
            setName(e.target.value)

        }
        console.log(name)

  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Your Name:</label>
                <input type="text" name='name' placeholder='put your name' onChange={handleName} />
            </div>
            <label>
                <span>E-mail</span>
                <input type="email" name='email' placeholder='put your email' />
            </label>
            <input type="submit" value="send" />
        </form>
    </div>
  )
}

export default Form