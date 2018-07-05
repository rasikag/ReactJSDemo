import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

        // shouldComponentUpdate(nextProps, nextStatus) {
        //         //return true;
        //         return nextProps.persons !== this.props.persons || 
        //                 nextProps.changed !== this.props.changed ||
        //                 nextProps.clicked !== this.props.clicked;
        // }

        render () {
                return this.props.persons.map( (person, index) => {            
                        return <Person 
                                name={person.name}
                                click={() => this.props.clicked(index)}
                                age={person.age} 
                                key={person.id}
                                changed={(event) => this.props.changed(event, person.id)}/>
                });
        };
}

export default Persons;

