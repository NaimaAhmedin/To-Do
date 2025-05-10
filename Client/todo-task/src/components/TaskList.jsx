import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="mt-6">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-gray-400 text-center">No tasks available. Add a new task!</p>
      )}
    </div>
  );
}

export default TaskList;