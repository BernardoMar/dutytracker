import React from "react";
import Card from "./Card";

export default function UrgAndImpor ({ tasks, addTask }) {
  return (
    <>
      <div className='header'>
          <p>Done</p>
      </div>
      {tasks
        .filter((item) => item.taskPriority === "✅")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
