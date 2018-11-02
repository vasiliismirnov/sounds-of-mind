import React, { Component } from 'react';
import './NotesRoll.css';

class NotesRoll extends Component {
  getRollHeader() {
    const barSize = this.props.barSize;
    const notes = this.props.notes;
    const barHeaderItems = [];
    const beatHeaderItems = [];

    if (notes) {
      notes.forEach((note, index) => {
        const itemPosition = index + 1;
        if (itemPosition % barSize === 1) {
          const barId = barHeaderItems.length + 1;
          barHeaderItems.push(<th key={barId} colSpan={barSize}>{barId}</th>);
        }

        beatHeaderItems.push(<th key={itemPosition} className="beat-header">{itemPosition}</th>);
      });
    }

    return (
      <thead>
        <tr>
          {barHeaderItems}
        </tr>
        <tr>
          {beatHeaderItems}
        </tr>
      </thead>
    );
  }

  getNotes() {
    if (!this.props.notes) {
      return;
    }

    return this.props.notes.map((note) => (
      <td key={note.id} onClick={() => this.onNoteItemClick(note.id)}>
        {note.value}
      </td>
    ));
  }

  onNoteItemClick = (id) => {
    this.props.deleteNote(id);
  }

  render() {
    return (
      <div className="notes-roll-container">
        <h4>Sequence</h4>
        <table className="notes-roll">
          {this.getRollHeader()}
          <tbody>
            <tr>
              {this.getNotes()}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NotesRoll;