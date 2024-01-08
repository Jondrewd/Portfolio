import styles from './Project.module.css'
import Button from '../layout/Button'
import { FaSquareGithub} from "react-icons/fa6";
import Logo from '../images/savings.svg'

function Project(){
    return(
        <div>
            <nav className={styles.space}>
                <span>
                    
                    <div className={styles.projectGrid}><img src={Logo} alt='Logotipo do App' /> </div>
                    <h2>Costs: </h2>
                    <div className={styles.button}>
                        <a href="" target="_blank">Ver site</a>
                       <a href="https://github.com/Jondrewd/Project-costs" target="_blank">Repositório</a>
                    </div>
                </span>
                <span>
                    <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                    <h2>Projeto 2: </h2>
                    <div className={styles.button}>
                    <a href="google.com" target="_blank">Ver site</a>
                        <a href="" target="_blank">Repositório</a>
                    </div>
                </span>
                <span>
                    <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                    <h2>Projeto 3: </h2>
                    <div className={styles.button}>
                    <a href="google.com" target="_blank">Ver site</a>
                        <a href="" target="_blank">Repositório</a>
                    </div>
                </span>
                <span>
                    <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                    <h2>Projeto 4: </h2>
                    <div className={styles.button}>
                    <a href="google.com" target="_blank">Ver site</a>
                        <a href="" target="_blank">Repositório</a>
                    </div>
                </span>

            </nav>  
        </div>
    )
}

export default Project