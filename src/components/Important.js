import React from "react";
import Card from "./Card";

export default function Important({ tasks, addTask }) {
  return (
    <>
      <div className='header'>
          <p>Important</p>
      </div>
      {tasks
        .filter((item) => item.taskPriority === "important")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
