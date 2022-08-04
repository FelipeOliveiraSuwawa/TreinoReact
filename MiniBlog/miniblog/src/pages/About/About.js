// css do about
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h2>About Suwawa <span>Blog</span></h2>
        <p>This project has made by React in Front-end and Firebase in Back-end</p>
        <Link to="/post/create" className='btn'>Create a Post</Link>
    </div>
  )
}

export default About