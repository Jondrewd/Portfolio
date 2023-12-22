import styles from './Projects.module.css'
import Project from '../project/Project'
function Projects(){
    return(
    <div className={styles.projectsLayout}>
        <Project/>
    </div>
)}

export default Projects