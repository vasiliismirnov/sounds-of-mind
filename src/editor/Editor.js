import React from 'react';
import './Editor.css';
import PlayPanel from '../play-panel/PlayPanel';
import Sequencer from '../sequencer/Sequencer';

const Editor = () => {
  return (
    <div className="row">
      <div className="column container">
        <div className="row">
          <PlayPanel></PlayPanel>
        </div>
        <div className="row">
          <Sequencer></Sequencer>
        </div>
      </div>
    </div>
  );
};

export default Editor;