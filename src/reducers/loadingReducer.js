export default function loadingReducer(state = false, action) {
  switch(action.type){
    case 'START_FETCHING_DATA':
      return true
    case 'STOP_FETCHING_DATA':
      return false
    default:
      return state
  }
}
