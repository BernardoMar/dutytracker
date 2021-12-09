import React, {Component} from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {addTask} from "../firebase";
import '../css/CreateTasks.css'
import {Link} from 'react-router-dom'
import TaskDashboard from './TaskDashboard.js';


class CreateTasks extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      taskDate: null,
      taskCategory: "",
      taskPriority: "",
      taskColor: "",
      taskAddress:"",
      taskNotes:""
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
  const key = event.target.name;
  this.setState({[key]: event.target.value});
};

_handleSubmit(event){
  event.preventDefault();
  const name = this.state.taskName;
  const date = this.state.taskDate;
  const category = this.state.taskCategory;
  const priority = this.state.taskPriority;
  const color = this.state.taskColor;
  const address = this.state.taskAddress;
  const notes = this.state.taskNotes;
  const user = this.props.user;
  console.log('Handle Submit working so far');
  addTask(user, name, date, category, priority, color,
  address, notes);
  this.setState({
    taskName: "",
    taskDate: "",
    taskCategory: "",
    taskPriority: "",
    taskColor: "",
    taskAddress:"",
    taskNotes:""})
};

  render() {
    return (
      <div className="CreateTasksContainer">
        <Form onSubmit={this._handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formText">Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Task Name"
              name="taskName"
              onChange={this._handleChange}
              value={this.state.taskName} />
          </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="formText">Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="taskDate"
                  onChange={this._handleChange}
                  value={this.state.taskDate}
                   />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formText">Category</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="House Tasks"
                  name="taskCategory"
                  onChange={this._handleChange}
                  value={this.state.taskCategory} />
              </Form.Group>
            </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Row>
             <Col>
               <Form.Select
                required
                aria-label="Default select example"
                name="taskPriority"
                onChange={this._handleChange}
                value={this.state.taskPriority}>
                 <option value="urgent">Urgent</option>
                 <option value="important">Important</option>
                 <option value="notImport">Not Important</option>
               </Form.Select>
             </Col>
             <Col>
                <Form.Control
                  required
                  type="color"
                  id="exampleColorInput"
                  defaultValue="#563d7c"
                  title="Choose your color"
                  name="taskColor"
                  onChange={this._handleChange}
                  value={this.state.taskcolor}
                />
             </Col>
            </Row>

          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formText">Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="999 Princess Street"
              name="taskAddress"
              onChange={this._handleChange}
              value={this.state.taskAddress} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formText">Notes</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Call gardener"
              name="taskNotes"
              onChange={this._handleChange}
              value={this.state.taskNotes} />
          </Form.Group>
          <div className="inline-boxxx">
            <button className="btn-blue">
              Create Task
            </button>
            <Link to="/board">
              <button className="btn-lime"> Check all tasks </button>
            </Link>
          </div>
        </Form>
      </div>
    )
  };
};

export default CreateTasks;
