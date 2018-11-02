import React, { Component } from 'react';
import './NotesPanel.css';
import hangSampler from '../sounds-engine/SoundsEngine';

class NotesPanel extends Component {

  constructor(props) {
    super(props);
    this.hang = hangSampler;
  }

  getPanelItems() {
    const items = [ 
      {value: 'A0', title: 'A'}, 
      {value: 'B0', title: 'B'}, 
      {value: 'C1', title: 'C'}, 
      {value: 'D1', title: 'D'}, 
      {value: 'E1', title: 'E'}, 
      {value: 'F1', title: 'F'}, 
      {value: 'G1', title: 'G'} 
    ];

    return items.map(item => (
      <button type="button" className="btn btn-info" key={item.value} onClick={this.onNoteBtnClick} value={item.value}>
        {item.title}
      </button>
    ));
  }

  onNoteBtnClick = e => {
    const value = e.currentTarget.value;
    this.hang.triggerAttack(value);
    this.props.addNote(value);
  }

  render() {
    return (
      <div className="notes-panel-container">
        <div className="card border-info mb-3">
          <div className="card-header">Add note</div>
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