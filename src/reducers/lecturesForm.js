const initialState = {
  isOpened: false,
  id: null
};

export default (state = initialState, action) => {
  if (action.type === 'OPEN_FORM') {
    return {
      isOpened: true,
      id: action.id || null
    }
  }

  if (action.type === 'EDIT_FORM') {
    return {
      isOpened: true,
      id: action.id
    }
  }

  if (action.type === 'CLOSE_FORM') {
    return initialState;
  }

  return state;
}