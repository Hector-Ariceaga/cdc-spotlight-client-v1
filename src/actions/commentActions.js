const API_URL = process.env.REACT_APP_API_URL

export const setComments = comments => {
  return {
    type: 'SET_COMMENTS',
    comments
  }
}

export const removeComments = () => {
  return { type: 'REMOVE_COMMENTS'}
}

export const addComment = comment => {
  return { 
    type: 'ADD_COMMENT',
    comment
  }
}

export const fetchComments = id => {
  return (dispatch) => {
    dispatch({type: 'START_FETCHING_DATA'})
    return fetch(`${API_URL}articles/${id}/comments`)
    .then(res => res.json())
    .then(comments => {
      dispatch(setComments(comments))
    })
  }
}

export const createComment = comment => {
  return dispatch => {
    return fetch(new Request(`${API_URL}articles/${comment.articleId}/comments/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
    }))
    .then(res => res.json())
    .then(comment => {
      dispatch(addComment(comment))
      return comment.article_id
    })
  }
}