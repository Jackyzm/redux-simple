const combineReducers = (reducers) => {
    // console.log(reducers);
    if (typeof reducers === 'function') return reducers;
    let initState = {};
    const reducersEntries = Object.entries(reducers)
    reducersEntries.map((item)=>{
        const [key, func] = item;
        initState[key] = func(undefined, {});
        return null;
    });

    const combination = (prevState = {}, action) => {
        const nextState = Object.assign({}, initState, prevState);

        reducersEntries.map((item) => {
            const [key, func] = item;
            const value = func(prevState[key], action);
            nextState[key] = value;
            return null;
        });
        return nextState;
    }
    return combination;
}

export default combineReducers;