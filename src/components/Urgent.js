import React from "react";
import Card from "./Card";

export default function Urgent({ tasks, addTask }) {
  return (
    <>
      {tasks
        .filter((item) => item.taskPriority === "urgent")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
