import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/homepage';
import Resume from './routes/resumepage';
import About from './routes/aboutmepage';
import Project from './routes/projectpage';
import Contact from './routes/contactmepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/aboutme' component={About} />
          <Route exact path='/projects' component={Project} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
