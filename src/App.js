import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";


function App() {
  
  const [tasks, setTasks] = useState([
    {
      "id":1,
      "title":"New Task",
      "description":"Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      "completed":false,
      "date_time":"15 September, 2022"
    }
  ])

  const addTask = async (task) => {
    setTasks([...tasks, task])
  }

  const markCompleted = async(id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task )
    )
  }

  const [showForm, setShowForm] = useState(false)

  const toggleForm = async() => {
    setShowForm(!showForm)
  }

  const removeTask = async(id) => {
    setTasks(
        tasks.filter((task) => task.id !== id )
      )
  }
  
  return (
    <div className="container">
      <Header title='Add Tasks' onClick={toggleForm}/>
      {showForm && <AddTaskForm onAdd={addTask}/> } 
      <TaskList tasks={tasks} onDoubleClick={markCompleted} onDelete={removeTask}/>
    </div>
  );
}

export default App;
