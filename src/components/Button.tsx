import styles from './Button.module.css'
import plusIcon from '../assets/plus.svg'

export function Button () {
    return(
        <button type="submit" className={styles.button}>
            Criar
            <img src={plusIcon} alt="" />
        </button>
    )
}