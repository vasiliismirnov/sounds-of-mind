export function addNote(hangId, value) {
  return {
    type: 'ADD_NOTE',
    hangId: hangId,
    payload: value,
  }
}

export function deleteNote(hangId, noteId) {
  return {
    type: 'DELETE_NOTE',
    hangId: hangId,
    payload: noteId
  }
}