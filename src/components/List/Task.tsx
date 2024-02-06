import styles from './Task.module.css'
import trash from '../../assets/trash.png'

export function Task () {
    return(
        <div className={styles.task}>
            <div className={styles.taskDescription}>
                <input type="checkbox" name="" id="" />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <img src={trash} alt="" />
        </div>
    )
}