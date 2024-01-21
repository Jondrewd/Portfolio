import styles from './Project.module.css'
import Button from '../layout/Button'
import { FaSquareGithub} from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import Logo from '../images/savings.svg'

function Project(){
    return(
        <div>
            <nav className={styles.space}>
                <span>
                    
                    <div className={styles.projectGrid}><img src={Logo} alt='Logotipo do App' /> 
                    <p className={styles.projectDesc}>Projeto criado com React.js, desenvolvido usando suas bibliotecas e uma api com um servidor ficticio criado com node.js no curso.</p>
                    </div>
                    <h2>Costs: </h2>
                    <div className={styles.button}>
                        <a href="" target="_blank">Ver site</a>
                       <a href="https://github.com/Jondrewd/Project-costs" target="_blank">Repositório</a>
                    </div>
                </span>
                <span>
                    <div className={styles.projectGrid}>
                    <h1 className={styles.iconPG}><FaChessKnight/></h1>
                    <p className={styles.projectDesc}>Projeto criado com Javascript e Java, com a proposta de criar um jogo de xadrez funcional, com todas as lógicas que envolvem o mesmo.</p>
                    </div>
                    <h2>Xadrez: </h2>
                    <div className={styles.button}>
                    <a href="/" target="_blank">Em construção...</a>
                        <a href="" target="_blank">Em construção...</a>
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