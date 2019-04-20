import React, { Component } from 'react';
import Chain from '../components/chain/Chain';
import './App.css';

const navStyle = {
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav justify-content-center bg-white" style={ navStyle }><h1>Blockchain</h1></nav>
        <Chain/>
      </div>
    );
  }
}

export default App;
