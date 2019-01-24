import { playSequence, stopSequence } from '../sounds-engine/SoundsEngine';

const play = (notes, tempo, instrument) => {
  const noteValues = notes.map(note => note.values);
  return playSequence(noteValues, tempo, instrument);
};

const stop = (sequence) => {
  stopSequence(sequence);
};

const playback = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY_SEQUENCE':
      const {notes, tempo, instrument} = action.payload;
      const sequence = play(notes, tempo, instrument);
      return {sequence: sequence, isPlaying: true};
    case 'STOP_SEQUENCE':
      stop(state.sequence);
      return {sequence: null, isPlaying: false};
    default:
      return state;
  }
};

export default playback;