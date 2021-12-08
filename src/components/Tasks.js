import React, {Component} from 'react';
import {showTask, deleteTask} from "../firebase";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      selectedTask: null,
      user: ''
    };
this.handleClick = this.handleClick.bind(this)
this.handleDelete = this.handleDelete.bind(this)

  };

componentDidMount() {
  const fetchTasks = () => {
    showTask().then((response) => {
      console.log(response);
      const filteredTasks = response.filter((task) => {
        if(task.user == this.props.user) {
          return task;
        }
      })
      this.setState({tasks: filteredTasks});
    })

      setTimeout(fetchTasks, 6000);
    };
    fetchTasks();
  };

  handleClick (task){
    this.props.selectedTask(task.taskName)
  };

  handleDelete (task){
    deleteTask(task.taskName)
  };



render() {


  return (


    <div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Done</th>
            <th>Task Name</th>
            <th>Due Date</th>
            <th>Category</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        { this.state.tasks.map((task)=>
            <tr>
              <td>
                <Form.Check type="checkbox"/>
              </td>
              <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskName}</td>
              <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskDate}</td>
              <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskCategory}</td>
              <td style={{backgroundColor: `${task.taskColor}`}}>{task.taskPriority}</td>
              <td><Button
              variant="primary"
              onClick={(()=>{
                this.handleClick(task)
              })}
              >Details</Button>
              <Button
              variant="danger"
              onClick={(()=>{
                this.handleDelete(task)
              })}
              >Delete</Button></td>
            </tr>
          )}

        </tbody>
      </Table>
    </div>
  )};
};

export default Tasks;
