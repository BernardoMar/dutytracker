import '../css/App.css';
import React, {Component} from 'react';
import Tasks from './Tasks.js'
import CreateTask from './CreateTask.js'
import Dashboard from './Dashboard.js'
import ViewTask from './ViewTask.js'


class DutyTracker extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      selectedTask:[]
    };
    this.fetchUser = this.fetchUser.bind(this);
    this.fetchTask = this.fetchTask.bind(this)
  }

  fetchUser (user) {
    this.setState({user: user});
  };

  fetchTask (task) {
    this.setState({selectedTask: task});
  };

  render() {
    return (
      <div>
        <Tasks selectedTask={this.fetchTask} user={this.state.user}/>
        <CreateTask user={this.state.user}/>
        <ViewTask selectedTask={this.state.selectedTask} user={this.state.user}/>
        <Dashboard onChange={this.fetchUser}/>

      </div>
    )
  };
};

export default DutyTracker;
