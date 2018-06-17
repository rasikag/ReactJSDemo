import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React JS. Shall we play a game?</h1>
      </div>
    );
    //return React.createElement('div', null, 'h1', 'Hello from React app');
    //return React.createElement('div', null, 
    //            React.createElement('h1',null, 'Hello from React Application'));
    //return React.createElement('div',{class: 'App'}, 
    //            React.createElement('h1',null, 'Hello from React Application'));
  }
}

export default App;
