import React from  'react';
//import Radium from 'radium';
import classes from './Person.css'

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width : '450px'
    //     }
    // }

    // const rnd = Math.random();

    // if (rnd > 0.5) {
    //     throw new Error('Something went wrong');
    // }

    //return <p>This is my name: {props.name} and I am {props.age} years old.</p>
    return (
        //<div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}>This is my name: {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

//export default Radium(person);
export default person;