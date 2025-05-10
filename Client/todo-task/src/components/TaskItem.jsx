import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-4 rounded-lg shadow-md mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-4"
        />
        <span className={`text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;