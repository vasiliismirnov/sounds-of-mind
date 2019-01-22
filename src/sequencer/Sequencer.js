import React from 'react';
import { connect } from 'react-redux';
import { switchNoteItem, addBarItem, removeBarItem, resetTrack } from '../actions/SequencerActions';
import './Sequencer.css';

const Sequencer = ({ barSize, bars, isPlaying, switchNoteItem, addBarItem, removeBarItem, resetTrack }) => {
  if (!bars) {
    return;
  }

  const noteItems = [
    { value: 'C3', title: 'C' },
    { value: 'D3', title: 'D' },
    { value: 'E3', title: 'E' },
    { value: 'G3', title: 'G' },
    { value: 'A3', title: 'A' },
  ];

  const headerCell = <th key="0" className="sequencer-roll-cell note-value-header"></th>;

  let barHeaderItems = [headerCell];
  let beatHeaderItems = [headerCell];
  const beats = bars.reduce((aggregatedBeats, bar) => aggregatedBeats.concat(bar.beats), []);

  barHeaderItems = barHeaderItems.concat(bars.map((bar, index) => (
    <th key={bar.barId} colSpan={barSize} className="sequencer-roll-cell bar-header-item">
      {index + 1}
      <i className="fas fa-minus-circle remove-icon" onClick={() => onRemoveBarClick(bar.barId)}></i>
    </th>
  )));

  beatHeaderItems = beatHeaderItems.concat(beats.map((beat, index) =>
    <th key={beat.beatId} className="sequencer-roll-cell beat-header">{index + 1}</th>));

  const onNoteItemClick = (beatId, noteValue) => {
    switchNoteItem(beatId, noteValue);
  }

  const onAddBarClick = () => {
    addBarItem(barSize);
  }

  const onRemoveBarClick = (barId) => {
    removeBarItem(barId);
  }

  const onResetTrackClick = () => {
    resetTrack();
  }

  const getColumns = (noteValue) => beats.map((beat) => {
    const isNoteActive = beat.values.includes(noteValue);
    const beatClassName = 'sequencer-roll-cell ' + (isNoteActive ? 'active-note' : 'inactive-note');
    return (
      <td key={beat.beatId} onClick={() => onNoteItemClick(beat.beatId, noteValue)} className={beatClassName}></td>
    );
  });

  const rows = noteItems.map((item, index) => (
    <tr key={item.value}>
      <th className="sequencer-roll-cell note-value-header">{item.title}</th>
      {getColumns(item.value)}
    </tr>
  ));

  return (
    <div className="row">
      <div className="sequencer-container col">
        <h4 className="title">Sequence</h4>
        <div className="body">
          <div className="add-bar-item">
            <button type="button" className="btn" onClick={() => onAddBarClick()} disabled={isPlaying}>
              <i className="fas fa-plus-circle"></i> Add bar
            </button>
            <button type="button" className="btn" onClick={() => onResetTrackClick()} disabled={isPlaying}>
              <i className="fas fa-times-circle"></i> Reset
            </button>
          </div>
          <div className="sequencer-roll">
            <table>
              <thead>
                <tr>
                  {barHeaderItems}
                </tr>
                <tr>
                  {beatHeaderItems}
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    bars: store.bars,
    barSize: store.barSize,
    isPlaying: store.playback.isPlaying,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    switchNoteItem: (beatId, noteValue) => dispatch(switchNoteItem(beatId, noteValue)),
    addBarItem: (barSize) => dispatch(addBarItem(barSize)),
    removeBarItem: (barId) => dispatch(removeBarItem(barId)),
    resetTrack: () => dispatch(resetTrack()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);