import { FaJava, FaHtml5, FaCss3, FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import styles from './Skills.module.css'

function Skills(){
    return(
    <div className={styles.skillsLayout}>
        <h1>Front-end:</h1>
        <nav className={styles.frontback}>
            <div className={styles.linguagemlt}>
                <FaReact className={styles.icons}/> 
                <p>O <strong>React</strong> é uma biblioteca front-end <strong>JavaScript</strong> de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                </div>
            <div className={styles.linguagemlt}>
                <IoLogoJavascript className={styles.icons}/>
                <p>O <strong>Javascript</strong> é linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                </div>
            <div className={styles.linguagemlt}>
                <FaHtml5 className={styles.icons}/>
                <p><strong>HTML</strong> é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos <strong>HTML</strong> podem ser interpretados por navegadores.</p>
            </div>
            <div className={styles.linguagemlt}>
                <FaCss3 className={styles.icons}/>
                <p><strong>Css</strong> é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags <strong>HTML</strong> </p>
            </div>

        </nav>
        <h1>Back-end</h1>
        <nav className={styles.frontback}>
            <div className={styles.linguagemlt}>
                <FaJava className={styles.icons}/>
                <p><strong>Java</strong> é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores na empresa Sun Microsystems</p>
            </div>
            <div className={styles.linguagemlt}>
                <FaPython className={styles.icons}/>
                <p><strong>Python</strong> é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p>
                </div>
        </nav>
        
    </div>
)}

export default Skills