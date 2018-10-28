const usersReducer = (state=[], action) => {
    switch(action.type) {
        case 'SAVE_USERS':
            return {...state, users: action.payload}
        default:
            return state;
    }
}

export default usersReducer;