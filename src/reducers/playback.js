import { playSequence, stopSequence } from '../sounds-engine/SoundsEngine';

const play = (notes, tempo) => {
  const noteValues = notes.map(note => note.values);
  return playSequence(noteValues, tempo);
};

const stop = (sequence) => {
  stopSequence(sequence);
};

const playback = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY_SEQUENCE':
      const {notes, tempo} = action.payload;
      const sequence = play(notes, tempo);
      return {sequence: sequence, isPlaying: true};
    case 'STOP_SEQUENCE':
      stop(state.sequence);
      return {sequence: null, isPlaying: false};
    default:
      return state;
  }
};

export default playback;