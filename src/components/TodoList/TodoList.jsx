import Todo from "../Todo/Todo.jsx";
import TodoContext from "../../context/TodoContext.js";
import { useContext } from "react";
import "./TodoList.css"; // Import the CSS file

function TodoList() {
  const { list, setList } = useContext(TodoContext);

  return (
    <div className="todo-list-container">
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => {
              const updatedList = list.map((t) => {
                if (t.id === todo.id) {
                  todo.finished = isFinished;
                }
                return t;
              });
              setList(updatedList);
            }}
            onDelete={() => {
              const updatedList = list.filter((t) => t.id !== todo.id);
              setList(updatedList);
            }}
            onEdit={(todoText) => {
              const updatedList = list.map((t) => {
                if (t.id === todo.id) {
                  todo.todoData = todoText;
                }
                return t;
              });
              setList(updatedList);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
