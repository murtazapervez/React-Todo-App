import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";


function App() {
  
  const [tasks, setTasks] = useState([])

  const addTask = async (task) => {
    setTasks([...tasks, task])
  }

  const markCompleted = async(id) => {
    console.log(id)
    console.log(tasks)
    tasks.map((task) => {
      task.id === id ? {...task, reminder: true} : task
    })

    console.log(task);
  }

  return (
    <div className="container">
      <Header title='Add Tasks'/>
      <AddTaskForm onAdd={addTask}/>
      <TaskList tasks={tasks} onDoubleClick={markCompleted}/>
    </div>
  );
}

export default App;
