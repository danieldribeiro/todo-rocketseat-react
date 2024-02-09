import { Check, Trash } from '@phosphor-icons/react'

import { ITask } from '../../App'

import styles from './Task.module.css'

interface Props {
    data: ITask
    removeTask: (id: number) => void
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task ({ data, removeTask, toggleTaskStatus }:Props) {

    function handleTaskToggle() {
        toggleTaskStatus({ id: data.id, value: !data.isChecked })
    }

    function handleRemove() {
        removeTask(data.id)
    }

    const checkboxCheckedClassname = data.isChecked
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked
        ? styles['paragraph-checked']
        : ''

    return(
        <div className={styles.task}>
            <div className={styles.taskDescription} onClick={handleTaskToggle}>
                <input type="checkbox" readOnly checked={data.isChecked}/>
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    {data.isChecked && <Check size={12} />}
                </span>
                <span className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                    {data.text}
                </span>
            </div>
            <button className={styles.delete} onClick={handleRemove}>
                <Trash size={18} color="#808080"/>
            </button>
        </div>
    )
}