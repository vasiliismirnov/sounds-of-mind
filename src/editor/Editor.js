import React, { Component } from 'react';
import NotesRoll from '../notes-roll/NotesRoll';
import NotesPanel from '../notes-panel/NotesPanel';
import { connect } from 'react-redux';
import { addNote, deleteNote } from '../actions/EditorActions';
import './Editor.css';
import PlayPanel from '../play-panel/PlayPanel';

class Editor extends Component {
  render() {
    const { notes, barSize, addNote, deleteNote } = this.props;

    return (
      <div>
        <div className="editor-tools-panel">
          <PlayPanel></PlayPanel>
          <NotesPanel addNote={addNote}></NotesPanel>
        </div>
        <NotesRoll notes={notes} barSize={barSize} deleteNote={deleteNote}></NotesRoll>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    notes: store.notes,
    barSize: store.barSize,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: value => dispatch(addNote(value)),
    deleteNote: id => dispatch(deleteNote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);