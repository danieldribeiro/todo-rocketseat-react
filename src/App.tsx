import { useState } from "react";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Header as ListHeader } from './components/List/Header'
import { Empty } from "./components/List/Empty";

import { PlusCircle  } from "@phosphor-icons/react";

import styles from './App.module.css'
import { Task } from "./components/List/Task";

interface task {
  id: number,
  description: string,
  isChecked: boolean
}

function App() {

  const [tasks, setTasks] = useState<task[]>([])
  const [inputValue, setInputValue] = useState('')

// =============================================================================
  const handleAddTask = () => {
    if(!inputValue) return

    const newTask: task = {
      id: new Date().getTime(),
      description: inputValue,
      isChecked: false
    }
    
    setTasks((state) => [...state, newTask])
    setInputValue('')
  }


  return (
    <>
      <Header/>

      <main className={styles.main}>
        <section className={styles.taskInputSection}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value = {inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle  size={16}/>
          </Button>
        </section>

        <section className={styles.listContainer}>
          <ListHeader />
          <Empty/>
          <Task/>
        </section>
      </main>
    </>
  )
}

export default App
