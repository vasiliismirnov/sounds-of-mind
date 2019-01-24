export function changeTempo(tempo) {
  return {
    type: 'CHANGE_TEMPO',
    payload: tempo
  }
}

export function changeInstrument(instrument) {
  return {
    type: 'CHANGE_INSTRUMENT',
    payload: instrument
  }
}

export function playSequence(notes, tempo, instrument) {
  return {
    type: 'PLAY_SEQUENCE',
    payload: {notes: notes, tempo: tempo, instrument}
  }
}

export function stopSequence(sequence) {
  return {
    type: 'STOP_SEQUENCE',
    payload: sequence
  }
}