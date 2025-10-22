import { useState } from 'react'
import './App.css'

function App() {
  const [task,setTask] = useState("")
  const [tasks,setTasks] = useState([])

  const addTask = () => {
    if(task.trim() === "") return;
    setTasks([...tasks,task])
    setTask("")
  }
  const deleteTask = (index) => {
     setTasks(tasks.filter((_,i) => i!== index))
  }

  return (
    <>
      <div className='todolist'>
        <h1>To DO LIST</h1>
        <input type="text"  value={task}  onChange={(e) => setTask(e.target.value)}placeholder='Enter your task...'/>
        <button onClick={addTask} >Add</button>

        <ul>
          {tasks.length === 0?(
            <p>No Task</p>
          ):(
            tasks.map((t,i) => (
               <li key={i}>
                {t}
                <button onClick={() => deleteTask(i)}>Delete</button>
               </li>
            ))
          )}
        </ul>
      </div>
    </>
  )
}

export default App
