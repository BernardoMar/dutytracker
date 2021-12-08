import React from "react";
import Card from "./Card";

export default function Important({ tasks, addTask }) {
  return (
    <>
      {tasks
        .filter((item) => item.taskPriority === "important")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}