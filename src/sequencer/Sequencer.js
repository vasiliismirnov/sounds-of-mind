import React from 'react';
import SequencerHeader from './SequencerHeader';
import SequencerInstrumentRoll from './SequencerInstrumentRoll';
import { connect } from 'react-redux';
import { switchNoteItem, addBarItem, removeBarItem } from '../actions/SequencerActions';
import './Sequencer.css';

const Sequencer = ({ barSize, bars, switchNoteItem, addBarItem, removeBarItem }) => {
  if (!bars) {
    return;
  }

  return (
    <div className="sequencer-container column">
      <h4>Sequence</h4>
      <table className="sequencer-roll">
        <SequencerHeader 
          barSize={barSize} 
          bars={bars} 
          removeBarItem={removeBarItem}>
        </SequencerHeader>
        <SequencerInstrumentRoll
          barSize={barSize}
          bars={bars}
          switchNoteItem={switchNoteItem}
          addBarItem={addBarItem}>
        </SequencerInstrumentRoll>
      </table>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    bars: store.bars,
    barSize: store.barSize,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    switchNoteItem: (beatId, noteValue) => dispatch(switchNoteItem(beatId, noteValue)),
    addBarItem: (barSize) => dispatch(addBarItem(barSize)),
    removeBarItem: (barId) => dispatch(removeBarItem(barId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);