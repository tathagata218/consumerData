import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header message="This is the Header Tag" />
        <h1> Thatagata Das </h1>
      </div>
    );
  }
}

export default App;
