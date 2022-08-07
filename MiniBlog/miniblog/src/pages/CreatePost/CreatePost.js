
import styles from './CreatePost.module.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {

  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [body,setBody] = useState("");
  const [tags,setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>
        <h2>Create a Post</h2>
        <p>Write about your interest freely and share your knowledge</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Title:</span>
            <input type="text" name='title' required placeholder='think a good post...' onChange={(e)=> setTitle(e.target.value)} value={title} />
          </label>
          <label>
            <span>URL image:</span>
            <input type="text" name='image' required placeholder='put a beautiful picture that 
represents this moment' onChange={(e)=> setImage(e.target.value)} value={image} />
          </label>
          <label>
            <span>Content:</span>
            <textarea name="body" required placeholder='place the content of post' onChange={(e)=> setBody(e.target.body)} value={body}></textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input type="text" name='tags' required placeholder='put your best tags' onChange={(e)=> setTags(e.target.value)} value={tags} />
          </label>
          <button className='btn'>Register</button>
          {/*{!loading && <button className='btn'>Register</button>}
          {loading && <button className='btn' disabled>Wait...</button>}
  {error &&  <p className="error">{error}</p>} */}
        </form>
    </div>
  )
}

export default CreatePost