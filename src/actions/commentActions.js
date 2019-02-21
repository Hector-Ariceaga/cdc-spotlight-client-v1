const API_URL = 'http://localhost:5000/api/v1'

export const setComments = comments => {
  return {
    type: 'SET_COMMENTS',
    comments
  }
}

export const fetchComments = (id) => {
  debugger;
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_DATA'})
    return fetch(`${API_URL}/articles/${id}/comments`)
    .then(res => res.json())
    .then(comments => {
      debugger;
      dispatch({type: 'SET_COMMENTS', comments})
    })
  }
}

export default fetchComments;