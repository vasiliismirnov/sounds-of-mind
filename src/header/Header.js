import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="app-header row">
        <nav className="col">
          <a className="app-header-title" href="/">Sounds of Mind</a>
        </nav>
      </header>
    );
  }
}

export default Header;