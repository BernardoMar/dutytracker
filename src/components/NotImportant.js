import React from "react";
import Card from "./Card";
import "../css/NotImp.css";

export default function NotImportant({ tasks, addTask }) {
  return (
    <>
      <div >
        <div className='header'>
            <p className="headerText">Not Important</p>
        </div>
        {tasks
          .filter((item) => item.taskPriority === "Not Important")
          .map((e) => (
            <Card currentTask={e} tasks={tasks} addTask={addTask} /> //CREO QUE PUEDO SACAR EL ADD TASK PARA QUE NO QUIERA HACER CAMBIOS
          ))}
        </div>
    </>
  );
}
