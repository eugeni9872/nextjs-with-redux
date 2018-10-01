const postsReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_POSTS':
            
            return {...state, posts: action.payload}
        default:
            return state;
    }
}

export default postsReducer;