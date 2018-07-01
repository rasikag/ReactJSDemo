import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }
    

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
        <h1>Welcome to React JS. </h1>
        <p className={assignedClasses.join(' ')}>Shall we play a game?</p>
        <button 
            className={btnClass}
            onClick={props.togglePersonHandler}>
          Shall we play?
        </button>
        </div>
    );
}

export default cockpit;