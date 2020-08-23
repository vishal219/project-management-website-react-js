import React from 'react';
import {makestyles} from '@material-ui/core'
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Dashboard from './components/dasboard/Dashboard';
import ProjectDetails from './components/projects/Projectdetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Createproject from './components/projects/Createproject';
function App() {
  return (
    <Router>
    <div className="App">
     
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/projectdetails" component={ProjectDetails}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/createproject" component={Createproject}></Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
