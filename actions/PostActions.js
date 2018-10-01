export const savePosts =  (dispatch, data) => {
   
    return dispatch({ type: 'ADD_POSTS', payload:data})
}