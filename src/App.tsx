import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

import styles from './App.module.css'

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from './components/Button'
import { Header as ListHeader } from './components/List/Header'
import { Empty } from './components/List/Empty'
import { Task } from './components/List/Task';

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if(!inputValue) return

    const newTask:ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isChecked: value }
        }

        return { ...task }
      })

      setTasks(updatedTasks)
  }

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <div className={styles.taskInput}>
          <Input 
            onChange = {(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick = {handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.listContainer}>
          <ListHeader/>

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty/>
          )}

        </div>
      </main>
    </>
  )
}