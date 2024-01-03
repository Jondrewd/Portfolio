import { FaJava, FaHtml5, FaCss3, FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import styles from './Skills.module.css'

function Skills(){
    return(
    <div className={styles.skillsLayout}>
        <h1>Conhecimentos sólidos em:</h1>
        <nav className={styles.frontback}>
            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaReact className={styles.icons}/>
                    <h1>React</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}>O <strong>React</strong> é uma biblioteca front-end <strong>JavaScript</strong> de código aberto com foco em criar interfaces de usuário em páginas web.</p>
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
                <nav className={styles.textL}>
                    <p className={styles.descP}><strong>HTML</strong> é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos <strong>HTML</strong> podem ser interpretados por navegadores.</p>
                </nav>
            </div>

            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaCss3 className={styles.icons}/>
                    <h1>CSS</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}><strong>Css</strong> é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags <strong>HTML</strong>. </p>
                </nav>
            </div>
            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaJava className={styles.icons}/>
                    <h1>Java</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}><strong>Java</strong> é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores na empresa Sun Microsystems.</p>
                </nav>
            </div>

        </nav>
        <h1>Aprendendo:</h1>
        <nav className={styles.frontback}>
            

            <div className={styles.linguagemlt}>
                <nav className={styles.textL}>
                    <FaPython className={styles.icons}/>
                    <h1>Python</h1>
                </nav>
                <nav className={styles.textL}>
                    <p className={styles.descP}><strong>Python</strong> é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p>
                </nav>
                </div>
        </nav>
        
    </div>
)}

export default Skills