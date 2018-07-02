import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons : [
      {id: 1, name: 'Max', age: 29},
      {id: 2, name: 'Jinna', age: 30},
      {id: 3, name: 'Hithu', age: 28}
    ],
    otherState : 'this will not change'
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson : !doesShow
    });
  };

  deletePersonHandler = (index) => {
    //const persons = this.state.persons;
    // before ES6
    //const persons = this.state.persons.slice();
    // ES6 
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({
      persons : persons
    });
  };

  render() {
    // how to access the props in stateful component
    //const accessProps = this.props.appTitle;
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/> ;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPerson ={this.state.showPerson} 
          persons = {this.state.persons}
          togglePersonHandler = {this.togglePersonHandler}/>
        { persons }
      </div>
    );
  }
}

export default App;
