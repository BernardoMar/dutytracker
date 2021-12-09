import React from "react";
import Card from "./Card";
import "../css/Important.css";

export default function Important({ tasks, addTask }) {
  return (
    <>
      <div className='header'>
          <p className="headerText">Important</p>
      </div>
      {tasks
        .filter((item) => item.taskPriority === "Important")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
