// src/TaskItem.tsx
import React from "react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <li
      onClick={() => onToggle(task.id)}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        cursor: "pointer",
      }}>
      {task.title}
    </li>
  );
};

export default TaskItem;
