import styles from './Header.module.css'

export function Header () {
    return (
        <>
            <header className={styles.header}>
                <aside className={styles.taskInfo}>
                    Tarefas criadas
                    <span>0</span>
                </aside>

                <aside className={styles.taskInfo}>
                    Concluídas
                    <span>0</span>
                </aside>
            </header>
        </>
    )
}