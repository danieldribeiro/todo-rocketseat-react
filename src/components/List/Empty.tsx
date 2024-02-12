import styles from './Empty.module.css'

import clipboard from '../../assets/Clipboard.svg';


export const Empty = () => {
    return(
        <div className={styles.empty}>
            <img src={clipboard} alt="clipboard icon" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}