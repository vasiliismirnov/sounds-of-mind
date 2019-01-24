import { combineReducers } from 'redux';
import bars from './bars';
import barSize from './barSize';
import tempo from './tempo';
import instrument from './instrument';
import playback from './playback';

export default combineReducers({
    bars,
    barSize,
    tempo,
    instrument,
    playback,
});