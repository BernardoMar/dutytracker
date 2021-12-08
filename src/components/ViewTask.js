import React, {Component} from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {showTask} from "../firebase";
import {updateTask} from "../firebase";


class ViewTask extends Component {
  constructor() {
    super();
    this.state = {
      // taskName: "name",
      // taskDate: null,
      // taskCategory: "category",
      // taskPriority: "priority",
      // taskColor: "color",
      // taskAddress:"address",
      // taskNotes:"notes",
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }


  componentDidMount() {
    const fetchTasks = () => {
      showTask().then((response) => {
        // console.log('componen did mount response', response);
        // console.log('and also the props', this.props.selectedTask);
        let name = '';
        const filteredTasks = response.filter((task) => {
          if(task.taskName == this.props.selectedTask) {
            return task;

            }
          })

          this.setState({task: filteredTasks[0]});
          if (filteredTasks.length>0){
            this.setState({taskName: filteredTasks[0].taskName,
                            taskDate: filteredTasks[0].taskDate,
                            taskCategory: filteredTasks[0].taskCategory,
                            taskPriority: filteredTasks[0].taskPriority,
                            taskColor: filteredTasks[0].taskColor,
                            taskAddress:filteredTasks[0].taskAddress,
                            taskNotes:filteredTasks[0].taskNotes,})
          }


          // console.log(filteredTasks[0]);

      })
        setTimeout(fetchTasks, 6000);
      };
      fetchTasks();
      // const setStates = () => {
      //   fetchTasks().then((response)=> {
      //     console.log('this is the setState.response', response);
      //   })
      // };

    };

  _handleChange(event) {
  const key = event.target.name;
  this.setState({[key]: event.target.value});
};

_handleSubmit(event){
  event.preventDefault();
  const originalName = this.state.task.taskName;
  const name = this.props.selectedTask;
  const date = this.state.taskDate;
  const category = this.state.taskCategory;
  const priority = this.state.taskPriority;
  const color = this.state.taskColor;
  const address = this.state.taskAddress;
  const notes = this.state.taskNotes;
  const user = this.props.user;
  // console.log('the original name is', originalName);
  updateTask(user, originalName, name, date, category, priority, color,
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
        </Form>
      </div>
    )
  };
};

export default ViewTask;
