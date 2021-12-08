import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';


import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/dutytracker" component={App}/>
      <Route exact path="/" component={LogIn}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/reset" component={Reset}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
