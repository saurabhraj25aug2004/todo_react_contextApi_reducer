import { useState } from "react";
import "./Todo.css"; // Import the CSS file

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />

      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={`todo-text ${finished ? "finished" : ""}`}>
          {todoData}
        </span>
      )}

      <div className="todo-buttons">
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            if (isEditing) {
              onEdit(editText); // Save the edited text
            }
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
