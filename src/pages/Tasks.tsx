/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import type { Task } from "../types";
import TaskItem from "../components/TaskItem";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn TypeScript", completed: false },
    { id: 2, title: "Build a React App", completed: false },
    { id: 3, title: "Learn TypeScript", completed: false },
    { id: 4, title: "Build a React App", completed: false },
    { id: 5, title: "Learn TypeScript", completed: false },
    { id: 6, title: "Build a React App", completed: false },
    { id: 7, title: "Learn TypeScript", completed: false },
    { id: 8, title: "Build a React App", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className='main-container'>
      <h1>Task Tracker</h1>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>
    </div>
  );
};
export default Tasks;
