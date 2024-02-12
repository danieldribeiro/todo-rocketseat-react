import styles from './Input.module.css'

export const Input = ({...rest}:React.InputHTMLAttributes<HTMLInputElement>) => {
    return(
        <input 
            type='text'
            placeholder='Adicione uma tarefa'
            className={styles.input}
            {...rest}
        />
    )
}