import { useReducer, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import TodoFormEdit from "./components/TodoFormEdit";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  TOGGLE_EDIT_TODO: "toggle-edit-todo",
  DELETE_TODO: "delete-todo",
  EDIT_TODO: "edit-todo",
  CHANGE_DELETE: "change-delete",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      if (action.payload.name === "") {
        return todos;
      } else {
        return [...todos, newTodo(action.payload.name)];
      }
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.CHANGE_DELETE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, delete: !todo.delete };
        }
        return todo;
      });
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      case ACTIONS.TOGGLE_EDIT_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, edit: !todo.edit};
  
          }
          return todo;
        });
      case ACTIONS.EDIT_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return (
              // { ...todo, name: action.payload.name, edit: !todo.edit}
              { ...todo, name: action.payload.name, edit: !todo.edit}
            );
            
          }
          return todo;
        });
      default:
        return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
    edit: false,
    delete: false,
  };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <TodoForm handleSubmit={handleSubmit} setName={setName} name={name} />
      {todos.map((todo) =>
        todo.edit ? (
          <TodoFormEdit key={todo.id} todo={todo} dispatch={dispatch} />
        ) : (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        )
      )}
    </>
  );
}

export default App;
