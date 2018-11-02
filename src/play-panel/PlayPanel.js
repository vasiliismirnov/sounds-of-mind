import React, { Component } from 'react';
import { playSequence, stopSequence } from '../actions/PlayActions';
import { connect } from 'react-redux';
import './PlayPanel.css';

class PlayPanel extends Component {

  constructor(props) {
    super(props);
  }

  onPlayBtnClick = e => {
    const { notes } = this.props;
    this.props.playSequence(notes);
  }

  onStopBtnClick = e => {
    this.props.stopSequence();
  }

  render() {
    const { isPlaying } = this.props;

    return (
      <div className="play-panel-container">
        <div className="card border-info mb-3">
          <div className="card-header">Playback</div>
          <div className="card-body">
            <div className="tool-panel-item">
              <button type="button" className="btn btn-info" onClick={this.onPlayBtnClick} disabled={isPlaying}>
                <i className="button-icon button-play"></i>
              </button>
              <button type="button" className="btn btn-info" onClick={this.onStopBtnClick} disabled={!isPlaying}>
                <i className="button-icon button-stop"></i>
              </button>
            </div>
            <p className="card-text tempo-panel">Tempo: 120 bpm</p>
            <p className="card-text time-signature-panel">Time signature: 4/4</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    notes: store.notes,
    isPlaying: store.playback.isPlaying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playSequence: notes => dispatch(playSequence(notes)),
    stopSequence: () => dispatch(stopSequence())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPanel);