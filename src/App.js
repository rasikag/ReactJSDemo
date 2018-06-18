import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name: 'Max', age: 29},
      {name: 'Jinna', age: 30},
      {name: 'Hithu', age: 28}
    ],
    otherState : 'this will not change'
  }

  switchNameHandler = () => {
    // Don't directly change the state
    //this.state.persons[0].name = "Hello Tina Patikar";

    this.setState({
      persons : [
        {name: 'TestSetState', age: 29},
        {name: 'JinnaInSetState', age: 30},
        {name: 'HithuInSetState', age: 28}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React JS. Shall we play a game?</h1>
        <button onClick={this.switchNameHandler}>
          Shall we play?
        </button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={}>
          What will be hobby: Eating
        </Person>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
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
