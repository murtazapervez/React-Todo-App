import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function Task({task, onDoubleClick, onDelete}) {
  return (
    <>
        <div className={`task ${task.completed ? 'reminder' : '' } `} onDoubleClick={() => {onDoubleClick(task.id)}}>
            <h3>{task.title}{' '}
                <FaTimes onClick= {() =>  {onDelete(task.id)}}/>
            </h3>
            <p>{ task.description }</p><br></br>
            <p><u><i>{ task.date_time.toString() }</i></u></p>
        </div>
    </>
  )
}
