import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import ProjectDetails from './components/projects/ProjectDetails.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Navbar />
         <Switch>
           <Route path='/' component={Dashboard} />
           <Route path = '/project/:id' component = {ProjectDetails} />
        
         </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
