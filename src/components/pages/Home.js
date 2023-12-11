import styles from './Home.module.css'

import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

function Home(){
    return(
        <div className={styles.homeContainer}>
            <div className={styles.me}></div>
            <div className={styles.textHome}>
                <h2>Hello world!</h2>
                <h1>oi,</h1>
                <h2>Desenvolvedor Back-end.</h2>
            </div>
        </div>
)}

export default Home