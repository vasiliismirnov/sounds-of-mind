export function playSequence(notes) {
  return {
    type: 'PLAY_SEQUENCE',
    payload: notes
  }
}

export function stopSequence(sequence) {
  return {
    type: 'STOP_SEQUENCE',
    payload: sequence
  }
}