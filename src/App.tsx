import styles from './App.module.css'
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from './components/Button'
import { Header as ListHeader } from './components/List/Header'
import { Empty } from './components/List/Empty'
import { Task } from './components/List/Task';

export function App() {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <div className={styles.taskInput}>
          <Input/>
          <Button/>
        </div>
        <div className={styles.listContainer}>
          <ListHeader/>
          <Empty/>
          <Task/>
        </div>
      </main>
    </>
  )
}