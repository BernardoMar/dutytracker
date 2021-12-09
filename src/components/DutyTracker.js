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
    const {selectedTask} = this.state
    return (
      <div>
        <CreateTask user={this.state.user}/>
        <Tasks selectedTask={this.fetchTask} user={this.state.user}/>
        <ViewTask selectedTask={selectedTask}/>
        <Dashboard onChange={this.fetchUser}/>

      </div>
    )
  };
};

export default DutyTracker;
