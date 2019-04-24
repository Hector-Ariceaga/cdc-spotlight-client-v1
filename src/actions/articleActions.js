const API_URL = process.env.REACT_APP_API_URL

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

export const addArticle = article => {
  return {
    type: 'ADD_ARTICLE',
    article
  }
}

export const fetchArticles = () => {
  return dispatch => {
    dispatch({type: 'START_FETCHING_DATA'})
    return fetch(`${API_URL}articles`)
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
    return fetch(`${API_URL}articles/${id}`)
    .then(res => res.json())
    .then(article => {
      dispatch(setArticle(article))
    })
  }
}

export const createArticle = article => {
  debugger;
  return dispatch => {
    return fetch(new Request(`${API_URL}/articles`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(article)
    }))
    .then(res => res.json())
    .then(article => {
      dispatch(addArticle(article))
      return article.id
    })
  }
}
