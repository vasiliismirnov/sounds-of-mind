import uuidv4 from 'uuid/v4';
import { track } from '../initialData';

const switchNoteHandler = (state, beatId, noteValue) => {
  let beatToUpdateIndex = -1;
  const barToUpdateIndex = state.findIndex(bar => {
    beatToUpdateIndex = bar.beats.findIndex(beat => beat.beatId === beatId);
    return (beatToUpdateIndex !== -1) ? true : false;
  });

  if (barToUpdateIndex !== -1 && beatToUpdateIndex !== -1) {
    const resultState = state.slice();
    const barToUpdate = resultState[barToUpdateIndex];

    const updatedBeats = barToUpdate.beats.map((beat, index) => {
      if (index !== beatToUpdateIndex) {
        return beat;
      }

      const value = beat.values.find(value => value === noteValue);
      if (value) {
        // remove value if it was in beat
        return { ...beat, values: beat.values.filter(value => value !== noteValue) };
      } else {
        // add value if it was not in beat
        return { ...beat, values: [...beat.values, noteValue] };
      }
    });

    return state.map((bar, index) =>
      index === barToUpdateIndex ?
        { ...bar, beats: updatedBeats } :
        bar
    );
  }

  return state;
}

const addBar = (state, barSize) => {
  const beatsToAdd = [];

  for (let i = 0; i < barSize; i++) {
    beatsToAdd.push({ beatId: uuidv4(), values: [] });
  }

  const barToAdd = {
    barId: uuidv4(),
    beats: beatsToAdd
  }

  return [...state, barToAdd];
}

const removeBar = (state, barId) => {
  return state.filter(bar => bar.barId !== barId);
}

const resetTrack = (state) => {
  return track.bars;
}

const bars = (state = [], action) => {
  switch (action.type) {
    case 'SWITCH_NOTE':
      const { beatId, noteValue } = action.payload;
      return switchNoteHandler(state, beatId, noteValue);
    case 'ADD_BAR':
      const barSize = action.payload;
      return addBar(state, barSize);
    case 'REMOVE_BAR':
      const barId = action.payload;
      return removeBar(state, barId);
    case 'RESET_TRACK':
      return resetTrack(state);
    default:
      return state;
  }
}

export default bars;