import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import styles from './Skills.module.css'

function Skills(){
    return(
    <div className={styles.skillsLayout}>
        <h1>Tecnologias e Habilidades</h1>
        <nav className={styles.frontback}>
            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaReact className={styles.icons}/>
                    <h1>Front End</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}>
                    Desenvolvimento de sites responsivos e interativos, empregando tecnologias modernas e demonstrando proficiência em <strong>React</strong>, além de possuir conhecimentos robustos em <strong>JavaScript</strong>, <strong>HTML</strong> e <strong>CSS</strong>. Minha abordagem no desenvolvimento front-end prioriza a criação de interfaces intuitivas e agradáveis, utilizando as melhores práticas de design e usabilidade.
                    </p>
                </nav>
            </div>
            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaJava className={styles.icons}/>
                    <h1>Back end</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}>No âmbito do desenvolvimento no lado do servidor, possuo uma experiência substancial na criação de soluções robustas utilizando <strong>Java</strong>, com ênfase no framework <strong>Spring Boot</strong>. Minha metodologia engloba a aplicação dos princípios do <strong>Desenvolvimento Orientado a Testes</strong> (TDD).</p>
                </nav>
            </div>

            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <GrMysql className={styles.icons}/>
                    <h1>Banco de dados</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}>
                    Com experiência sólida, otimizo consultas e estruturo dados eficientemente. Em ambientes <strong>SQL</strong>, foco na integridade e desempenho. No <strong>MongoDB</strong>, aplico modelagem flexível para alto rendimento em contextos não relacionais, proporcionando soluções versáteis de armazenamento de dados.</p>
                </nav>
            </div>
        </nav>

    

    </div>
)}

export default Skills