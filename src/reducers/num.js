const num = (state = 0, action) => {
    switch (action.type) {
        case 'addd':
            return state + 1;
        case 'cutt':
            return state - 1;
        default:
            // A reducer must always return a valid state.
            // Alternatively you can throw an error if an invalid action is dispatched.
            return state;
    }
};

export default num;
