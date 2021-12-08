import React, {useState, useEffect} from 'react';
import {db} from "../firebase";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../css/tasks.css';


function Tasks(props) {

  const [tasks,setTasks]=useState([''])


  useEffect(() => {

    db.collection("tasks").onSnapshot(snapshot => (
      setTasks(snapshot.docs.map(doc => doc.data()))

    ))


  });

  function handleOnDragEnd(result) {
     if (!result.destination) return;
     const items = Array.from(tasks);
     const [reorderedItem] = items.splice(result.source.index, 1);
     items.splice(result.destination.index, 0, reorderedItem);

     setTasks(items);
   }




  ////////////////////////////////////////////////////////////////////
  // const FetchTask = async () => {
  //   const arrayOfTasks = [];
  //   db.collection("tasks").get().then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           arrayOfTasks.push(doc.data())
  //         })
  //         setTasks(arrayOfTasks);
  //       })
  //   .catch( (err) => {
  //     console.error(err);
  //       alert("An error occured while fetching tasks data");
  //     });
  // };
  // useEffect(() => {
  //   FetchTask();
  // }, [])
////////////////////////////////////////////////////////////////////



  //


  return (
    <div>
      <h1>LIST OF TASKS</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Done</th>
            <th>Task Name</th>
            <th>Due Date</th>
            <th>Category</th>
            <th>Priority</th>
            
          </tr>
        </thead>
        <tbody>
        { tasks.map((task)=>
            <tr onClick={()=> props.selectedTask(task.id)}>

                  <td>
                    <Form.Check type="checkbox"/>
                  </td>
                  <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskName}</td>
                  <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskDate}</td>
                  <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskCategory}</td>
                  <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskPriority}</td>

            </tr>
          )}

        </tbody>
      </Table>
    </div>
  );
}

export default Tasks;
