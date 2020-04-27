const createStore = (reducer, initState) => {
    let currentState = initState;
    let listener;

    const subscribe = (callback) => {
        if (callback) {
            listener = callback;
        }
    }

    const dispatch = (action) => {
        currentState = reducer(currentState, action);
        listener && listener();
    }
    // console.log(reducer);

    const getState = () => {
        return currentState;
    }

    dispatch({ type: '@@INIT' });

    return {
        dispatch,
        getState,
        subscribe
    };
}

export default createStore;