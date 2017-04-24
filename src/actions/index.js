export const openEditForm = id => {
  return {
    type: 'EDIT_FORM',
    id
  }
};

export const closeEditForm = () => {
  return {
    type: 'CLOSE_FORM'
  }
};