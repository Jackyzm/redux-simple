import React from 'react';
import { ReactContext } from './Provider';

const connect = () => {
    console.log(ReactContext);
    return (Component) => (
        () => <Component />
        // <ReactContext.Consumer>
        //     {value => {
        //         console.log(value);
        //         return () => <Component/>
        //     }}
        // </ReactContext.Consumer>
    );
};

export default connect;