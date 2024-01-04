import styles from './Project.module.css'
import Button from '../layout/Button'

function Project(){
    return(
        <div>
            <nav className={styles.space}>
                <span>
                    <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                    <div className={styles.button}><Button  to="/" text="Ver mais" /></div></span>
                <span>
                    <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                    <div className={styles.button}><Button  to="/" text="Ver mais" /></div>
                </span>
                <span>
                    <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                    <div className={styles.button}><Button  to="/" text="Ver mais" /></div>
                </span>
                <span>
                    <div className={styles.projectGrid}><h1>Em construção...</h1> </div>
                    <div className={styles.button}><Button  to="/" text="Ver mais" /></div>
                </span>

            </nav>  
        </div>
    )
}

export default Project