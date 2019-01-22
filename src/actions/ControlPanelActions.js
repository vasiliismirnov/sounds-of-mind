export function changeTempo(tempo) {
  return {
    type: 'CHANGE_TEMPO',
    payload: tempo
  }
}

export function playSequence(notes, tempo) {
  return {
    type: 'PLAY_SEQUENCE',
    payload: {notes: notes, tempo: tempo}
  }
}

export function stopSequence(sequence) {
  return {
    type: 'STOP_SEQUENCE',
    payload: sequence
  }
}