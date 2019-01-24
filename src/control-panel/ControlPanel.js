import React from 'react';
import { changeTempo, changeInstrument, playSequence, stopSequence } from '../actions/ControlPanelActions';
import { connect } from 'react-redux';
import './ControlPanel.css';

const ControlPanel = ({ bars, tempo, instrument, isPlaying, changeTempo, changeInstrument, playSequence, stopSequence }) => {

  const onPlayBtnClick = e => {
    const beats = bars.reduce((aggregatedBeats, bar) =>
      aggregatedBeats.concat(bar.beats), []);
    playSequence(beats, tempo, instrument);
  }

  const onStopBtnClick = e => {
    stopSequence();
  }

  const onTempoChanged = e => {
    changeTempo(e.target.value);
  }

  const onInstrumentChanged = e => {
    changeInstrument(e.target.value);
  }

  return (
    <div className="row control-panel-container">
      <div className="col-4 control-panel-item">
        <h4 className="header">Playback</h4>
        <div className="body">
          <div className="form-group">
            <div className="tool-panel-item">
              <button type="button" className="btn" onClick={onPlayBtnClick} disabled={isPlaying}>
                <i className="fas fa-play"></i>
              </button>
              <button type="button" className="btn" onClick={onStopBtnClick} disabled={!isPlaying}>
                <i className="fas fa-stop"></i>
              </button>
            </div>
          </div>
          <div className="form-group">
            <p className="time-signature">Time signature: 4/4</p>
          </div>
        </div>
      </div>

      <div className="col-4 control-panel-item">
        <h4 className="header">Controls</h4>
        <div className="body">
          <div className="form-group">
            <label htmlFor="tempoRange" className="tempo">Tempo: {tempo} bpm</label>
            <input id="tempoRange" type="range" className="form-control custom-range" min="60" max="360" step="30"
              defaultValue={tempo} onChange={onTempoChanged} disabled={isPlaying} />
          </div>
          <div className="form-group">
            <label htmlFor="instrument" className="tempo">Instrument:</label>
            <select id="instrument" className="form-control custom-select" 
              defaultValue="hang" onChange={onInstrumentChanged} disabled={isPlaying}>
              <option value="hang">Hang</option>
              <option value="tank">Tank</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    bars: store.bars,
    tempo: store.tempo,
    instrument: store.instrument,
    isPlaying: store.playback.isPlaying,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTempo: tempo => dispatch(changeTempo(tempo)),
    changeInstrument: instrument => dispatch(changeInstrument(instrument)),
    playSequence: (beats, tempo, instrument) => dispatch(playSequence(beats, tempo, instrument)),
    stopSequence: () => dispatch(stopSequence()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);