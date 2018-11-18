import { combineReducers } from 'redux';
import bars from './bars';
import barSize from './barSize';
import tempo from './tempo';
import playback from './playback';

export default combineReducers({
    bars,
    barSize,
    tempo,
    playback
});