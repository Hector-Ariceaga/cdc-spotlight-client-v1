

const API_URL = 'http://localhost:5000/api/v1'

export const setArticles = articles => {
  return {
    type: 'SET_ARTICLES',
    articles
  }
}

export const fetchArticles = (dispatch) => {
  return dispatch => {
    dispatch({type: 'START_FETCHING_DATA'})
    return fetch(`${API_URL}/articles`)
    .then(res => res.json())
    .then(articles => {
      dispatch({type: 'SET_ARTICLES', articles})
      dispatch({type: 'STOP_FETCHING_DATA'})
    })
  }
}
