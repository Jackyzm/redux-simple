import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from './redux';
import reducers from './reducers';

const store = createStore(reducers);

// console.log(store);
// store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'add'});
store.dispatch({type: 'cut'});
store.dispatch({type: 'addd'});
store.dispatch({type: 'cutt'});

setTimeout(()=> {
    store.dispatch({type: 'cutt'});
},0)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
