import styles from './Button.module.css'

export const Button = ({children, ...rest}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return(
        <button className={styles.button} {...rest}>
            {children}
        </button>
    )
}