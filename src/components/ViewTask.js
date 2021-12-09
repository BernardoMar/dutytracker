import React, {Component, useEffect} from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {showTask} from "../firebase";
import {updateTask, db, deleteTask} from "../firebase";


class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: this.props.selectedTask,

    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
    this._handleDone = this._handleDone.bind(this);
  }


  componentDidUpdate(prevProps) {
    let newProp = false;
    if(prevProps.selectedTask !== this.props.selectedTask) {
      newProp=true;
      this.setState({currentTask: this.props.selectedTask});
      if (newProp) {
        this.setState({
          taskName: this.state.currentTask.taskName,
          taskDate: this.state.currentTask.taskDate,
          id: this.state.currentTask.id,
          taskCategory:  this.state.currentTask.taskCategory,
          taskPriority:  this.state.currentTask.taskPriority,
          taskColor: this.state.currentTask.taskColor,
          taskAddress: this.state.currentTask.taskAddress,
          user: this.state.currentTask.user,
          taskNotes: this.state.currentTask.taskNotes,
        })
        newProp=false;
      }
    // if(this.state.currentTask !== this.props.selectedTask){
    //   this.setState({
    //               taskName: this.state.currentTask.taskName,
    //               taskDate: this.state.currentTask.taskDate,
    //               id: this.state.currentTask.id,
    //               taskCategory:  this.state.currentTask.taskCategory,
    //               taskPriority:  this.state.currentTask.taskPriority,
    //               taskColor: this.state.currentTask.taskColor,
    //               taskAddress: this.state.currentTask.taskAddress,
    //               user: this.state.currentTask.user,
    //               taskNotes: this.state.currentTask.taskNotes,
    //             })
    //           }
            }
          }



  //
  // componentDidMount() {
  //   const FetchTask = async () => {
  //     let currentTask;
  //     if (this.props.selectedTask.length>0){
  //         currentTask = this.props.selectedTask
  //         let arrayOfTasks = [];
  //         db.collection("tasks").where("id", "==", `${currentTask}`).get().then((querySnapshot) => {
  //             querySnapshot.forEach((doc) => {
  //               arrayOfTasks.push(doc.data())
  //             })
  //
  //             console.log('did it work?', arrayOfTasks);
  //             this.setState({task: arrayOfTasks[0]});
  //             if (arrayOfTasks.length>0){
  //               this.setState({taskName: arrayOfTasks[0].taskName,
  //                           originalName: arrayOfTasks[0].taskDate,
  //                           taskDate: arrayOfTasks[0].taskDate,
  //                           id: arrayOfTasks[0].id,
  //                           taskCategory: arrayOfTasks[0].taskCategory,
  //                           taskPriority: arrayOfTasks[0].taskPriority,
  //                           taskColor: arrayOfTasks[0].taskColor,
  //                           taskAddress:arrayOfTasks[0].taskAddress,
  //                           user:arrayOfTasks[0].user,
  //                           taskNotes:arrayOfTasks[0].taskNotes,})
  //             }
  // //           })
  //           .catch( (err) => {
  //               console.error(err);
  //               alert("An error occured while fetching tasks data");
  //             });
  //       }
  //     };
  //   FetchTask();
  //   };

  _handleChange(event) {
  const key = event.target.name;
  this.setState({[key]: event.target.value});
};
  _handleDelete(event) {
  event.preventDefault();
  deleteTask(this.state.id);
};
  _handleDone(event) {
  event.preventDefault();
  const name = this.state.taskName;
  const id = this.state.id;
  const date = this.state.taskDate;
  const category = this.state.taskCategory;
  const priority = '✅';
  const color = '#8C9A9E';
  const address = this.state.taskAddress;
  const notes = this.state.taskNotes;
  const user = this.state.user;
  // console.log('the original name is', originalName);
  updateTask(user, id, name, date, category, priority, color,
  address, notes);
  this.setState({
    task: "",
    taskName: "",
    taskDate: "",
    taskCategory: "",
    taskPriority: "",
    taskColor: "",
    taskAddress:"",
    taskNotes:""});
};






_handleSubmit(event){
  event.preventDefault();
  const name = this.state.taskName;
  const id = this.state.id;
  const date = this.state.taskDate;
  const category = this.state.taskCategory;
  const priority = this.state.taskPriority;
  const color = this.state.taskColor;
  const address = this.state.taskAddress;
  const notes = this.state.taskNotes;
  const user = this.state.user;
  // console.log('the original name is', originalName);
  updateTask(user, id, name, date, category, priority, color,
  address, notes);
  this.setState({
    task: "",
    taskName: "",
    taskDate: "",
    taskCategory: "",
    taskPriority: "",
    taskColor: "",
    taskAddress:"",
    taskNotes:""});
  };




  render() {


    return (
      <div>
        <h2>THIS IS THE SHOWPAGE</h2>
        <Form
          onSubmit={this._handleSubmit}
          >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              // placeholder="Task Name"
              name="taskName"
              onChange={this._handleChange}
              value={this.state.taskName}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              name="taskDate"
              onChange={this._handleChange}
              value={this.state.taskDate}
               />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              required
              // placeholder="House Tasks"
              name="taskCategory"
              onChange={this._handleChange}
              value={this.state.taskCategory} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Row>
             <Col>
               <Form.Select
                aria-label="Default select example"
                name="taskPriority"
                required
                onChange={this._handleChange}
                value={this.state.taskPriority}>
                 <option>Priority</option>
                 <option value="urgent">Urgent</option>
                 <option value="important">Important</option>
                 <option value="urg&import">Urgent & Important</option>
                 <option value="notImport">Not Important</option>
               </Form.Select>
             </Col>
             <Col>
                <Form.Control
                  type="color"
                  required
                  id="exampleColorInput"
                  defaultValue="#563d7c"
                  title="Choose your color"
                  name="taskColor"
                  onChange={this._handleChange}
                  value={this.state.taskColor}
                />
             </Col>
            </Row>

          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              // placeholder="999 Princess Street"
              name="taskAddress"
              required
              onChange={this._handleChange}
              value={this.state.taskAddress} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Call gardener"
              name="taskNotes"
              onChange={this._handleChange}
              value={this.state.taskNotes} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={this._handleDone}>
            Mark Done
          </Button>
          <Button variant="danger" onClick={this._handleDelete}>
            Delete
          </Button>

        </Form>
      </div>
    )
  };
};

export default ViewTask;
