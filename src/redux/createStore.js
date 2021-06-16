const createStore = (reducer, initState, enhancer) => {
    if (enhancer) {
        if (typeof enhancer !== 'function') {
          throw new Error('Expected the enhancer to be a function.')
        }
    
        return enhancer(createStore)(reducer, initState)
    }

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

    // 初始化 将createStore时传进来的初始state合并进state中
    dispatch({ type: '@@INIT' });

    return {
        dispatch,
        getState,
        subscribe
    };
}

export default createStore;