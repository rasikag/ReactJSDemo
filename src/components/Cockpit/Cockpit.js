import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPerson) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
        <h1>Welcome to React JS. </h1>
        <p className={assignedClasses.join(' ')}>Shall we play a game?</p>
        <button 
            className={btnClass}
            onClick={props.togglePersonHandler}>
          Shall we play?
        </button>
        </Aux>
    );
}

export default cockpit;