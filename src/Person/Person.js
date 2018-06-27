import React from  'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    //return <p>This is my name: {props.name} and I am {props.age} years old.</p>
    return (
        <div className="Person">
            <p onClick={props.click}>This is my name: {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Radium(person);