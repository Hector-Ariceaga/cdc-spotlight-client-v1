import React, { Component } from 'react';
import './App.css';
import Articles from './components/Articles';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(){
    super()
    this.state = {
      articles: []
    }
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome to Spotlight</h1>
        <div className="navbar">
          <Navbar />
        </div>
        <div>
          <Articles articles={this.state.articles}/>
        </div>
      </div>
    );
  }
}

export default App;
