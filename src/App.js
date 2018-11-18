import React, { Component } from 'react';
import './App.css';
import Editor from './editor/Editor';
import Header from './header/Header';

class App extends Component {

    render() {
      return (
        <div className="app container">
          <Header></Header>

          <Editor></Editor>
        </div>
      );
    }
}

export default App;
