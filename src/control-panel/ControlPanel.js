import React from 'react';
import { changeTempo, playSequence, stopSequence } from '../actions/ControlPanelActions';
import { connect } from 'react-redux';
import './ControlPanel.css';

const ControlPanel = ({ bars, tempo, isPlaying, changeTempo, playSequence, stopSequence }) => {

  const onPlayBtnClick = e => {
    const beats = bars.reduce((aggregatedBeats, bar) =>
      aggregatedBeats.concat(bar.beats), []);
    playSequence(beats, tempo);
  }

  const onStopBtnClick = e => {
    stopSequence();
  }

  const onTempoChanged = e => {
    changeTempo(e.target.value);
  }

  return (
    <div className="row control-panel-container">
      <div className="col-4 control-panel-item">
        <h4 className="header">Playback</h4>
        <div className="body">
          <div className="tool-panel-item">
            <button type="button" className="btn" onClick={onPlayBtnClick} disabled={isPlaying}>
              <i className="fas fa-play"></i>
            </button>
            <button type="button" className="btn" onClick={onStopBtnClick} disabled={!isPlaying}>
              <i className="fas fa-stop"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-4 control-panel-item">
        <h4 className="header">Controls</h4>
        <div className="body">
          <p className="time-signature">Time signature: 4/4</p>
          <p className="tempo">Tempo: {tempo} bpm</p>
          <input id="tempoRange" type="range" className="custom-range" min="60" max="360" step="30"  
            defaultValue={tempo} onChange={onTempoChanged} disabled={isPlaying}/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    bars: store.bars,
    tempo: store.tempo,
    isPlaying: store.playback.isPlaying,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTempo: tempo => dispatch(changeTempo(tempo)),
    playSequence: (beats, tempo) => dispatch(playSequence(beats, tempo)),
    stopSequence: () => dispatch(stopSequence()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);