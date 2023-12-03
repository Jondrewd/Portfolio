import styles from './Home.module.css'

import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

function Home(){
    return(
        <div className={styles.welcome_container}>
        <h2>Welcome!</h2>
        <div className={styles.text_container}>
            <span>I'm a </span>
            <span>Fullstack </span>
            <span>Developer</span>
        </div>
        <span className={styles.social_media}>
            <a href="https://github.com/Jondrewd" target='_blank'><FaLinkedin className={styles.media_a}/></a> 
            <a href="" target='_blank'><FaSquareGithub className={styles.media_a}/></a></span>
        </div>
)}

export default Home