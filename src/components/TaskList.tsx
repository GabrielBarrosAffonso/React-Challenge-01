import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [ids, setIds] = useState<number>(0)
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if(newTaskTitle === ''){
      return
    }
    setIds(ids + 1)
    const newTasks = [ ...tasks , {
      id: ids,
      title: newTaskTitle,
      isComplete: false
    }]

    setTasks(newTasks)
  }

  function handleToggleTaskCompletion(id: number) {
    const updatedArray = tasks.map(obj => {
      if(obj.id === id) {
        obj.isComplete = !obj.isComplete
        return obj
      }
      return obj
    })
    setTasks(updatedArray)
  }

  function handleRemoveTask(id: number) {
    const allTasks = [...tasks]
    const removedTask = allTasks.find(task => task.id === id)
    if(removedTask !== undefined){
      const indexTask = allTasks.indexOf(removedTask)
      allTasks.splice(indexTask, 1)
    }
    setTasks(allTasks)
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}