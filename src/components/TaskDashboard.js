import React, {useState, useEffect} from 'react';
import '../css/TaskDashboard.css';
import {db} from "../firebase";
import {Link} from 'react-router-dom';
import Draggable from "react-draggable";
import Header from './Header'
import Important from "./Important";
import Urgent from "./Urgent";
import NotImportant from "./NotImportant";
import UrgAndImpor from "./UrgAndImpor";

function TaskDashboard (props) {

  const [tasks,setTasks]=useState([''])

  const [addItem, setAddItem] = useState(false);
  const handleSubmit = () => {
    setAddItem(!addItem);
  };
  const addTask = (task) => { //OJO QUE ESTE LLAMA A SET TASKS TAMBIEN
    setTasks(task);
  };






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
      <Header />
      <div className='mainGrid'>
        <div className='column'>
          <UrgAndImpor tasks={tasks} addTask={addTask} />
        </div>
        <div className='column'>
          <Urgent tasks={tasks} addTask={addTask} />
        </div>
        <div className='column'>
          <Important tasks={tasks} addTask={addTask} />
        </div>
        <div className='column'>
          <NotImportant tasks={tasks} addTask={addTask} />
        </div>

      </div>

    </div>
  );
}


export default TaskDashboard;
