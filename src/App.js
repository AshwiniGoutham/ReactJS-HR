import React, { Component } from 'react';
import './App.css';
import { Root } from './decorator/root';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { SelectRole } from './components/SelectRole';
import { Requests } from './components/Requests';
import { TeamView } from './components/TeamView';
import { CalenderView } from './components/CalenderView';
import { Admin } from './components/Admin';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={SelectRole} />
          <Route path="selectRole" component={SelectRole}  />
          <Route path="requests" component={Requests} />
          <Route path="teamView" component={TeamView} />
          <Route path="calendarView" component={CalenderView} />
          <Route path="admin" component={Admin} />
        </Route>
      </Router>
      </div>
    );
  }
}

export default App;
