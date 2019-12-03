export const ActionTypes = {
  SET_ID: 'SET_ID',
  DELETE_ID: 'DELETE_ID',
};

export const setID = id => ({
  type: ActionTypes.SET_ID,
  payload: id,
});

export const deleteID = () => ({
  type: ActionTypes.DELETE_ID,
});
