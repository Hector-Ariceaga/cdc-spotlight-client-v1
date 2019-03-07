export default function commentsReducer(state=[], action) {
  switch(action.type){
    case 'SET_COMMENTS':
      return action.comments
    case 'REMOVE_COMMENTS':
      return []
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
}
