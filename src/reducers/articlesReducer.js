export default articlesReducer(state={}, action) {
  switch(action.type){
    case 'FETCH_ARTICLES':
      return action.articles
    default:
      return state
  }
}
