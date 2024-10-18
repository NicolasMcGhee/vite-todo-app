import React from 'react'
import { useState } from 'react';
import './index.css'
import { ACTIONS } from "../../App";

export default function TodoFormEdit({ todo, dispatch}) {
    
    const [value, setValue] = useState(todo.name)
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.EDIT_TODO, payload: { name: value } });
        // setName(value);
        setValue("")
      }
    
      return (
          <form onSubmit={handleSubmit} className='ff-sans-cond todo todoEdit fs-600 uppercase container'>
            <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            </div>
            <div>
            {/* <button onClick={handleSubmit}>Add Todo</button> */}
            <button onClick={() => dispatch({type: ACTIONS.EDIT_TODO, payload: { id: todo.id, name: value} })}> Stop Edit</button>
            </div>
            
          </form>
      )
}
