import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="app-header row">
        <nav className="column">
          <a className="" href="/">Sounds of Mind</a>
        </nav>
      </header>
    );
  }
}

export default Header;