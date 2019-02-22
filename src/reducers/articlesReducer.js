import InitialState from "./InitialState";

export default function articlesReducer(state=InitialState.articles, action) {
  switch(action.type){
    case 'SET_ARTICLES':
      const articleIds = action.articles.map(article => article.id)
      const allArticles = {}

      action.articles.forEach(article => allArticles[article.id] = article)

      return Object.assign({}, state, {allArticles: action.articles, articleIds: [...articleIds]})
      
    case 'SET_ARTICLE':
      return Object.assign({}, state, {article: action.article})
    default:
      return state
  }
}
