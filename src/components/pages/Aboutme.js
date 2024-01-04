import styles from './Aboutme.module.css'

function Aboutme(){
    return(
    <div className={styles.aboutLayout}>
        <nav className={styles.imageA}> </nav>
        <nav className={styles.textA}>
            <h1>Olá, eu sou Jonas,</h1> 
            <p>um estudante de <strong>Ciências da Computação</strong> fascinado por tecnologia e inovação. Eu tenho experiência em desenvolvimento web com <strong>React</strong> e <strong>Java</strong>, e estou sempre buscando aprender novas ferramentas e linguagens.</p>
             <p>No meu portfolio, você vai encontrar alguns dos meus projetos pessoais e acadêmicos, que demonstram as minhas habilidades e interesses. Eu espero que você goste do meu trabalho e entre em contato comigo se tiver alguma dúvida ou sugestão.</p>
            <p><strong>Obrigado pela visita!</strong></p>
        </nav>
    </div>
)}

export default Aboutme