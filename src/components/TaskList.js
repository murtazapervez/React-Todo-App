import React from 'react'
import Task from './Task'

export default function TaskList({tasks, onDoubleClick}) {
  return (
    <>
        {tasks.map((task, index) => (
            <Task key={index} task={task} onDoubleClick={onDoubleClick}/>
        ))}
        
    </>
  )
}
