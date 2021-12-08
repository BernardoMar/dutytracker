import React, {Component} from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {addTask} from "../firebase";


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
      <div>
        <Form onSubmit={this._handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Task Name"
              name="taskName"
              onChange={this._handleChange}
              value={this.state.taskName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Date</Form.Label>
            <Form.Control
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
              placeholder="House Tasks"
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
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="999 Princess Street"
              name="taskAddress"
              onChange={this._handleChange}
              value={this.state.taskAddress} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Call gardener"
              name="taskNotes"
              onChange={this._handleChange}
              value={this.state.taskNotes} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  };
};

export default CreateTasks;
