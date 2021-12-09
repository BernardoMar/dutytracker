import React from "react";
import Card from "./Card";
import "../css/Urgent.css";

export default function Urgent({ tasks, addTask }) {
  return (
    <>
      <div className='header'>
          <p className="headerText">Urgent</p>
      </div>
      {tasks
        .filter((item) => item.taskPriority === "Urgent")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
