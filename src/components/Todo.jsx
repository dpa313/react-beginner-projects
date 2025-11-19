import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // setTodos((prev) => [...prev,{ text: input, id: Math.floor(Math.random() * 10)}]);
    setTodos((todos)=>todos.concat({ text: input, id: Math.floor(Math.random() * 10)}));

    setInput("");
  };


  const removeTodo = (id) =>{
    const newTodos = todos.filter(t=>t.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        placeholder="Enter todos"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul className="todos-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="todo">
              <span>{todo.text}</span>
              <button onClick={()=>removeTodo(todo.id)} className="close">X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
