const initialState = { count: 0 };

const count = (state = initialState, action) => {
    // console.log(state, action);
    switch (action.type) {
        case 'add':
            return Object.assign({}, state, { count: state.count + 1 });
        case 'cut':
            return Object.assign({}, state, { count: state.count - 1 });
        default:
            // A reducer must always return a valid state.
            // Alternatively you can throw an error if an invalid action is dispatched.
            return state;
    }
};

export default count;
