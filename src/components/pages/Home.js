import styles from './Home.module.css'

import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

function Home(){
    return(
   <div className={styles.homeLayout}>
       <div className={styles.text}>
           <h1>Desenvolvedor <strong>fullstack</strong></h1>
           <p>Crio sites utilizando React e Java</p>
            <button>Contato</button>
       </div>
        <div className={styles.image}></div>
     
     </div>
 
)}

export default Home