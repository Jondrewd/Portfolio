import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.nav_layout}>
            <h1>Portfolio</h1>
            <ul>
                <Link className={styles.nav_link} to='/'> Home</Link>
                <Link className={styles.nav_link} to='/skills'> Skills</Link>
                <Link className={styles.nav_link} to='/aboutme'> About me</Link>
                <Link className={styles.nav_link} to='/projects'> Projects</Link>
            </ul>
        </div>
)}

export default Navbar