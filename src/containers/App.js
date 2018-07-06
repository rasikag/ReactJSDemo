import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends PureComponent {

  state = {
    persons : [
      {id: 1, name: 'Max', age: 29},
      {id: 2, name: 'Jinna', age: 30},
      {id: 3, name: 'Hithu', age: 28}
    ],
    otherState : 'this will not change',
    showPerson: false,
    toggleClicked: 0
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
    this.setState(( previousState, props) => {
      return {
        showPerson : !doesShow,
        toggleClicked: previousState.toggleClicked +1
      }
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.persons !== this.state.persons ||
  //           nextState.showPerson !== this.state.showPerson;
  // }

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
      <WithClass classes={classes.App}>
        <button onClick={ () => { this.setState({showPerson:true})}}>Show Person</button>
        <Cockpit 
          showPerson ={this.state.showPerson} 
          persons = {this.state.persons}
          togglePersonHandler = {this.togglePersonHandler}/>
        { persons }
      </WithClass>
    );
  }
}

export default App;
