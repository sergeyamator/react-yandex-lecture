import lecturesData from '../data/lectures';

export default (state = lecturesData, action) => {
  if (action.type === 'ADD_NEW_LECTURE') {
    return [
      ...state,
      action.payload
    ]
  }

  return state;
}