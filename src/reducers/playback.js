import { playSequence, stopSequence } from '../sounds-engine/SoundsEngine';

const play = (notes) => {
  const noteValues = notes.map(note => note.values);
  return playSequence(noteValues);
};

const stop = (sequence) => {
  stopSequence(sequence);
};

const playback = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY_SEQUENCE':
      const sequence = play(action.payload);
      return {sequence: sequence, isPlaying: true};
    case 'STOP_SEQUENCE':
      stop(state.sequence);
      return {sequence: null, isPlaying: false};
    default:
      return state;
  }
};

export default playback;