import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Datepicker from 'react-datetime'

class App extends Component {

  constructor(args) {
    super(args)

    this.state = {
      enabled: false
    }
  }

  valid(d) { 
    console.log("checking")
    return this.state.enabled;
  }

  clicked = (e) => {
    console.log(e)
    this.setState(ps => ({"enabled": !ps.enabled}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.clicked}>toggle</button>
        <div>
          <Datepicker isValidDate={x => this.valid(x)} />
        </div>
      </div>
    );
  }
}

export default App;
