import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React JS. Shall we play a game?</h1>
        <Person name="Rasika Gayan" age="28" />
        <Person name="Hello World" age="2B">
          What will be hobby: Eating
        </Person>
        <Person name="This is test person" age="25" />
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
