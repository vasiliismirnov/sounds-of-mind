import React, { Component } from 'react';
import './NotesPanel.css';
import hangSamplers from '../sounds-engine/SoundsEngine';

class NotesPanel extends Component {

  constructor(props) {
    super(props);
    this.hang = hangSamplers[this.props.hangId];
  }

  getPanelItems() {
    return this.getHangNotesMapping().map(item => (
      <button type="button" className="btn btn-info" key={item.value} onClick={this.onNoteBtnClick} value={item.value}>
        {item.title}
      </button>
    ));
  }

  getHangNotesMapping() {
    if (this.props.hangId === 'etnic') {
      return [
        { value: 'A0', title: 'A3' },
        { value: 'D1', title: 'D4' },
        { value: 'D#1', title: 'D#4' },
        { value: 'F#1', title: 'F#4' },
        { value: 'G1', title: 'G4' },
        { value: 'A1', title: 'A4' },
        { value: 'A#1', title: 'A#4' },
        { value: 'C#2', title: 'C#5' },
        { value: 'D2', title: 'D5' },
        { value: 'A10', title: 'P' },
      ];
    } else {
      return [
        { value: 'A0', title: 'A' },
        { value: 'B0', title: 'B' },
        { value: 'C1', title: 'C' },
        { value: 'D1', title: 'D' },
        { value: 'E1', title: 'E' },
        { value: 'F1', title: 'F' },
        { value: 'G1', title: 'G' },
        { value: 'A10', title: 'P' },
      ];
    }
  }

  onNoteBtnClick = e => {
    const value = e.currentTarget.value;
    this.hang.triggerAttack(value);
    this.props.addNote(this.props.hangId, value);
  }

  render() {
    return (
      <div className="notes-panel-container">
        <div className="card border-info mb-3">
          <div className="card-header">{this.props.hangName}</div>
          <div className="card-body">
            <div className="notes-panel">
              {this.getPanelItems()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesPanel;