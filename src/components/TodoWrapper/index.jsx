import React from 'react'
import './index.css'
import TodoForm from '../TodoForm'
import Todo from '../Todo'


export default function TodoWrapper() {
  return (
    <div className='container todoWrapper'>
        <TodoForm />
        <Todo />
    </div>
  )
}
