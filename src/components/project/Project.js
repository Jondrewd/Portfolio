import styles from './Project.module.css'
import Button from '../layout/Button'

function Project(){
    return(
        <div>
            <nav>
                <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
            </nav>
            <div className={styles.buttonLayout}>
                <div className={styles.button}><Button  to="/" text="Ver mais" /></div>
                <div className={styles.button}><Button  to="/" text="Ver mais" /></div>
                <div className={styles.button}><Button  to="/" text="Ver mais" /></div>
                <div className={styles.button}><Button  to="/" text="Ver mais" /></div>
            </div>
            
        </div>
        )
}

export default Project