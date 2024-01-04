import styles from './Home.module.css'
import Button from '../layout/Button';



function Home(){
    return(
   <div className={styles.homeLayout}>
       <div className={styles.textH}>
           <h1>Desenvolvedor <strong>fullstack</strong></h1>
           <p>Crio sites utilizando React e Java</p>
           <Button to="/contato" text="Entre em contato" />
       </div>

        <div className={styles.image}></div>

    </div>
    )
}

export default Home