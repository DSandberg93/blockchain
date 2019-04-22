import React, { Component } from 'react';
import Chain from '../components/chain/Chain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="bg-white header">
          <div className="container">
            <h1>Blockchain</h1>
          </div>
        </header>
        <div className="content">
          <Chain/>
        </div>
        <footer>
          <div className="footer">
            <div className="website">
              <a className="website-link" href="https://webdsandberg.com/" target="_blank" rel="noopener noreferrer">WebDSandberg</a>
            </div>
            <div className="icons">
              <a href="https://github.com/DSandberg93" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"/>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
