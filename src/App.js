import React from 'react';
import { connect } from './react-redux';

const App = (props) =>{
    console.log(props);
    return (<div>App</div>);
}
console.log(connect()(App))
export default connect()(App);
