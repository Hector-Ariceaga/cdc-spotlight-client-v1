

const API_URL = 'http://localhost:5000/api/v1'

export const setArticles = articles => {
  return {
    type: 'SET_ARTICLES',
    articles
  }
}

export const setArticle = article => {
  return {
    type: 'SET_ARTICLE',
    article
  }
}

export const fetchArticles = () => {
  return dispatch => {
    dispatch({type: 'START_FETCHING_DATA'})
    return fetch(`${API_URL}/articles`)
    .then(res => res.json())
    .then(articles => {
      dispatch(setArticles(articles))
    })
  }
}

export const fetchArticle = (id) => {
  ;
  return dispatch => {
    dispatch({type: 'START_FETCHING_DATA'})
    return fetch(`${API_URL}/articles/${id}`)
    .then(res => res.json())
    .then(article => {
      dispatch(setArticle(article))
    })
  }
}
