import React from  'react';

const person = (props) => {
    //return <p>This is my name: {props.name} and I am {props.age} years old.</p>
    return (
        <div>
            <p onClick={props.click}>This is my name: {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;