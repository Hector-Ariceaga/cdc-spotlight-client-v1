export default function articlesReducer(state={allArticles: [], article: {}, articleIds: []}, action) {
  switch(action.type){
    case 'SET_ARTICLES':
      const articleIds = action.articles.map(article => article.id)
      const allArticles = []

      action.articles.forEach(article => allArticles[article.id] = article)
      return {...state, allArticles: action.articles, articleIds: [...articleIds] }
      
    case 'SET_ARTICLE':
      return {article: action.article}
    default:
      return state
  }
}
