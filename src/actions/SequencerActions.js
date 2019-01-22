export function switchNoteItem(beatId, noteValue) {
  return {
    type: 'SWITCH_NOTE',
    payload: {
      beatId: beatId,
      noteValue: noteValue
    }
  }
};

export function addBarItem(barSize) {
  return {
    type: 'ADD_BAR',
    payload: barSize
  }
};

export function removeBarItem(barId) {
  return {
    type: 'REMOVE_BAR',
    payload: barId
  }
};

export function resetTrack() {
  return {
    type: 'RESET_TRACK',
    payload: null
  }
};