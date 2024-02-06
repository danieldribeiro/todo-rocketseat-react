import styles from './App.module.css'
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from './components/Button'

export function App() {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <div className={styles.taskInput}>
          <Input/>
          <Button/>
        </div>
      </main>
    </>
  )
}