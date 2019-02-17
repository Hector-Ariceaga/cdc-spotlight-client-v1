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

  componentDidMount(){
    fetch('http://localhost:5000/api/v1/articles')
    .then(res => res.json())
    .then( articles => {
      this.setState({
        articles: articles
      })
    })
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
