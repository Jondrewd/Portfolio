import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

import styles from './Contato.module.css'

function Contato(){
    return(
        <div className={styles.social}>
            <span>
                <a href="https://github.com/Jondrewd" target="_blank">
                    <FaSquareGithub className={styles.socialIcon}/>
                </a>
                <p>Github</p>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/jonas-sousa-93ba3826b" target="_blank">
                    <FaLinkedin className={styles.socialIcon}/>
                </a>
                <p>Linkedin</p>
            </span>
        </div>
    )
}

export default Contato