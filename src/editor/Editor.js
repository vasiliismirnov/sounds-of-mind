import React from 'react';
import './Editor.css';
import ControlPanel from '../control-panel/ControlPanel';
import Sequencer from '../sequencer/Sequencer';

const Editor = () => {
  return (
    <div className="row">
      <div className="col container">
        <ControlPanel></ControlPanel>
        <Sequencer></Sequencer>
      </div>
    </div>
  );
};

export default Editor;