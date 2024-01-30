import { FaJava, FaHtml5, FaCss3, FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import styles from './Skills.module.css'

function Skills(){
    return(
    <div className={styles.skillsLayout}>
        <h1>Tecnologias e Habilidads</h1>
        <nav className={styles.frontback}>
            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaReact className={styles.icons}/>
                    <h1>React</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}>
                        O <strong>React</strong> é uma biblioteca front-end <strong>JavaScript</strong> de código aberto com foco em criar interfaces de usuário em páginas web.
                    </p>
                </nav>
            </div>
            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <IoLogoJavascript className={styles.icons}/>
                    <h1>Javascript</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}>O <strong>Javascript</strong> é linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                </nav>
            </div>

            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaHtml5 className={styles.icons}/>
                    <h1>HTML</h1>
                </nav>
            </div>
        </nav>

    

    </div>
)}

export default Skills