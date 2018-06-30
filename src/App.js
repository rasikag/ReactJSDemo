import React, { Component } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id: 1, name: 'Max', age: 29},
      {id: 2, name: 'Jinna', age: 30},
      {id: 3, name: 'Hithu', age: 28}
    ],
    otherState : 'this will not change'
  }

  /*
  switchNameHandler = (newName) => {
    // Don't directly change the state
    //this.state.persons[0].name = "Hello Tina Patikar";

    this.setState({
      persons : [
        {name: newName, age: 29},
        {name: 'JinnaInSetState', age: 30},
        {name: 'HithuInSetState', age: 28}
      ],
      showPerson: false
    })
  }
  */

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this.setState({
    //   persons : [
    //     {name: event.target.value, age: 30},
    //     {name: 'J name 001', age: 30},
    //     {name: 'J name 002', age: 30}
    //   ]
    // });
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

    const styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      boarder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    // ':hover': {
    //   backgroundColor: 'lightgreen',
    //   color: 'black'
    // }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
        {/*
          <Person name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} 
                  changed={this.nameChangedHandler}/>
          <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  click={this.switchNameHandler.bind(this, 'New name from P tag')}>
            What will be hobby: Eating
          </Person>
          <Person name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />
        */}
        {
          this.state.persons.map( (person, index) => { 
            return <Person name={person.name}
                           click={() => this.deletePersonHandler(index)}
                           age={person.age} 
                           key={person.id}
                           changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })
        }
        </div> 
      );

      styles.backgroundColor = 'red';
      // styles[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
      // <StyleRoot>
      //<div className="App">
      <div className={classes.App}>
        <h1>Welcome to React JS. </h1>
        <p className={assignedClasses.join(' ')}>Shall we play a game?</p>
        {/*<button style={styles} onClick={() => this.switchNameHandler('Clicked from button')}>
          Shall we play?
        </button>
        */}
        <button style={styles} onClick={this.togglePersonHandler}>
          Shall we play?
        </button>
        { persons }
      </div>
      // </StyleRoot>
    );
    //return React.createElement('div', null, 'h1', 'Hello from React app');
    //return React.createElement('div', null, 
    //            React.createElement('h1',null, 'Hello from React Application'));
    //return React.createElement('div',{class: 'App'}, 
    //            React.createElement('h1',null, 'Hello from React Application'));
  }
}

//export default Radium(App);
export default App;
