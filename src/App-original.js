import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AppOriginal extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Edited by: Vcttai.</p>
        </header>
      </div>
    );
  }
}

export default AppOriginal;
