import styles from './Task.module.css'

import { Trash } from "@phosphor-icons/react";

export const Task = () => {

    return(
        <div className={styles.taskContainer}>
            <p>
                <span className={styles.chekbox}></span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, recusandae?
            </p>
            <Trash size={16} className={styles.trash}/>
        </div>
    )
}