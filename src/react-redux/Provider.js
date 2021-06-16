import React from 'react';

const ReactContext = React.createContext();
ReactContext.displayName = 'MyDisplayName';

const Provider = ({store, children}) => {
    return (
        <ReactContext.Provider value={ store }>
            { children }
        </ReactContext.Provider>
    );
}

export default Provider;
export { ReactContext };