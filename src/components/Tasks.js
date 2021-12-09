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

    db.collection("tasks").where("user","==", `${props.user}`).onSnapshot(snapshot => (
      setTasks(snapshot.docs.map(doc => doc.data()))
    ))
  });


  return (
    <div className="listWrapper">

      <Table className="table" striped bordered hover>
        <thead>
          <tr>

            <th className="tableHeaders">Task Name</th>
            <th className="tableHeaders">Due Date</th>
            <th className="tableHeaders">Category</th>
            <th className="tableHeaders">Priority</th>

          </tr>
        </thead>
        <tbody>
        { tasks.map((task)=>
            <tr onClick={()=> props.selectedTask(task)}>


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
