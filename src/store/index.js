import {createStore, applyMiddware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const middlewares = [thunk]

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddware(...middlewares)
)

// store = {
//   loading: false,
//   articles: [],
//   comments: []
// }
