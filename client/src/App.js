import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'

class App extends Component {

  state = {
    pageHeader : 'Naming Contests'
  }

  
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <h1> Thatagata Das </h1>
      </div>
    );
  }
}

export default App;
