import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Contests from './components/contestPreview/contestPreview.js'
import test from './testData.json'
class App extends Component {

  state = {
    pageHeader : 'Naming Contests',
    stuff: []
  }
  componentDidMount () {
    this.setState({
      stuff : test.contests

    });

  }
  
  render() {
    console.log(this.state.stuff);
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.state.stuff.map((data)=>{
          return (
            <Contests info={data} />
          )
        })}
      </div>
    );
  }
}

export default App;
