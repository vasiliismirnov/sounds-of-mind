import uuidv4 from 'uuid/v4';

const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state, 
        {
          id: uuidv4(),
          value: action.payload
        }
      ];
    case 'DELETE_NOTE':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default notes;