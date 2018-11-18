import React from 'react';
import { playSequence, stopSequence } from '../actions/PlayActions';
import { connect } from 'react-redux';
import './PlayPanel.css';

const PlayPanel = ({bars, isPlaying, playSequence, stopSequence}) => {

  const onPlayBtnClick = e => {
    const beats = bars.reduce((aggregatedBeats, bar) => 
      aggregatedBeats.concat(bar.beats), []);
    playSequence(beats);
  }

  const onStopBtnClick = e => {
    stopSequence();
  }

  return (
    <div className="column">
      <div className="play-panel-container">
        <div className="card border-info">
          <div className="card-header">Playback</div>
          <div className="card-body">
            <div className="tool-panel-item">
              <button type="button" className="btn btn-info" onClick={onPlayBtnClick} disabled={isPlaying}>
                <i className="button-icon button-play"></i>
              </button>
              <button type="button" className="btn btn-info" onClick={onStopBtnClick} disabled={!isPlaying}>
                <i className="button-icon button-stop"></i>
              </button>
            </div>
            <p className="card-text tempo-panel">Tempo: 120 bpm</p>
            <p className="card-text time-signature-panel">Time signature: 4/4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    bars: store.bars,
    isPlaying: store.playback.isPlaying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playSequence: beats => dispatch(playSequence(beats)),
    stopSequence: () => dispatch(stopSequence())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPanel);