import React from "react";
import Card from "./Card";

export default function UrgAndImpor ({ tasks, addTask }) {
  return (
    <>
      {tasks
        .filter((item) => item.taskPriority === "urg&import")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} />
        ))}
    </>
  );
}
