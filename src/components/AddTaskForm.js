import React from "react";
import { useState } from "react";


export default function AddTaskForm({onAdd}) {

const [title, setName] = useState('')

const [date_time, setDateTime] = useState('')

const [completed, setCompleted] = useState(false)

  const onSubmit = (e) =>{
    e.preventDefault();

    onAdd({
        title,
        date_time,
        completed,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    })

    setName('')
    setDateTime('')
    setCompleted(false)
  }


  return (
    <form className="add-form">
      
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={title}
          id='title'
          name='title'
          onChange={(e) => { setName(e.target.value) }}
        />
      </div>

      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="datetime"
          placeholder="Set Date Time"
          id='date_time'
          name='date_time'
          value={date_time}
          onChange={(e) => { setDateTime(e.target.value) }}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Completed</label>
        <input
          type="checkbox"
          id='completed'
          name='completed'
          value={completed}
          onChange={(e) => { setCompleted(e.target.value) }}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' onClick={onSubmit}/>

    </form>
  );
}
