import React from "react";
import Draggable from "react-draggable";

export default function Card({ currentTask, tasks, addTask }) {
  return (
    <Draggable grid={[10, 10]} axis='y' bounds='parent'>
      <div style={{backgroundColor: `${currentTask.taskColor}`}} className='card' key={currentTask.id}>
        <div className='heading'>
          <h3>{currentTask.taskName && currentTask.taskName}</h3>

        </div>
        <p>{currentTask.taskNotes}</p>
      </div>
    </Draggable>
  );
}
