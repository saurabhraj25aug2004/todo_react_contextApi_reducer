import { useState } from "react";
import "./AddTodo.css"; // Import the CSS file

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="add-todo-container">
      <input
        type="text"
        className="add-todo-input"
        value={inputText}
        placeholder="Add your next todo..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="add-todo-button"
        onClick={() => {
          if (inputText.trim() !== "") {
            updateList(inputText);
            setInputText("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
