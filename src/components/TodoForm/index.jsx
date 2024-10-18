import React from "react";
import "./index.css";

export default function TodoForm({handleSubmit, setName, name}) {
  return (

    <div className="ff-sans-cond todoForm fs-600 uppercase">
      <h1>React Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  );
}
