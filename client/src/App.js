import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header message="This is the Header Tag" />
      </div>
    );
  }
}

export default App;
