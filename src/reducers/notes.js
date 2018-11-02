import uuidv4 from 'uuid/v4';

const notes = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      if (!state[action.hangId]) {
        state[action.hangId] = [];
      }
      state[action.hangId].push(
        {
        id: uuidv4(),
        value: action.payload
      });
      return state;
    case 'DELETE_NOTE':
      return state[action.hangId].filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default notes;