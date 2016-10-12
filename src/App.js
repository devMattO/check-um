import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SurflineData from './fetch-surfline.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Checkummm</h2>
        </div>
        <SurflineData />
      </div>
    );
  }
}

export default App;
