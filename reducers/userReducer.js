const usersReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_USERS':
            return {...state, users:['usuarios']}
        default:
            return state;
    }
}

export default usersReducer;