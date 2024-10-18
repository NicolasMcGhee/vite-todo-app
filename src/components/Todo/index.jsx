import React from "react";
import "./index.css";
import { ACTIONS } from "../../App";
//todo ff-sans-normal"
export default function Todo({ todo, dispatch }) {
  return (
    <div className={`${todo.delete ? "todo show" : "todo ff-sans-normal"}`}>
      <div>
        <p style={{ color: todo.complete ? "#AAA" : "#000" }}>{todo.name}</p>
      </div>
      <div className="todo-buttons">
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_EDIT_TODO,
              payload: { id: todo.id },
            })
          }
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.CHANGE_DELETE, payload: { id: todo.id } });
            setTimeout(
              () =>
                dispatch({
                  type: ACTIONS.DELETE_TODO,
                  payload: { id: todo.id },
                }),
              400
            );
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
