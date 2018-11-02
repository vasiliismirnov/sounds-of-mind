import { combineReducers } from 'redux';
import notes from './notes';
import barSize from './barSize';
import playback from './playback';

export default combineReducers({
    notes,
    barSize,
    playback
});