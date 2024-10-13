import React from 'react'
import './index.css'


export default function TodoForm() {
  return (
    <div className='ff-sans-cond todoForm fs-600 uppercase'>
        <h1>React Todo App</h1>
        <div className='todoForm-input'>
            <input type='text' placeholder='What is your task?'/>
            <button>Add Task</button>
        </div>
        
    </div>
  )
}
