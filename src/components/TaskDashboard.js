import React, {useState, useEffect} from 'react';
import {db} from "../firebase";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../css/tasks.css';
import {Link} from 'react-router-dom';


function TaskDashboard (props) {

  const [tasks,setTasks]=useState([''])




  function handleOnDragEnd(result) {
     if (!result.destination) return;
     const items = Array.from(tasks);
     const [reorderedItem] = items.splice(result.source.index, 1);
     items.splice(result.destination.index, 0, reorderedItem);

     setTasks(items);
   }




  ////////////////////////////////////////////////////////////////////
  const FetchTask = async () => {
    const arrayOfTasks = [];
    db.collection("tasks").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arrayOfTasks.push(doc.data())
          })
          setTasks(arrayOfTasks);
        })
    .catch( (err) => {
      console.error(err);
        alert("An error occured while fetching tasks data");
      });
  };
  useEffect(() => {
    FetchTask();
  }, [])
////////////////////////////////////////////////////////////////////



  return (
    <div>
      <h1>LIST OF TASKS</h1>
      <Link to="/dutytracker">
        <button>BACK TO APP</button>
      </Link>
      <DragDropContext onDragEnd={handleOnDragEnd}>
         <Droppable droppableId="tasks">
             {(provided) => (
               <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                 {
                   tasks.map(({taskName, id, taskColor }, index) => {
                     return(
                       <Draggable key={id} draggableId={id} index={index}>
                         {(provided) => (

                             <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  >
                               <p style={{backgroundColor: `${taskColor}`,width: "100%"}}
                                 onClick={()=> props.selectedTask(id)}>
                                 {taskName}
                               </p>
                             </li>

                         )}
                       </Draggable>
                     );
                   })
                 }
               {provided.placeholder}
               </ul>
             )}
         </Droppable>
       </DragDropContext>

    </div>
  );
}


export default TaskDashboard;
