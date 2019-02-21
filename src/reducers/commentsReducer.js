export default function commentsReducer(state={}, action) {
  switch(action.type){
    case 'SET_COMMENTS':
      return action.comments
    default:
      return state
  }
}
