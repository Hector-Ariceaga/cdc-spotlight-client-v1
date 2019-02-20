import { combineReducers } from 'redux'
import loadingReducer from './loadingReducer'
import articlesReducer from './articlesReducer'
import commentsReducer from './commentsReducer'

 const rootReducer = combineReducers({
  loading: loadingReducer,
  articles: articlesReducer,
  comments: commentsReducer
})

export default rootReducer;