import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  add = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  subtract = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        {/* {this.counter == '' || this.counter == 0 ? 
<div></div>
        : */}
        <div>        
            <button onClick={this.add}>ADD+</button>
            <button onClick={this.subtract}>MINUS-</button>
            <button onClick={this.ToggleClick}>
            { this.state.show ? 'Hide number' : 'Show number' }
            </button>
            { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
          </div>
        {/* } */}
      </div>
    );
  }
}


export default App;
