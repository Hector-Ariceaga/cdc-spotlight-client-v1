import InitialState from "./InitialState";

export default function commentsReducer(state=InitialState.comments, action) {
  switch(action.type){
    case 'SET_COMMENTS':
      return action.comments
    case 'REMOVE_COMMENTS':
      return {}
    case 'ADD_COMMENT':
      return action.comment
    default:
      return state
  }
}
