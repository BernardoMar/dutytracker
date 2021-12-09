import React from "react";
import Card from "./Card";

export default function NotImportant({ tasks, addTask }) {
  return (
    <>
      <div className='header'>
          <p>Not Important</p>
      </div>
      {tasks
        .filter((item) => item.taskPriority === "notImport")
        .map((e) => (
          <Card currentTask={e} tasks={tasks} addTask={addTask} /> //CREO QUE PUEDO SACAR EL ADD TASK PARA QUE NO QUIERA HACER CAMBIOS
        ))}
    </>
  );
}
