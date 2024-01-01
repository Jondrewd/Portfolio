import {Link} from 'react-router-dom'
import { GiAbstract050 } from "react-icons/gi";
import styles from './Navbar.module.css'
import { Sidebar } from './Sidebar';
function Navbar(){


    return(
        <div className={styles.nav_layout}>
           <Link className={styles.nav_linkh1} to='/'>  <h1>Portfolio</h1></Link>
            <ul>
                <Link className={styles.nav_link} to='/'> Home</Link>
                <Link className={styles.nav_link} to='/skills'> Skills</Link>
                <Link className={styles.nav_link} to='/aboutme'> About me</Link>
                <Link className={styles.nav_link} to='/projects'> Projects</Link>
            </ul>
            
           <Sidebar/>
        </div>
        
)}

export default Navbar