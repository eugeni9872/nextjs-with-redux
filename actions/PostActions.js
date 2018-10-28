export const savePosts =  (data) => dispatch =>  {
   
    return dispatch({ type: 'ADD_POSTS', payload:data})
}


export const saveUsers = (users) => dispatch => {
    return dispatch({ type:'SAVE_USERS', payload: users})
}