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
          <NotesPanel hangId="standard" hangName="Standard Hang" addNote={addNote}></NotesPanel>
          <NotesPanel hangId="etnic" hangName="Etnic Hang" addNote={addNote}></NotesPanel>
        </div>
        <NotesRoll hangId="standard" notes={notes.standard} barSize={barSize} deleteNote={deleteNote}></NotesRoll>
        <NotesRoll hangId="etnic" notes={notes.etnic} barSize={barSize} deleteNote={deleteNote}></NotesRoll>
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
    addNote: (hangId, value) => {
      return dispatch(addNote(hangId, value));},
    deleteNote: (hangId, noteId) => dispatch(deleteNote(hangId, noteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);