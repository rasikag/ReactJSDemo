import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let persons = null;
    let btnClass = '';

    if (this.state.showPerson) {
      persons = (
        <div>
        {
          this.state.persons.map( (person, index) => { 
             
            return <ErrorBoundary key={person.id}>
              <Person name={person.name}
                           click={() => this.deletePersonHandler(index)}
                           age={person.age} 
                           
                           changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundary>
          })
          // key must be in the outer element
        }
        </div> 
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
      <div className={classes.App}>
        <h1>Welcome to React JS. </h1>
        <p className={assignedClasses.join(' ')}>Shall we play a game?</p>
        <button 
            className={btnClass}
            onClick={this.togglePersonHandler}>
          Shall we play?
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
