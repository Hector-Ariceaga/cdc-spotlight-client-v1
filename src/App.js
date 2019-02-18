import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Articles from './components/Articles'
import About from './components/About'
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />

            <Route exact path='/' component={Home} />
            <Route exact path='/articles' component={Articles} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
