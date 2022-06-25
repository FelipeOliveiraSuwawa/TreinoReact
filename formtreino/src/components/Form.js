import React from 'react'
import './Formm.css'
import { useState } from 'react'

const Form = ({ user }) => {

        const [name,setName] = useState(user ? user.name : '');
        const [email,setEmail] = useState(user ? user.email : '');
        const [bio,setBio] = useState(user ? user.bio : '');
        const [role,setRole] = useState(user ? user.role : '')

        const handleName = (e)=>{
            setName(e.target.value)

        }
        console.log(name)
        
        const handleSubmit = (evento)=>{
            evento.preventDefault();
           if(!email || !name){
            console.log('impossivel enviar o formulario')
           }
           else{
                console.log('formulario enviado com sucesso')
           }

                console.log(name,email,bio,role)
           setName('')
           setEmail('')
           setBio('')
           setRole('')
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your Name:</label>
                <input type="text" name='name' placeholder='put your name' onChange={handleName} value={name} />
            </div>
            <label>
                <span>E-mail</span>
                <input type="email" name='email' placeholder='put your email' onChange={(e)=> setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Bio</span>
                <textarea name="Bio" placeholder='descricao do usuario'
                onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Função de Usuario</span>
                <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="admin">administrador</option>
                    <option value="youwa">Watanabe You</option>
                </select>
            </label>
            <input type="submit" value="send" />
        </form>
    </div>
  )
}

export default Form