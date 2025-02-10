import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoContext from "./context/TodoContext.js";
import './App.css';

function App() {
  // Load saved todos from localStorage
  const savedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
  const [list, setList] = useState(savedTodos);

  // Save to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const updateList = (todo) => {
    if (todo.trim() !== "") {
      setList((prevList) => [
        ...prevList,
        {
          id: prevList.length + 1,
          todoData: todo,
          finished: false,
        },
      ]);
    }
  };

  return (
    <TodoContext.Provider value={{ list, setList }}>
      <h1 className="app-heading">Todo App ✅</h1>
      <AddTodo updateList={updateList} />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
