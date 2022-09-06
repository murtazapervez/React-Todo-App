import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types'


export default function AddTaskForm({onAdd}) {

const [title, setName] = useState('')

const [description, setDescription] = useState('')

const [date_time, setDateTime] = useState('')

const [completed, setCompleted] = useState(false)

  const onSubmit = (e) =>{
    e.preventDefault();

    onAdd({
        id : Math.floor(Math.random() * 10000) + 1,
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
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={description}
          id="description"
          name="description"
          onChange={(e) => { setDescription(e.target.value) }}
        />
      </div>

      <div className="form-control">
        <label>Date & Time</label>
        <DatePicker 
          onChange={(date) => {
            setDateTime(date)}
          }
          selected={date_time}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Completed</label>
        <input
          type="checkbox"
          id='completed'
          name='completed'
          value={completed}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' onClick={onSubmit}/>

    </form>
  );
}
