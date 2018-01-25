import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import data from './testData.json'
class App extends Component {

  state = {
    pageHeader : 'Naming Contests',
    data : data
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
