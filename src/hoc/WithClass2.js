import React, { Component } from 'react';

 const withClass2 = (WrappedComponent, className) => {

    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        };
    }

 }
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };



export default withClass2;