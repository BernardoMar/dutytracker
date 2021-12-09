import React from "react";
import Draggable from "react-draggable";

export default function Card({ currentTask, tasks, addTask }) {
  return (
    <Draggable grid={[10, 10]} axis='y' bounds='parent'>
      <div style={{backgroundColor: `${currentTask.taskColor}`}} className='card' key={currentTask.id}>
        <div className='heading'>
          <h3>{currentTask.taskName}</h3>

        </div>
        <div className="detailsWrapper">
          <div className="lilColums">
            <p>{currentTask.taskNotes}</p>
            <p>{currentTask.taskCategory}</p>
          </div>
          <div className="lilColums">
            <p>{currentTask.taskDate}</p>
          </div>
        </div>
      </div>

    </Draggable>
  );
}
