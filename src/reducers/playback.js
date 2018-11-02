import { playSequence, stopSequence } from '../sounds-engine/SoundsEngine';

const play = (notes) => {
  return playSequence(notes);
};

const stop = (sequences) => {
  stopSequence(sequences);
};

const playback = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY_SEQUENCE':
      console.log(action);
      const sequences = play(action.payload);
      return {sequences: sequences, isPlaying: true};
    case 'STOP_SEQUENCE':
      stop(state.sequences);
      return {sequences: null, isPlaying: false};
    default:
      return state;
  }
};

export default playback;