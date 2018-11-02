export function addNote(value) {
  return {
    type: 'ADD_NOTE',
    payload: value
  }
}

export function deleteNote(id) {
  return {
    type: 'DELETE_NOTE',
    payload: id
  }
}