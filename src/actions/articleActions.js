import {startFetchingData, stopFetchingData} from './loadingActions'

const API_URL = 'http://localhost:5000'

export const setArticles = articles => {
  return {
    type: 'SET_ARTICLES',
    articles
  }
}

export const fetchArticles = () => {
  return dispatch => {
    return dispatch(startFetchingData)

    fetch(`${API_URL}/articles`)
    .then(res => res.json())
    .then(articles => {
      dispatch(setArticles(articles))
      dispatch(stopFetchingData))
    })
  }
}
