import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import ArticlesContainer from './containers/ArticlesContainer'
import CreateArticle from './containers/CreateArticle'
import Article from './containers/Article'
import About from './components/About'
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          
            <NavBar />
              
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/articles' component={ArticlesContainer} />
              <Route exact path='/articles/new' component={CreateArticle} />
              <Route exact path='/articles/:id' component={Article} />
              <Route exact path="/about" component={About} />
            </Switch>
         
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
