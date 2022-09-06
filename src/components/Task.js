import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function Task({task, onDoubleClick}) {
  return (
    <>
        <div className={'task'} onClick={onDoubleClick(task.id)}>
            <h3>{task.title}{' '}
                <FaTimes />
            </h3>
            <p>{ task.description }</p>
        </div>
    </>
  )
}
